import * as THREE from 'three';

// --- CONFIGURAÇÃO DOS ARTEFATOS ---
const artifacts = [
    {
        id: "vaso",
        name: "Vaso Grego",
        texture: "./assets/vaso grego.png",
        isAnomaly: true,
        instruction: "Verifique a base e a pintura em busca de códigos modernos.",
        anomalyDetail: "A pintura contém um QR Code em estilo antigo na base.",
        baseColor: 0x8b4513,
        type: "3d_lathe",
        weight: "1.5kg",
        expectedWeight: "1.5kg"
    },
    {
        id: "retrato",
        name: "Retrato de Nobre",
        texture: "./assets/quadro nobre.jpg",
        isAnomaly: true,
        instruction: "Inspecione os olhos do retrato com a luz UV.",
        anomalyDetail: "Os olhos da pintura brilham com uma luz mística sob UV.",
        baseColor: 0x5a3e2b,
        type: "2d_painting",
        weight: "2.1kg",
        expectedWeight: "2.1kg"
    },
    {
        id: "relogio",
        name: "Relógio de Bolso",
        texture: "./assets/relogio antigo.webp",
        isAnomaly: true,
        instruction: "Use a lupa para ver os mecanismos internos.",
        anomalyDetail: "Existe um microchip eletrônico entre as engrenagens mecânicas.",
        baseColor: 0xd4af37,
        type: "3d_watch",
        weight: "450g",
        expectedWeight: "300g" // Anomalia de peso
    },
    {
        id: "reliquia_jade",
        name: "Moeda Antiga",
        texture: null, // Sem textura, apenas cor
        isAnomaly: false,
        instruction: "Analise a pureza do metal. Itens genuínos são leves.",
        anomalyDetail: "Moeda autêntica de ouro romano.",
        baseColor: 0x27ae60,
        type: "3d_coin",
        weight: "8.4g",
        expectedWeight: "8.4g"
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
    camera.position.z = 8; // Afastado para melhor visão

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Luzes
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1.2);
    spotLight.position.set(5, 10, 5);
    spotLight.castShadow = true;
    spotLight.angle = Math.PI / 4;
    spotLight.penumbra = 0.5;
    scene.add(spotLight);

    artifactGroup = new THREE.Group();
    scene.add(artifactGroup);

    setupEvents();
    animate();
}

function loadArtifact(index) {
    const data = artifacts[index];
    artifactGroup.clear();

    // UI
    document.getElementById('artifact-name').innerText = data.name;
    document.getElementById('artifact-instruction').innerText = data.instruction;

    const textureLoader = new THREE.TextureLoader();
    const texture = data.texture ? textureLoader.load(data.texture) : null;

    let geometry;
    const material = new THREE.MeshStandardMaterial({
        color: texture ? 0xffffff : data.baseColor,
        map: texture,
        metalness: 0.4,
        roughness: 0.6
    });

    // Criação baseada no tipo
    if (data.type === "3d_lathe") {
        const points = [];
        for (let i = 0; i < 12; i++) {
            points.push(new THREE.Vector2(Math.sin(i * 0.3) * 1.5 + 1.0, (i - 5) * 0.5));
        }
        geometry = new THREE.LatheGeometry(points, 64);
    } else if (data.type === "2d_painting") {
        geometry = new THREE.BoxGeometry(3, 4, 0.2);
    } else if (data.type === "3d_watch") {
        geometry = new THREE.CylinderGeometry(1.5, 1.5, 0.5, 64);
    } else {
        geometry = new THREE.CylinderGeometry(1.5, 1.5, 0.1, 64);
    }

    currentMesh = new THREE.Mesh(geometry, material);
    currentMesh.castShadow = true;
    currentMesh.receiveShadow = true;
    artifactGroup.add(currentMesh);

    // ADICIONAR INDICADORES DE ANOMALIA
    if (data.isAnomaly) {
        if (data.id === "vaso") {
            // QR Code falso na base
            const qrGeo = new THREE.PlaneGeometry(0.3, 0.3);
            const qrMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
            const qr = new THREE.Mesh(qrGeo, qrMat);
            qr.position.set(0, -2.4, 0.8);
            qr.rotation.x = -Math.PI / 4;
            currentMesh.add(qr);
        } else if (data.id === "relogio") {
            // Microchip interno (visível só com a lupa e rotação)
            const chipGeo = new THREE.BoxGeometry(0.1, 0.1, 0.05);
            const chipMat = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            const chip = new THREE.Mesh(chipGeo, chipMat);
            chip.position.set(0.3, 0, 0.25);
            currentMesh.add(chip);
        }
    }

    // Reset de estado
    artifactGroup.rotation.set(0, 0, 0);
    loupeActive = false;
    uvActive = false;
    camera.position.z = 8;
    document.getElementById('btn-loupe').classList.remove('active');
    document.getElementById('btn-uv').classList.remove('active');
    resetUV();
}

