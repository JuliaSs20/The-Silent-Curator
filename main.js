import * as THREE from 'three';

// --- CONFIGURAÇÃO DOS ARTEFATOS (IMAGENS 2D) ---
const artifacts = [
    {
        id: "vaso",
        name: "Vaso Grego",
        image: "./assets/vaso grego.png",
        isAnomaly: true,
        instruction: "Verifique a base e a pintura em busca de códigos modernos.",
        anomalyDetail: "A pintura contém um QR Code em estilo antigo na base.",
        baseColor: 0x8b4513,
        width: 3.5,
        height: 4.5,
        weight: "1.5kg",
        expectedWeight: "1.5kg"
    },
    {
        id: "retrato",
        name: "Retrato de Nobre",
        image: "./assets/quadro nobre.jpg",
        isAnomaly: true,
        instruction: "Inspecione os olhos do retrato com a luz UV.",
        anomalyDetail: "Os olhos da pintura brilham com uma luz mística sob UV.",
        baseColor: 0x5a3e2b,
        width: 3.5,
        height: 4.5,
        weight: "2.1kg",
        expectedWeight: "2.1kg"
    },
    {
        id: "relogio",
        name: "Relógio de Bolso",
        image: "./assets/relogio antigo.webp",
        isAnomaly: true,
        instruction: "Use a lupa para ver os detalhes da imagem.",
        anomalyDetail: "Existe um microchip eletrônico camuflado na pintura.",
        baseColor: 0xd4af37,
        width: 4,
        height: 4,
        weight: "450g",
        expectedWeight: "300g"
    }
];

// --- ESTADO DO JOGO ---
let currentLevel = 0;
let score = 0;
let scene, camera, renderer, artifactGroup, currentMesh;
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let loupeActive = false;
let uvActive = false;

// --- INICIALIZAÇÃO ---
function init() {
    const container = document.getElementById('container-objeto');
    if (!container) return;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0c0c10);
    scene.fog = new THREE.Fog(0x0c0c10, 5, 20);

    camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 8;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 5, 10);
    scene.add(directionalLight);

    artifactGroup = new THREE.Group();
    scene.add(artifactGroup);

    setupEvents();
    animate();
}

function loadArtifact(index) {
    const data = artifacts[index];
    artifactGroup.clear();

    document.getElementById('artifact-name').innerText = data.name;
    document.getElementById('artifact-instruction').innerText = data.instruction;

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(data.image, (texture) => {
        // Ajusta escala baseada na imagem se necessário
        const aspect = texture.image.width / texture.image.height;
        const width = data.width;
        const height = width / aspect;

        const geometry = new THREE.PlaneGeometry(width, height);
        const material = new THREE.MeshStandardMaterial({
            map: texture,
            side: THREE.DoubleSide,
            transparent: true,
            emissive: 0x000000
        });

        currentMesh = new THREE.Mesh(geometry, material);
        artifactGroup.add(currentMesh);

        // INDICADORES DE ANOMALIA (Sutis na imagem 2D)
        if (data.isAnomaly) {
            if (data.id === "vaso") {
                const qrGeo = new THREE.PlaneGeometry(0.3, 0.3);
                const qrMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.8 });
                const qr = new THREE.Mesh(qrGeo, qrMat);
                qr.position.set(0.1, -1.8, 0.01);
                currentMesh.add(qr);
            } else if (data.id === "relogio") {
                const chipGeo = new THREE.PlaneGeometry(0.15, 0.15);
                const chipMat = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.6 });
                const chip = new THREE.Mesh(chipGeo, chipMat);
                chip.position.set(-0.5, 0.2, 0.01);
                currentMesh.add(chip);
            }
        }
    });

    artifactGroup.rotation.set(0, 0, 0);
    loupeActive = false;
    uvActive = false;
    camera.position.z = 8;
    document.getElementById('btn-loupe').classList.remove('active');
    document.getElementById('btn-uv').classList.remove('active');
}

