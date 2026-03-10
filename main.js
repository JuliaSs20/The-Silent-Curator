import * as THREE from 'three';

// --- CONFIGURATION & DATA ---
const artifactsConfig = [
    {
        id: "vaso",
        name: "O Vaso Grego",
        type: "3d",
        texture: "/assets/vaso grego.png",
        anomalies: ["codigo_barras", "assinatura_errada", "guerreiro_cansado"],
        ambientSound: "mar_suave",
        isAnachronistic: true,
        isMystical: false,
        isFake: true,
        baseColor: 0x8b4513
    },
    {
        id: "retrato",
        name: "Retrato de uma Nobre",
        type: "2d",
        texture: "/assets/quadro nobre.jpg",
        anomalies: ["zipper_invisivel", "reflexo_impossivel", "olhar_seguidor", "sorriso"],
        isAnachronistic: true,
        isMystical: true,
        isFake: false,
        baseColor: 0x4a3728
    },
    {
        id: "relogio",
        name: "Relógio de Bolso Vitoriano",
        type: "3d",
        texture: "/assets/relogio antigo.webp",
        anomalies: ["numero_iiii", "pilha_moderna", "tempo_reverso", "temperatura_fria"],
        isAnachronistic: true,
        isMystical: true,
        isFake: false,
        baseColor: 0xd4af37
    }
];

let currentLevel = 0;
let score = 0;
let scene, camera, renderer, artifactGroup, currentMesh;
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let loupeActive = false;
let uvActive = false;
let lastRotationTime = 0;
let anomalyTriggered = false;

// --- INITIALIZATION ---
function init() {
    const container = document.getElementById('game-canvas');
    
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050507);
    scene.fog = new THREE.Fog(0x050507, 2, 10);

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0.5, 5); // Angle down slightly
    camera.lookAt(0, -0.5, 0);

    renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    const mainLight = new THREE.SpotLight(0xffffff, 20);
    mainLight.position.set(2, 5, 5);
    mainLight.castShadow = true;
    mainLight.angle = Math.PI / 8;
    mainLight.penumbra = 0.3;
    mainLight.decay = 2;
    scene.add(mainLight);

    artifactGroup = new THREE.Group();
    scene.add(artifactGroup);

    // Bancada (Workbench)
    const benchTexture = new THREE.TextureLoader().load('/assets/bancada.jpg');
    const benchMaterial = new THREE.MeshStandardMaterial({
        map: benchTexture,
        roughness: 0.9,
        metalness: 0.2,
        color: 0x555555
    });
    const benchGeometry = new THREE.BoxGeometry(20, 1, 10);
    const benchMesh = new THREE.Mesh(benchGeometry, benchMaterial);
    benchMesh.position.set(0, -2, 0);
    benchMesh.receiveShadow = true;
    scene.add(benchMesh);
    
    // Level loading is deferred until player clicks Iniciar Turno
    animate();
    setupEvents();
}

function loadLevel(index) {
    const config = artifactsConfig[index];
    artifactGroup.clear();
    anomalyTriggered = false;

    // Reset UI
    document.querySelector('.ui-manual h2').innerText = config.name;
    document.getElementById('check-anacronismo').checked = false;
    document.getElementById('check-mistico').checked = false;
    document.getElementById('check-falso').checked = false;

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(config.texture);

    let geometry;
    if (config.type === "3d") {
        if (config.id === "vaso") {
            // Lathe Geometry for Vase
            const points = [];
            for (let i = 0; i < 10; i++) {
                points.push(new THREE.Vector2(Math.sin(i * 0.2) * 1 + 0.5, (i - 5) * 0.4));
            }
            geometry = new THREE.LatheGeometry(points, 32);
        } else {
            geometry = new THREE.CylinderGeometry(1, 1, 0.2, 32);
        }
    } else {
        // Painting
        geometry = new THREE.BoxGeometry(2.5, 3.5, 0.1);
    }

    const material = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.4,
        metalness: 0.1
    });

    currentMesh = new THREE.Mesh(geometry, material);
    currentMesh.castShadow = true;
    currentMesh.receiveShadow = true;
    artifactGroup.add(currentMesh);

    // Special Eyes for Portrait
    if (config.id === "retrato") {
        const eyeGeom = new THREE.SphereGeometry(0.05, 16, 16);
        const eyeMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const eyeLeft = new THREE.Mesh(eyeGeom, eyeMat);
        const eyeRight = new THREE.Mesh(eyeGeom, eyeMat);
        eyeLeft.position.set(-0.2, 0.8, 0.06);
        eyeRight.position.set(0.2, 0.8, 0.06);
        eyeLeft.name = "eye_l";
        eyeRight.name = "eye_r";
        currentMesh.add(eyeLeft, eyeRight);
    }

    artifactGroup.rotation.set(0, 0, 0);
}