function setupEvents() {
    const btnStart = document.getElementById('btn-start-game');
    const container = document.getElementById('container-objeto');

    btnStart.addEventListener('click', () => {
        document.getElementById('start-screen').classList.add('hidden');
        document.getElementById('ui-overlay').classList.remove('hidden');
        loadArtifact(0);
    });

    // Rotação
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

    // Ferramentas
    document.getElementById('btn-loupe').addEventListener('click', () => {
        loupeActive = !loupeActive;
        document.getElementById('btn-loupe').classList.toggle('active', loupeActive);
        camera.position.z = loupeActive ? 4.5 : 8;
    });

    document.getElementById('btn-uv').addEventListener('click', () => {
        uvActive = !uvActive;
        document.getElementById('btn-uv').classList.toggle('active', uvActive);
        if (uvActive) {
            scene.background = new THREE.Color(0x020010);
            if (artifacts[currentLevel].id === "retrato") {
                currentMesh.material.emissive.set(0x8800ff);
                currentMesh.material.emissiveIntensity = 2.0;
            }
        } else {
            resetUV();
        }
    });

    document.getElementById('btn-scale').addEventListener('click', () => {
        const item = artifacts[currentLevel];
        const info = document.getElementById('screen-info');
        info.innerText = `BALANÇA: PESO DETECTADO ${item.weight} (ALVO: ${item.expectedWeight})`;
        info.classList.remove('hidden');
        info.classList.add('flash');
        setTimeout(() => {
            info.classList.add('hidden');
            info.classList.remove('flash');
        }, 3000);
    });

    // Veredito
    document.getElementById('btn-normal').addEventListener('click', () => handleVerdict(false));
    document.getElementById('btn-anomaly').addEventListener('click', () => handleVerdict(true));
    document.getElementById('btn-next').addEventListener('click', nextLevel);
    document.getElementById('btn-restart').addEventListener('click', () => location.reload());

    window.addEventListener('resize', () => {
        const c = document.getElementById('container-objeto');
        camera.aspect = c.clientWidth / c.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(c.clientWidth, c.clientHeight);
    });
}

function resetUV() {
    scene.background = new THREE.Color(0x0c0c10);
    if (currentMesh) {
        currentMesh.material.emissive.set(0x000000);
    }
}

function handleVerdict(isAnomalyChoice) {
    const item = artifacts[currentLevel];
    const correct = isAnomalyChoice === item.isAnomaly;

    if (correct) {
        score += 100;
        document.getElementById('feedback-title').innerText = "Veredito Aceito";
        document.getElementById('feedback-score').innerText = item.isAnomaly ?
            `Anomalia Neutralizada: ${item.anomalyDetail}` :
            "Autenticidade Confirmada. O item é legítimo.";
        document.getElementById('feedback-modal').classList.remove('hidden');
    } else {
        document.getElementById('game-over-message').innerText = item.isAnomaly ?
            `Você falhou. O objeto era uma anomalia: ${item.anomalyDetail}` :
            `Erro Crítico. O objeto era legítimo. Você destruiu uma peça insubstituível.`;
        document.getElementById('game-over-modal').classList.remove('hidden');
    }
}

function nextLevel() {
    currentLevel++;
    if (currentLevel < artifacts.length) {
        document.getElementById('feedback-modal').classList.add('hidden');
        loadArtifact(currentLevel);
    } else {
        document.getElementById('feedback-title').innerText = "Galeria Concluída";
        document.getElementById('feedback-score').innerText = `Parabéns. Sua precisão protegeu a história. Pontuação: ${score}`;
        document.getElementById('btn-next').innerText = "Finalizar Turno";
        document.getElementById('btn-next').onclick = () => location.reload();
    }
}

function animate() {
    requestAnimationFrame(animate);
    if (!isDragging && currentMesh) {
        artifactGroup.rotation.y += 0.003;
    }
    renderer.render(scene, camera);
}

init();
