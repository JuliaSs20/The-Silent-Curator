import * as THREE from 'three';

// --- ARTIFACT DATA ---
const artifactsData = [
    {
        name: "Vaso Dinastia Ming",
        isAnomaly: true,
        instruction: "Verifique a base em busca de marcações anacrônicas.",
        anomalyDetail: "Possui um código de barras moderno na base.",
        color: 0x34495e,
        shape: 'torus',
        anomalyType: 'mesh',
        weight: "1.2kg",
        expectedWeight: "1.2kg"
    },
    {
        name: "Relógio de Bolso Vitoriano",
        isAnomaly: true,
        instruction: "Use a lupa para observar o interior das engrenagens.",
        anomalyDetail: "Há um microchip eletrônico escondido no mecanismo.",
        color: 0x95a5a6,
        shape: 'cylinder',
        anomalyType: 'chip',
        weight: "250g",
        expectedWeight: "250g"
    },
    {
        name: "Moeda de Ouro Romana",
        isAnomaly: false,
        instruction: "Ouro real não deve reagir à luz UV. Verifique a pureza.",
        anomalyDetail: "Peça autêntica do período de Augusto.",
        color: 0xd4af37,
        shape: 'coin',
        anomalyType: 'none',
        weight: "8.4g",
        expectedWeight: "8.4g"
    },
    {
        name: "Estatueta de Jade",
        isAnomaly: true,
        instruction: "Relíquias místicas frequentemente brilham sob radiação ultravioleta.",
        anomalyDetail: "A estatueta emite uma aura verde pulsante sob luz UV.",
        color: 0x27ae60,
        shape: 'octahedron',
        anomalyType: 'uv',
        weight: "300g",
        expectedWeight: "300g"
    },
    {
        name: "Cálice Real",
        isAnomaly: true,
        instruction: "Falsificações modernas costumam ter peso inconsistente.",
        anomalyDetail: "O cálice é muito mais pesado do que o ouro maciço deveria ser (preenchido com chumbo).",
        color: 0xffd700,
        shape: 'box',
        anomalyType: 'weight',
        weight: "4.5kg",
        expectedWeight: "2.1kg"
    }
];

// --- GAME STATE ---
let currentLevel = 0;
let score = 0;
let scene, camera, renderer, artifactGroup, currentMesh;
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let loupeActive = false;
let uvActive = false;

// --- INITIALIZATION ---
function init() {
    const renderContainer = document.getElementById('container-objeto');
    if (!renderContainer) return;

    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0c);
    scene.fog = new THREE.Fog(0x0a0a0c, 10, 25);

    // Camera setup - Moved back to 8 as requested previously
    camera = new THREE.PerspectiveCamera(45, renderContainer.clientWidth / renderContainer.clientHeight, 0.1, 1000);
    camera.position.z = 8;

    // Renderer setup
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(renderContainer.clientWidth, renderContainer.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderContainer.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1.5);
    spotLight.position.set(5, 10, 5);
    spotLight.angle = Math.PI / 6;
    spotLight.penumbra = 0.4;
    spotLight.decay = 2;
    spotLight.distance = 40;
    scene.add(spotLight);

    // Group for the artifact
    artifactGroup = new THREE.Group();
    scene.add(artifactGroup);

    setupEventListeners();
    animate();
}

function loadArtifact(index) {
    const data = artifactsData[index];
    artifactGroup.clear();

    // UI Updates
    document.getElementById('artifact-name').innerText = data.name;
    document.getElementById('artifact-instruction').innerText = data.instruction;

    // Geometry selection
    let geometry;
    switch (data.shape) {
        case 'torus': geometry = new THREE.TorusKnotGeometry(1, 0.3, 128, 32); break;
        case 'cylinder': geometry = new THREE.CylinderGeometry(1.2, 1.2, 0.4, 64); break;
        case 'octahedron': geometry = new THREE.OctahedronGeometry(1.5); break;
        case 'coin': geometry = new THREE.CylinderGeometry(1.5, 1.5, 0.1, 64); break;
        default: geometry = new THREE.BoxGeometry(1.8, 1.8, 1.8);
    }

    const material = new THREE.MeshStandardMaterial({
        color: data.color,
        metalness: 0.7,
        roughness: 0.3,
        emissive: 0x000000
    });

    currentMesh = new THREE.Mesh(geometry, material);
    artifactGroup.add(currentMesh);

    // ADD ANOMALIES
    if (data.isAnomaly) {
        if (data.anomalyType === 'chip') {
            const chipGeo = new THREE.BoxGeometry(0.1, 0.1, 0.05);
            const chipMat = new THREE.MeshStandardMaterial({ color: 0x00ff00, emissive: 0x00ff00 });
            const chip = new THREE.Mesh(chipGeo, chipMat);
            chip.position.set(0.2, 0.3, 1.2);
            currentMesh.add(chip);
        } else if (data.anomalyType === 'mesh') {
            // Simulating barcode with small stripes
            for (let i = 0; i < 5; i++) {
                const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.2, 0.02), new THREE.MeshBasicMaterial({ color: 0x000000 }));
                stripe.position.set(-0.1 + (i * 0.05), -1.3, 0.5);
                currentMesh.add(stripe);
            }
        }
    }

    // Reset state
    artifactGroup.rotation.set(0, 0, 0);
    loupeActive = false;
    uvActive = false;
    camera.position.z = 8;
    document.getElementById('btn-loupe').classList.remove('active');
    document.getElementById('btn-uv').classList.remove('active');
    resetUV();
}

