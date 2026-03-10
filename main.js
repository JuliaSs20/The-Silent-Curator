import * as THREE from 'three';

// --- CONFIGURATION & DATA ---
const artifacts = [
    {
        name: "Vaso Dinastia Ming",
        isAnomaly: true,
        instruction: "Procure por marcas modernas ou assinaturas borradas na base do vaso.",
        anomalyDetail: "Assinatura digital 'Made in 2024' na base.",
        color: 0x34495e,
        shape: 'torusKnot',
        anomalyType: 'texture'
    },
    {
        name: "Relógio de Bolso Vitoriano",
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
    }
];

let currentLevel = 0;
let score = 0;

// --- THREE.JS SETUP ---
const renderContainer = document.getElementById('container-objeto');

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0c0c0e);
scene.fog = new THREE.Fog(0x0c0c0e, 10, 25);

// Camera: Moved further back (from 5 to 8) as requested
const camera = new THREE.PerspectiveCamera(45, renderContainer.clientWidth / renderContainer.clientHeight, 0.1, 1000);
camera.position.z = 8;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(renderContainer.clientWidth, renderContainer.clientHeight);
renderContainer.appendChild(renderer.domElement);

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
    });

    currentMesh = new THREE.Mesh(geometry, material);
    artifactGroup.add(currentMesh);

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
    }
});

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
    }
    renderer.render(scene, camera);
}
animate();