// --- CONTROLS ---
function setupEvents() {
    window.addEventListener('mousedown', (e) => {
        if (e.target.tagName === 'CANVAS') isDragging = true;
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
        lastRotationTime = performance.now();
    });

    window.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const deltaX = e.clientX - previousMousePosition.x;
            const deltaY = e.clientY - previousMousePosition.y;

            artifactGroup.rotation.y += deltaX * 0.005;
            artifactGroup.rotation.x += deltaY * 0.005;
        }

        // Look-at Anomaly (Eyes)
        if (currentLevel === 1) { // Portrait
            const eyeL = currentMesh.getObjectByName("eye_l");
            const eyeR = currentMesh.getObjectByName("eye_r");
            if (eyeL && eyeR) {
                const mx = (e.clientX / window.innerWidth) * 2 - 1;
                const my = -(e.clientY / window.innerHeight) * 2 + 1;
                eyeL.position.x = -0.2 + mx * 0.01;
                eyeL.position.y = 0.8 + my * 0.01;
                eyeR.position.x = 0.2 + mx * 0.01;
                eyeR.position.y = 0.8 + my * 0.01;
            }
        }

        previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    // Tools
    document.getElementById('btn-loupe').addEventListener('click', toggleLoupe);
    document.getElementById('btn-uv').addEventListener('click', toggleUV);
    document.getElementById('btn-scale').addEventListener('click', toggleScale);
    document.getElementById('btn-finalizar').addEventListener('click', finishLevel);

    // Initial Screen
    document.getElementById('btn-start').addEventListener('click', () => {
        document.getElementById('start-screen').classList.remove('active');
        document.getElementById('ui-overlay').classList.remove('hidden-ui');
        loadLevel(0);
    });

    // Manual Modal
    const manualModal = document.getElementById('manual-modal');
    document.getElementById('btn-manual').addEventListener('click', () => {
        manualModal.classList.add('active');
    });
    document.getElementById('btn-close-manual').addEventListener('click', () => {
        manualModal.classList.remove('active');
    });
}

function toggleScale() {
    const btn = document.getElementById('btn-scale');
    const config = artifactsConfig[currentLevel];
    
    // Simulate scale interaction
    btn.classList.add('active');
    setTimeout(() => {
        btn.classList.remove('active');
        const discrepancy = config.isFake ? "8.4g" : "0.0g";
        // Create a temporary floating UI text instead of alert for better aesthetics
        showFloatingText(`Balança: Discrepância ${discrepancy}`);
    }, 800);
}

function showFloatingText(text) {
    const div = document.createElement('div');
    div.style.position = 'fixed';
    div.style.top = '50%';
    div.style.left = '50%';
    div.style.transform = 'translate(-50%, -50%)';
    div.style.padding = '1rem 2rem';
    div.style.background = 'rgba(0,0,0,0.8)';
    div.style.color = '#d4af37';
    div.style.border = '1px solid #d4af37';
    div.style.borderRadius = '8px';
    div.style.fontFamily = 'Crimson Pro, serif';
    div.style.zIndex = '3000';
    div.style.pointerEvents = 'none';
    div.style.animation = 'fadeOut 2s forwards';
    div.innerText = text;
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 2000);
}