// --- CONTROLS & EVENTS ---
function setupEventListeners() {
    const btnStart = document.getElementById('btn-start-game');
    const startScreen = document.getElementById('start-screen');
    const uiOverlay = document.getElementById('ui-overlay');
    const container = document.getElementById('container-objeto');

    btnStart.addEventListener('click', () => {
        startScreen.classList.add('hidden');
        uiOverlay.classList.remove('hidden');
        loadArtifact(0);
    });

    // Rotation logic
    container.addEventListener('mousedown', () => isDragging = true);
    window.addEventListener('mouseup', () => isDragging = false);
    window.addEventListener('mousemove', (e) => {
        if (isDragging && currentMesh) {
            const deltaX = e.clientX - previousMousePosition.x;
            const deltaY = e.clientY - previousMousePosition.y;
            artifactGroup.rotation.y += deltaX * 0.005;
            artifactGroup.rotation.x += deltaY * 0.005;
        }
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    // Tool: Loupe (Lupa)
    document.getElementById('btn-loupe').addEventListener('click', () => {
        loupeActive = !loupeActive;
        document.getElementById('btn-loupe').classList.toggle('active', loupeActive);
        camera.position.z = loupeActive ? 4.5 : 8; // Zoom in/out
    });

    // Tool: UV Light
    document.getElementById('btn-uv').addEventListener('click', () => {
        uvActive = !uvActive;
        document.getElementById('btn-uv').classList.toggle('active', uvActive);
        if (uvActive) {
            scene.background = new THREE.Color(0x050010);
            const data = artifactsData[currentLevel];
            if (data.isAnomaly && data.anomalyType === 'uv') {
                currentMesh.material.emissive.set(0x00ff00);
                currentMesh.material.emissiveIntensity = 2.5;
            }
        } else {
            resetUV();
        }
    });

    // Tool: Scale (Balança)
    document.getElementById('btn-scale').addEventListener('click', () => {
        const data = artifactsData[currentLevel];
        const info = document.getElementById('screen-info');
        info.innerText = `BALANÇA: PESO DETECTADO ${data.weight} (ESPERADO: ${data.expectedWeight})`;
        info.classList.remove('hidden');
        info.classList.add('flash');
        setTimeout(() => {
            info.classList.remove('flash');
            info.classList.add('hidden');
        }, 3000);
    });

    // Verdict buttons
    document.getElementById('btn-normal').addEventListener('click', () => handleVerdict(false));
    document.getElementById('btn-anomaly').addEventListener('click', () => handleVerdict(true));

    // Modal buttons
    document.getElementById('btn-next').addEventListener('click', nextLevel);
    document.getElementById('btn-restart').addEventListener('click', restartGame);

    window.addEventListener('resize', onWindowResize);
}

function resetUV() {
    scene.background = new THREE.Color(0x0a0a0c);
    if (currentMesh) {
        currentMesh.material.emissive.set(0x000000);
    }
}

function handleVerdict(playerChoiceIsAnomaly) {
    const artifact = artifactsData[currentLevel];
    const isCorrect = playerChoiceIsAnomaly === artifact.isAnomaly;

    if (isCorrect) {
        score += 100;
        document.getElementById('feedback-title').innerText = "Veredito Correto";
        document.getElementById('feedback-score').innerText = artifact.isAnomaly ?
            `Anomalia identificada com sucesso: ${artifact.anomalyDetail}` :
            "Você confirmou a autenticidade deste artefato genuíno.";
        document.getElementById('feedback-modal').classList.remove('hidden');
    } else {
        document.getElementById('game-over-message').innerText = artifact.isAnomaly ?
            `Você falhou em identificar a anomalia: ${artifact.anomalyDetail}` :
            `Você condenou injustamente um artefato legítimo. ${artifact.name} era autêntico.`;
        document.getElementById('game-over-modal').classList.remove('hidden');
    }
}

function nextLevel() {
    currentLevel++;
    if (currentLevel < artifactsData.length) {
        document.getElementById('feedback-modal').classList.add('hidden');
        loadArtifact(currentLevel);
    } else {
        document.getElementById('feedback-title').innerText = "Jornada Concluída";
        document.getElementById('feedback-score').innerText = `Parabéns, Curador. Você protegeu o museu com uma pontuação de ${score}.`;
        document.getElementById('btn-next').innerText = "Recomeçar Turno";
        document.getElementById('btn-next').onclick = () => location.reload();
    }
}

function restartGame() {
    location.reload();
}

function onWindowResize() {
    const container = document.getElementById('container-objeto');
    if (!container) return;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

function animate() {
    requestAnimationFrame(animate);
    if (!isDragging && currentMesh) {
        artifactGroup.rotation.y += 0.002;
    }
    renderer.render(scene, camera);
}

// --- START ---
init();
