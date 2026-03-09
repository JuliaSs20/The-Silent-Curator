import * as THREE from 'three';

// --- CONFIGURATION & DATA ---
const artifacts = [
    {
        name: "Vaso Dinastia Ming",
        isAnachronistic: false,
        isMystical: false,
        isFake: true, // Assinatura borrada
        description: "Um vaso azul e branco. A porcelana parece autêntica, mas a marca na base parece... moderna.",
        color: 0x34495e,
        shape: 'torusKnot'
    },
    {
        name: "Relógio de Bolso Vitoriano",
        isAnachronistic: true, // Tem um microchip dentro se olhar com a lupa
        isMystical: false,
        isFake: false,
        description: "Um relógio ornamentado. O tique-tique é hipnotizante.",
        color: 0x95a5a6,
        shape: 'cylinder'
    },
    {
        name: "Estatueta de Jade",
        isAnachronistic: false,
        isMystical: true, // Pulsa luz quando a luz UV está ligada
        isFake: false,
        description: "Uma pequena estátua de jade. Dizem que ela sussurra à noite.",
        color: 0x27ae60,
        shape: 'octahedron'
    }
];

let currentLevel = 0;
let score = 0;

// --- THREE.JS SETUP ---
const container = document.getElementById('game-canvas');
const renderContainer = document.getElementById('container-objeto');

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0c0c0e);
scene.fog = new THREE.Fog(0x0c0c0e, 5, 15);

const camera = new THREE.PerspectiveCamera(45, renderContainer.clientWidth / renderContainer.clientHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(renderContainer.clientWidth, renderContainer.clientHeight);
renderContainer.appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
scene.add(ambientLight);

const spotLight = new THREE.SpotLight(0xffffff, 10);
spotLight.position.set(0, 5, 5);
spotLight.angle = Math.PI / 6;
spotLight.penumbra = 0.5;
spotLight.decay = 2;
spotLight.distance = 20;
scene.add(spotLight);

// Artifact Group
const artifactGroup = new THREE.Group();
scene.add(artifactGroup);

let currentMesh = null;

function loadArtifact(index) {
    const data = artifacts[index];
    artifactGroup.clear();

    let geometry;
    switch (data.shape) {
        case 'torusKnot': geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16); break;
        case 'cylinder': geometry = new THREE.CylinderGeometry(1, 1, 0.2, 32); break;
        case 'octahedron': geometry = new THREE.OctahedronGeometry(1.2); break;
        default: geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    }

    const material = new THREE.MeshStandardMaterial({
        color: data.color,
        metalness: 0.7,
        roughness: 0.2,
        emissive: 0x000000
    });

    currentMesh = new THREE.Mesh(geometry, material);
    artifactGroup.add(currentMesh);

    // Reset rotation
    artifactGroup.rotation.set(0, 0, 0);

    // Update UI
    document.querySelector('.ui-manual h2').innerText = data.name;
    document.getElementById('check-anacronismo').checked = false;
    document.getElementById('check-mistico').checked = false;
    document.getElementById('check-falso').checked = false;
}

// --- SMOOTH ROTATION LOGIC ---
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
const rotationSpeed = 0.005;

renderContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
});

window.addEventListener('mouseup', () => {
    isDragging = false;
});

window.addEventListener('mousemove', (e) => {
    if (isDragging && currentMesh) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        artifactGroup.rotation.y += deltaX * rotationSpeed;
        artifactGroup.rotation.x += deltaY * rotationSpeed;
    }
    previousMousePosition = { x: e.clientX, y: e.clientY };
});

// --- TOOLS LOGIC ---
const btnLoupe = document.getElementById('btn-loupe');
const btnUV = document.getElementById('btn-uv');

let loupeActive = false;
let uvActive = false;

btnLoupe.addEventListener('click', () => {
    loupeActive = !loupeActive;
    btnLoupe.classList.toggle('active', loupeActive);

    // Smooth Zoom
    const targetZ = loupeActive ? 3 : 5;
    const startZ = camera.position.z;
    const duration = 500;
    const startTime = performance.now();

    function animateZoom(time) {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        camera.position.z = startZ + (targetZ - startZ) * ease;
        if (progress < 1) requestAnimationFrame(animateZoom);
    }
    requestAnimationFrame(animateZoom);
});

btnUV.addEventListener('click', () => {
    uvActive = !uvActive;
    btnUV.classList.toggle('active', uvActive);

    const artifact = artifacts[currentLevel];
    if (uvActive) {
        scene.background = new THREE.Color(0x050010); // Deep purple/blue
        spotLight.color.set(0x8800ff);
        spotLight.intensity = 20;

        if (artifact.isMystical) {
            currentMesh.material.emissive.set(0x00ffcc);
            currentMesh.material.emissiveIntensity = 4.0;
        }
    } else {
        scene.background = new THREE.Color(0x0c0c0e);
        spotLight.color.set(0xffffff);
        spotLight.intensity = 10;
        currentMesh.material.emissive.set(0x000000);
    }
});

// --- CHECKLIST & VERDICT ---
const btnFinalizar = document.getElementById('btn-finalizar');
const modal = document.getElementById('feedback-modal');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackScore = document.getElementById('feedback-score');
const btnNext = document.getElementById('btn-next');
const manualContent = document.querySelector('.ui-manual');

btnFinalizar.addEventListener('click', () => {
    // Stamp Animation
    const stamp = document.createElement('div');
    stamp.className = 'stamp-reveal';
    stamp.innerText = 'VERIFICADO';
    manualContent.appendChild(stamp);

    setTimeout(() => {
        const artifact = artifacts[currentLevel];
        const checkAna = document.getElementById('check-anacronismo').checked;
        const checkMis = document.getElementById('check-mistico').checked;
        const checkFal = document.getElementById('check-falso').checked;

        let precisionScore = 0;
        if (checkAna === artifact.isAnachronistic) precisionScore += 10;
        if (checkMis === artifact.isMystical) precisionScore += 10;
        if (checkFal === artifact.isFake) precisionScore += 10;

        score += precisionScore;

        feedbackTitle.innerText = precisionScore === 30 ? "Perfeito!" : precisionScore > 10 ? "Bom Trabalho" : "Falhou";
        feedbackScore.innerText = `Você marcou ${precisionScore}/30 pontos neste artefato. Pontuação Total: ${score}`;

        modal.classList.remove('hidden');
        stamp.remove();
    }, 1000);
});

btnNext.addEventListener('click', () => {
    currentLevel++;
    if (currentLevel >= artifacts.length) {
        feedbackTitle.innerText = "Fim do Expediente";
        feedbackScore.innerText = `Você completou sua curadoria. Pontuação Total Final: ${score}`;
        btnNext.style.display = 'none';
    } else {
        loadArtifact(currentLevel);
        modal.classList.add('hidden');
    }
});

// --- ANIMATION RE-SIZE ---
window.addEventListener('resize', () => {
    const width = renderContainer.clientWidth;
    const height = renderContainer.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

// --- START ---
loadArtifact(0);

function animate() {
    requestAnimationFrame(animate);

    if (!isDragging && currentMesh) {
        artifactGroup.rotation.y += 0.002; // Auto-rotation idle
    }

    renderer.render(scene, camera);
}
animate();