function toggleLoupe() {
    loupeActive = !loupeActive;
    document.getElementById('btn-loupe').classList.toggle('active', loupeActive);
    
    const targetZ = loupeActive ? 3.0 : 5;
    const targetY = loupeActive ? 0 : 0.5;
    new TWEEN.Tween(camera.position)
        .to({ z: targetZ, y: targetY }, 500)
        .easing(TWEEN.Easing.Cubic.Out)
        .start();
}

function toggleUV() {
    uvActive = !uvActive;
    document.getElementById('btn-uv').classList.toggle('active', uvActive);
    
    if (uvActive) {
        scene.background.set(0x020010);
        scene.fog.color.set(0x020010);
    } else {
        scene.background.set(0x050507);
        scene.fog.color.set(0x050507);
    }
}

function finishLevel() {
    const stamp = document.getElementById('stamp-mark');
    stamp.classList.remove('animate-stamp');
    void stamp.offsetWidth; // trigger reflow
    stamp.classList.add('animate-stamp');

    setTimeout(() => {
        const config = artifactsConfig[currentLevel];
        const cAna = document.getElementById('check-anacronismo').checked;
        const cMis = document.getElementById('check-mistico').checked;
        const cFal = document.getElementById('check-falso').checked;

        let levelScore = 0;
        if (cAna === config.isAnachronistic) levelScore += 10;
        if (cMis === config.isMystical) levelScore += 10;
        if (cFal === config.isFake) levelScore += 10;
        
        score += levelScore;

        document.getElementById('feedback-title').innerText = levelScore === 30 ? "EXCELENTE" : "INCOMPLETO";
        document.getElementById('feedback-score').innerText = `Dedução: ${levelScore}/30. Cargo preservado.`;
        document.getElementById('feedback-modal').classList.remove('hidden');
    }, 600);
}

document.getElementById('btn-next').addEventListener('click', () => {
    currentLevel++;
    if (currentLevel >= artifactsConfig.length) {
        location.reload();
    } else {
        document.getElementById('feedback-modal').classList.add('hidden');
        loadLevel(currentLevel);
    }
});

// --- ANIMATION LOOP ---
function animate() {
    requestAnimationFrame(animate);
    TWEEN.update();

    if (!isDragging && currentMesh) {
        artifactGroup.rotation.y += 0.001;
        
        // Idle Anomaly: Reverse Clock
        if (currentLevel === 2) {
             // Logic for hands would go here if we had separate meshes
        }
    }

    // Vase Anomaly logic (Frame swap)
    if (currentLevel === 0 && !isDragging && performance.now() - lastRotationTime < 100 && !anomalyTriggered) {
        // Subtle texture flicker
        currentMesh.material.emissive.set(0x110000);
        setTimeout(() => currentMesh.material.emissive.set(0x000000), 16);
        anomalyTriggered = true;
    }

    renderer.render(scene, camera);
}

// Minimal Tween implementation for simple zooming if library not present
const TWEEN = {
    _tweens: [],
    Tween: function(obj) {
        this.target = obj;
        this.to = function(props, duration) {
            this.props = props;
            this.duration = duration;
            this.startTime = performance.now();
            this.startProps = { ...obj };
            TWEEN._tweens.push(this);
            return this;
        };
        this.easing = function(fn) { this.ease = fn; return this; };
        this.start = function() {};
    },
    Easing: { Cubic: { Out: (k) => 1 - Math.pow(1 - k, 3) } },
    update: function() {
        const now = performance.now();
        TWEEN._tweens = TWEEN._tweens.filter(t => {
            const elapsed = Math.min((now - t.startTime) / t.duration, 1);
            const val = t.ease ? t.ease(elapsed) : elapsed;
            for (let p in t.props) {
                t.target[p] = t.startProps[p] + (t.props[p] - t.startProps[p]) * val;
            }
            return elapsed < 1;
        });
    }
};

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

init();