function setupEvents() {
    const btnStart = document.getElementById('btn-start-game');
    const container = document.getElementById('container-objeto');

    btnStart.addEventListener('click', () => {
        document.getElementById('start-screen').classList.add('hidden');
        document.getElementById('ui-overlay').classList.remove('hidden');
        loadArtifact(0);
    });

    container.addEventListener('mousedown', () => isDragging = true);
    window.addEventListener('mouseup', () => isDragging = false);
    window.addEventListener('mousemove', (e) => {
        if (isDragging && currentMesh) {
            const deltaX = e.clientX - previousMousePosition.x;
            const deltaY = e.clientY - previousMousePosition.y;
            // Rotação limitada para 2D (mais como inclinação)
            artifactGroup.rotation.y += deltaX * 0.005;
            artifactGroup.rotation.x += deltaY * 0.005;
        }
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    document.getElementById('btn-loupe').addEventListener('click', () => {
        loupeActive = !loupeActive;
        document.getElementById('btn-loupe').classList.toggle('active', loupeActive);
        camera.position.z = loupeActive ? 4 : 8;
    });

    document.getElementById('btn-uv').addEventListener('click', () => {
        uvActive = !uvActive;
        document.getElementById('btn-uv').classList.toggle('active', uvActive);
        if (uvActive) {
            scene.background = new THREE.Color(0x020010);
            if (artifacts[currentLevel].id === "retrato") {
                currentMesh.material.emissive.set(0x8800ff);
                currentMesh.material.emissiveIntensity = 2.5;
            }
        } else {
            scene.background = new THREE.Color(0x0c0c10);
            if (currentMesh) currentMesh.material.emissive.set(0x000000);
        }
    });

    document.getElementById('btn-scale').addEventListener('click', () => {
        const item = artifacts[currentLevel];
        const info = document.getElementById('screen-info');
        info.innerText = `BALANÇA: ${item.weight} (ALVO: ${item.expectedWeight})`;
        info.classList.remove('hidden');
        info.classList.add('flash');
        setTimeout(() => { info.classList.add('hidden'); info.classList.remove('flash'); }, 3000);
    });

    document.getElementById('btn-normal').addEventListener('click', () => handleVerdict(false));
    document.getElementById('btn-anomaly').addEventListener('click', () => handleVerdict(true));
    document.getElementById('btn-next').addEventListener('click', nextLevel);
    document.getElementById('btn-restart').addEventListener('click', () => location.reload());
}

function handleVerdict(isAnomalyChoice) {
    const item = artifacts[currentLevel];
    const correct = isAnomalyChoice === item.isAnomaly;

    if (correct) {
        score += 100;
        document.getElementById('feedback-title').innerText = "Veredito Aceito";
        document.getElementById('feedback-score').innerText = item.isAnomaly ?
            `Anomalia detectada: ${item.anomalyDetail}` : "Item legítimo confirmado.";
        document.getElementById('feedback-modal').classList.remove('hidden');
    } else {
        document.getElementById('game-over-message').innerText = item.isAnomaly ?
            `Falha crítica. Era uma anomalia: ${item.anomalyDetail}` : "Erro. O item era legítimo.";
        document.getElementById('game-over-modal').classList.remove('hidden');
    }
}

function nextLevel() {
    currentLevel++;
    if (currentLevel < artifacts.length) {
        document.getElementById('feedback-modal').classList.add('hidden');
        loadArtifact(currentLevel);
    } else {
        document.getElementById('feedback-title').innerText = "Missão Cumprida";
        document.getElementById('feedback-score').innerText = `Sua precisão foi de ${score} pontos. Galeria segura.`;
        document.getElementById('btn-next').innerText = "Recomeçar";
        document.getElementById('btn-next').onclick = () => location.reload();
    }
}

function animate() {
    requestAnimationFrame(animate);
    if (!isDragging && currentMesh) {
        artifactGroup.rotation.y += 0.002;
    }
    renderer.render(scene, camera);
}

init();
