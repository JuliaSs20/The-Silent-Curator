// --- CONFIGURATION & DATA ---
const artifactsConfig = [
    {
<<<<<<< HEAD
        name: "Vaso Dinastia Ming",
        isAnomaly: true,
        instruction: "Procure por marcas modernas ou assinaturas borradas na base do vaso.",
        anomalyDetail: "Assinatura digital 'Made in 2024' na base.",
        color: 0x34495e,
        shape: 'torusKnot',
        anomalyType: 'texture'
=======
        id: "vaso",
        name: "O Vaso Grego",
        type: "3d",
        texture: "./assets/vaso grego.png",
        anomalies: ["codigo_barras", "assinatura_errada", "guerreiro_cansado"],
        ambientSound: "mar_suave",
        isAnachronistic: true,
        isMystical: false,
        isFake: true,
        baseColor: 0x8b4513
>>>>>>> 8a5de6750ed1c7eb85aa04fca0b98feb6b68dfa6
    },
    {
        id: "retrato",
        name: "Retrato de uma Nobre",
        type: "2d",
        texture: "./assets/quadro nobre.jpg",
        anomalies: ["zipper_invisivel", "reflexo_impossivel", "olhar_seguidor", "sorriso"],
        isAnachronistic: true,
        isMystical: true,
        isFake: false,
        baseColor: 0x4a3728
    },
    {
        id: "relogio",
        name: "Relógio de Bolso Vitoriano",
<<<<<<< HEAD
        isAnomaly: true,
        instruction: "Use a lupa para inspecionar os mecanismos internos em busca de componentes eletrônicos.",
        anomalyDetail: "Microchip detectado entre as engrenagens.",
        color: 0x95a5a6,
        shape: 'cylinder',
        anomalyType: 'mesh'
    },
    {
        name: "Estatueta de Jade",
        isAnomaly: false,
        instruction: "Esta peça parece autêntica. Verifique se há reações estranhas sob luz UV.",
        anomalyDetail: "Nenhuma anomalia detectada.",
        color: 0x27ae60,
        shape: 'octahedron',
        anomalyType: 'none'
    },
    {
        name: "Cálice de Ouro",
        isAnomaly: true,
        instruction: "Inspecione o brilho do ouro sob luz UV. O ouro real não deve brilhar verde.",
        anomalyDetail: "O objeto brilha intensamente sob luz UV, indicando material místico.",
        color: 0xffd700,
        shape: 'box',
        anomalyType: 'uv'
=======
        type: "3d",
        texture: "./assets/relogio antigo.webp",
        anomalies: ["numero_iiii", "pilha_moderna", "tempo_reverso", "temperatura_fria"],
        isAnachronistic: true,
        isMystical: true,
        isFake: false,
        baseColor: 0xd4af37
>>>>>>> 8a5de6750ed1c7eb85aa04fca0b98feb6b68dfa6
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

<<<<<<< HEAD
// --- THREE.JS SETUP ---
const renderContainer = document.getElementById('container-objeto');

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0c0c0e);
scene.fog = new THREE.Fog(0x0c0c0e, 10, 25);

// Camera: Moved further back (from 5 to 8) as requested
const camera = new THREE.PerspectiveCamera(45, renderContainer.clientWidth / renderContainer.clientHeight, 0.1, 1000);
camera.position.z = 8;
=======
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
>>>>>>> 8a5de6750ed1c7eb85aa04fca0b98feb6b68dfa6

    // Lights
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

<<<<<<< HEAD
// Lighting: Reduced intensity (from 10 to 5) and adjusted position to avoid "blown out" look
const ambientLight = new THREE.AmbientLight(0x404040, 1.0);
scene.add(ambientLight);

const spotLight = new THREE.SpotLight(0xffffff, 5); // Reduced intensity
spotLight.position.set(2, 5, 5);
spotLight.angle = Math.PI / 4;
spotLight.penumbra = 0.3;
spotLight.decay = 2;
spotLight.distance = 30;
scene.add(spotLight);

// Artifact Group
const artifactGroup = new THREE.Group();
scene.add(artifactGroup);

let currentMesh = null;
let anomalyIndicator = null;

function loadArtifact(index) {
    const data = artifacts[index];
    artifactGroup.clear();

    // UI Updates
    document.getElementById('artifact-name').innerText = data.name;
    document.getElementById('artifact-instruction').innerText = data.instruction;

    let geometry;
    switch (data.shape) {
        case 'torusKnot': geometry = new THREE.TorusKnotGeometry(1, 0.3, 128, 32); break;
        case 'cylinder': geometry = new THREE.CylinderGeometry(1.2, 1.2, 0.4, 64); break;
        case 'octahedron': geometry = new THREE.OctahedronGeometry(1.5); break;
        default: geometry = new THREE.BoxGeometry(1.8, 1.8, 1.8);
    }

    const material = new THREE.MeshStandardMaterial({
        color: data.color,
        metalness: 0.6,
        roughness: 0.4,
        emissive: 0x000000
=======
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
    const benchTexture = new THREE.TextureLoader().load('./assets/bancada.jpg');
    const benchMaterial = new THREE.MeshStandardMaterial({
        map: benchTexture,
        roughness: 0.9,
        metalness: 0.2,
        color: 0x555555
>>>>>>> 8a5de6750ed1c7eb85aa04fca0b98feb6b68dfa6
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

<<<<<<< HEAD
    // Visual Indicator for Anomalies
    if (data.isAnomaly) {
        if (data.anomalyType === 'mesh') {
            // Add a small "tech" piece inside/on surface
            const techGeo = new THREE.BoxGeometry(0.1, 0.1, 0.1);
            const techMat = new THREE.MeshStandardMaterial({ color: 0x00ff00, emissive: 0x00ff00 });
            anomalyIndicator = new THREE.Mesh(techGeo, techMat);
            anomalyIndicator.position.set(0.5, 0.2, 1.0);
            currentMesh.add(anomalyIndicator);
        } else if (data.anomalyType === 'texture') {
            // Visual simulated mark
            const markGeo = new THREE.SphereGeometry(0.05, 16, 16);
            const markMat = new THREE.MeshStandardMaterial({ color: 0xff0000 });
            anomalyIndicator = new THREE.Mesh(markGeo, markMat);
            anomalyIndicator.position.set(-0.3, -1.1, 0.5);
            currentMesh.add(anomalyIndicator);
        }
    }

    artifactGroup.rotation.set(0, 0, 0);
}

// --- CONTROLS ---
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
const rotationSpeed = 0.005;

renderContainer.addEventListener('mousedown', () => isDragging = true);
window.addEventListener('mouseup', () => isDragging = false);
window.addEventListener('mousemove', (e) => {
    if (isDragging && currentMesh) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;
        artifactGroup.rotation.y += deltaX * rotationSpeed;
        artifactGroup.rotation.x += deltaY * rotationSpeed;
    }
    previousMousePosition = { x: e.clientX, y: e.clientY };
});

// --- TOOLS ---
const btnLoupe = document.getElementById('btn-loupe');
const btnUV = document.getElementById('btn-uv');
let loupeActive = false;
let uvActive = false;

btnLoupe.addEventListener('click', () => {
    loupeActive = !loupeActive;
    btnLoupe.classList.toggle('active', loupeActive);
    const targetZ = loupeActive ? 5 : 8; // Zoom level adjusted for deeper camera
    camera.position.z = targetZ;
});

btnUV.addEventListener('click', () => {
    uvActive = !uvActive;
    btnUV.classList.toggle('active', uvActive);
    const data = artifacts[currentLevel];

    if (uvActive) {
        scene.background = new THREE.Color(0x050010);
        spotLight.color.set(0x8800ff);
        spotLight.intensity = 10;
        if (data.isAnomaly && data.anomalyType === 'uv') {
            currentMesh.material.emissive.set(0x00ff00);
            currentMesh.material.emissiveIntensity = 2.0;
        }
    } else {
        scene.background = new THREE.Color(0x0c0c0e);
        spotLight.color.set(0xffffff);
        spotLight.intensity = 5;
        currentMesh.material.emissive.set(0x000000);
=======
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
>>>>>>> 8a5de6750ed1c7eb85aa04fca0b98feb6b68dfa6
    }

<<<<<<< HEAD
// --- DECISION LOGIC ---
const btnNormal = document.getElementById('btn-normal');
const btnAnomaly = document.getElementById('btn-anomaly');
const feedbackModal = document.getElementById('feedback-modal');
const gameOverModal = document.getElementById('game-over-modal');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');

function handleVerdict(playerChoiceIsAnomaly) {
    const artifact = artifacts[currentLevel];
    const isCorrect = playerChoiceIsAnomaly === artifact.isAnomaly;

    if (isCorrect) {
        score += 100;
        document.getElementById('feedback-title').innerText = "Certo!";
        document.getElementById('feedback-score').innerText = `Você identificou corretamente o ${artifact.name}. ${artifact.isAnomaly ? 'Detalhe: ' + artifact.anomalyDetail : 'A peça é genuína.'}`;
        feedbackModal.classList.remove('hidden');
    } else {
        document.getElementById('game-over-message').innerText = `Você falhou no ${artifact.name}. ${artifact.isAnomaly ? 'Havia uma anomalia: ' + artifact.anomalyDetail : 'A peça não tinha anomalias.'}`;
        gameOverModal.classList.remove('hidden');
    }
}

btnNormal.addEventListener('click', () => handleVerdict(false));
btnAnomaly.addEventListener('click', () => handleVerdict(true));

btnNext.addEventListener('click', () => {
    currentLevel++;
    if (currentLevel >= artifacts.length) {
        document.getElementById('feedback-title').innerText = "Excelente Trabalho";
        document.getElementById('feedback-score').innerText = `Você concluiu sua jornada de curador com ${score} pontos.`;
        btnNext.style.display = 'none';
    } else {
        loadArtifact(currentLevel);
        feedbackModal.classList.add('hidden');
    }
});

btnRestart.addEventListener('click', () => {
    currentLevel = 0;
    score = 0;
    loadArtifact(0);
    gameOverModal.classList.add('hidden');
    btnNext.style.display = 'block';
});

// --- RENDER LOOP & RESIZE ---
window.addEventListener('resize', () => {
    const width = renderContainer.clientWidth;
    const height = renderContainer.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

loadArtifact(0);

function animate() {
    requestAnimationFrame(animate);
    if (!isDragging && currentMesh) {
        artifactGroup.rotation.y += 0.003;
=======
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
>>>>>>> 8a5de6750ed1c7eb85aa04fca0b98feb6b68dfa6
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
