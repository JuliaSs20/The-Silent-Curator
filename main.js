/* ==========================================
   THE SILENT CURATOR — GAME LOGIC
   Versão 2.0 — Sem dependência de Three.js
   ========================================== */

// ===== DADOS DOS ARTEFATOS =====
var ARTIFACTS = [
    {
        id: "vaso",
        name: "Vaso Grego Antigo",
        image: "./assets/vaso grego.png",
        isAnomaly: true,
        auctionHouse: "Casa de Leilões Christie's — Londres",
        auctionPrice: "$18.500",
        origin: "Escavação arqueológica em Atenas, Grécia — 340 a.C.",
        description: "Um vaso cerâmico com figuras negras típicas do período clássico grego. Foi encontrado em uma tumba real durante escavações recentes.",
        manualHint: "🔍 Use a LUPA para examinar a base do vaso. Vasos autênticos não possuem marcações digitais.\n\n⚖️ Use a BALANÇA para verificar o peso — cerâmica antiga é mais leve que réplicas modernas.\n\n📌 PROCURE: Códigos de barras, etiquetas ou marcas de fábrica modernas.",
        anomalyDetail: "Código de barras moderno encontrado na base do vaso.",
        anomalyMarkers: [
            { x: 48, y: 88, w: 8, h: 5, tool: "loupe", label: "Código de barras" }
        ],
        uvReaction: false,
        weight: "1.8kg",
        expectedWeight: "0.9kg"
    },
    {
        id: "retrato",
        name: "Retrato de Nobre",
        image: "./assets/quadro nobre.jpg",
        isAnomaly: true,
        auctionHouse: "Maison de Ventes Drouot — Paris",
        auctionPrice: "$42.000",
        origin: "Coleção particular, família aristocrata portuguesa — séc. XIX",
        description: "Retrato a óleo de um jovem nobre em trajes formais. A pintura apresenta tons escuros e traços de estilo neoclássico europeu.",
        manualHint: "🔦 Use a LUZ UV para revelar reações na tinta. Pinturas com propriedades anômalas emitem brilho sob ultravioleta.\n\n🔍 Use a LUPA para examinar os olhos do retrato — há relatos de que 'os olhos seguem o observador'.\n\n📌 PROCURE: Brilho anormal sob UV, olhos com movimento estranho.",
        anomalyDetail: "A pintura emite uma aura mística violeta sob luz ultravioleta. Os olhos parecem seguir o observador.",
        anomalyMarkers: [
            { x: 42, y: 35, w: 6, h: 4, tool: "uv", label: "Olho esquerdo reage" },
            { x: 52, y: 35, w: 6, h: 4, tool: "uv", label: "Olho direito reage" }
        ],
        uvReaction: true,
        weight: "2.1kg",
        expectedWeight: "2.1kg"
    },
    {
        id: "relogio",
        name: "Relógio de Bolso Vitoriano",
        image: "./assets/relogio antigo.webp",
        isAnomaly: true,
        auctionHouse: "Bonhams Auction House — Nova York",
        auctionPrice: "$8.200",
        origin: "Espólio de relojoeiro em Manchester, Inglaterra — 1887",
        description: "Relógio de bolso em ouro com mecanismo aparente. O tique-taque é preciso após mais de um século. Curiosamente, nunca precisou de manutenção.",
        manualHint: "🔍 Use a LUPA para inspecionar o mecanismo. Relógios da era vitoriana não possuíam componentes eletrônicos.\n\n⚖️ Use a BALANÇA — se o peso for maior que o esperado, pode haver componentes ocultos.\n\n📌 PROCURE: Microchips, LEDs ou circuitos entre as engrenagens.",
        anomalyDetail: "Microchip eletrônico encontrado entre as engrenagens mecânicas. O relógio não é puramente analógico.",
        anomalyMarkers: [
            { x: 35, y: 45, w: 5, h: 5, tool: "loupe", label: "Microchip detectado" }
        ],
        uvReaction: false,
        weight: "450g",
        expectedWeight: "280g"
    },
    {
        id: "moeda",
        name: "Moeda Romana de Ouro",
        image: "./assets/unnamed.jpg",
        isAnomaly: false,
        auctionHouse: "Numismática Roma Aurea — Roma",
        auctionPrice: "$5.800",
        origin: "Sítio arqueológico no Fórum Romano — 27 a.C.",
        description: "Moeda de ouro do período de Augusto com a face do imperador gravada. Apresenta desgaste natural compatível com a idade.",
        manualHint: "🔍 Use a LUPA para verificar o desgaste natural. Moedas autênticas têm erosão uniforme.\n\n⚖️ A BALANÇA deve confirmar peso consistente com ouro antigo.\n\n🔦 Sob LUZ UV, ouro autêntico NÃO deve reagir.\n\n📌 Esta peça pode ser genuína. Analise com cuidado antes de julgar.",
        anomalyDetail: "Peça autêntica do período de Augusto. Ouro puro com desgaste natural.",
        anomalyMarkers: [],
        uvReaction: false,
        weight: "8.4g",
        expectedWeight: "8.4g"
    }
];

// ===== ITENS DA LOJA =====
var SHOP_ITEMS = [
    { id: "loupe_2", name: "Lupa Avançada", desc: "Zoom 2x maior", cost: 150, tool: "loupe", level: 2, icon: "🔍" },
    { id: "loupe_3", name: "Lupa Profissional", desc: "Zoom 3x + detecção", cost: 400, tool: "loupe", level: 3, icon: "🔎" },
    { id: "uv_2", name: "UV de Onda Longa", desc: "Revelação mais intensa", cost: 150, tool: "uv", level: 2, icon: "🔦" },
    { id: "uv_3", name: "UV de Espectro Total", desc: "Revela todo o espectro", cost: 400, tool: "uv", level: 3, icon: "💡" },
    { id: "scale_2", name: "Balança Digital", desc: "Precisão de 0.1g", cost: 200, tool: "scale", level: 2, icon: "⚖️" }
];

// ===== ESTADO DO JOGO =====
var gameState = {
    currentLevel: 0,
    score: 0,
    coins: 50,
    toolLevels: { loupe: 1, uv: 1, scale: 1 },
    backpack: [],
    loupeActive: false,
    uvActive: false,
    purchased: []
};

// ===== NAVEGAÇÃO ENTRE TELAS =====
function showScreen(id) {
    var screens = document.querySelectorAll('.screen');
    for (var i = 0; i < screens.length; i++) {
        screens[i].classList.remove('active');
    }
    document.getElementById(id).classList.add('active');
}

function startGame() {
    gameState.currentLevel = 0;
    gameState.score = 0;
    gameState.coins = 50;
    gameState.backpack = [];
    showAuction(0);
}

function showAuction(index) {
    var item = ARTIFACTS[index];
    document.getElementById('auction-number').innerText = (index + 1);
    document.getElementById('auction-house').innerText = item.auctionHouse;
    document.getElementById('auction-img').src = item.image;
    document.getElementById('auction-item-name').innerText = item.name;
    document.getElementById('auction-origin').innerText = item.origin;
    document.getElementById('auction-description').innerText = item.description;
    document.getElementById('auction-price').innerText = item.auctionPrice;
    showScreen('screen-auction');
}

function goToInspection() {
    loadInspection(gameState.currentLevel);
    showScreen('screen-inspection');
}

function loadInspection(index) {
    var item = ARTIFACTS[index];

    // Reset tools
    gameState.loupeActive = false;
    gameState.uvActive = false;
    document.getElementById('tool-loupe').classList.remove('active');
    document.getElementById('tool-uv').classList.remove('active');
    document.getElementById('loupe-lens').classList.add('hidden');
    document.getElementById('uv-overlay').classList.add('hidden');
    document.getElementById('tool-result').classList.add('hidden');
    document.getElementById('anomaly-markers').innerHTML = '';

    // Set image
    document.getElementById('object-img').src = item.image;
    document.getElementById('object-label').innerText = item.name;

    // Manual
    document.getElementById('manual-content').innerHTML = '<pre class="manual-text">' + item.manualHint + '</pre>';

    // HUD
    updateHUD();

    // Tool levels
    document.getElementById('loupe-level').innerText = 'Nv.' + gameState.toolLevels.loupe;
    document.getElementById('uv-level').innerText = 'Nv.' + gameState.toolLevels.uv;
    document.getElementById('scale-level').innerText = 'Nv.' + gameState.toolLevels.scale;
}

function updateHUD() {
    document.getElementById('hud-score').innerText = gameState.score;
    document.getElementById('hud-coins').innerText = '💰 ' + gameState.coins;
    document.getElementById('hud-level').innerText = (gameState.currentLevel + 1) + ' / ' + ARTIFACTS.length;
}

// ===== FERRAMENTAS =====

// --- LUPA ---
function toggleLoupe() {
    gameState.loupeActive = !gameState.loupeActive;
    document.getElementById('tool-loupe').classList.toggle('active', gameState.loupeActive);
    document.getElementById('loupe-lens').classList.toggle('hidden', !gameState.loupeActive);

    if (gameState.loupeActive) {
        // Desativa UV se ativo
        if (gameState.uvActive) toggleUV();
        showAnomalyMarkers('loupe');
    } else {
        hideAnomalyMarkers();
    }
}

// Lupa segue o mouse
document.addEventListener('mousemove', function (e) {
    if (!gameState.loupeActive) return;
    var viewer = document.getElementById('object-viewer');
    var rect = viewer.getBoundingClientRect();
    var lens = document.getElementById('loupe-lens');

    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    // Só mostra se dentro da área do viewer
    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        var size = 120 + (gameState.toolLevels.loupe * 30);
        var zoom = 1.5 + (gameState.toolLevels.loupe * 0.5);

        lens.style.width = size + 'px';
        lens.style.height = size + 'px';
        lens.style.left = (x - size / 2) + 'px';
        lens.style.top = (y - size / 2) + 'px';

        var img = document.getElementById('object-img');
        var imgRect = img.getBoundingClientRect();
        var bgX = ((e.clientX - imgRect.left) / imgRect.width) * 100;
        var bgY = ((e.clientY - imgRect.top) / imgRect.height) * 100;

        lens.style.backgroundImage = 'url(' + img.src + ')';
        lens.style.backgroundSize = (imgRect.width * zoom) + 'px ' + (imgRect.height * zoom) + 'px';
        lens.style.backgroundPosition = (bgX) + '% ' + (bgY) + '%';
        lens.classList.remove('hidden');
    } else {
        lens.classList.add('hidden');
    }
});

// --- LUZ UV ---
function toggleUV() {
    gameState.uvActive = !gameState.uvActive;
    document.getElementById('tool-uv').classList.toggle('active', gameState.uvActive);
    document.getElementById('uv-overlay').classList.toggle('hidden', !gameState.uvActive);

    var viewer = document.getElementById('object-viewer');
    viewer.classList.toggle('uv-mode', gameState.uvActive);

    if (gameState.uvActive) {
        if (gameState.loupeActive) toggleLoupe();

        var item = ARTIFACTS[gameState.currentLevel];
        if (item.uvReaction) {
            showAnomalyMarkers('uv');
        }
    } else {
        hideAnomalyMarkers();
    }
}

// --- BALANÇA ---
function useScale() {
    var item = ARTIFACTS[gameState.currentLevel];
    var resultDiv = document.getElementById('tool-result');
    var resultText = document.getElementById('tool-result-text');

    var match = (item.weight === item.expectedWeight);
    var precision = gameState.toolLevels.scale >= 2 ? ' (±0.1g)' : ' (±5g)';

    resultText.innerHTML = '⚖️ <strong>Peso detectado:</strong> ' + item.weight + precision +
        '<br>📊 <strong>Peso esperado:</strong> ' + item.expectedWeight +
        '<br>' + (match ? '✅ Peso consistente.' : '⚠️ DISCREPÂNCIA DE PESO DETECTADA!');

    resultDiv.classList.remove('hidden');
    resultDiv.className = match ? 'tool-result result-ok' : 'tool-result result-warning';
}

// --- INDICADORES DE ANOMALIA ---
function showAnomalyMarkers(tool) {
    var item = ARTIFACTS[gameState.currentLevel];
    var container = document.getElementById('anomaly-markers');
    container.innerHTML = '';

    for (var i = 0; i < item.anomalyMarkers.length; i++) {
        var m = item.anomalyMarkers[i];
        if (m.tool === tool) {
            var div = document.createElement('div');
            div.className = 'anomaly-marker pulse';
            div.style.left = m.x + '%';
            div.style.top = m.y + '%';
            div.style.width = m.w + '%';
            div.style.height = m.h + '%';
            div.title = m.label;

            var label = document.createElement('span');
            label.className = 'marker-label';
            label.innerText = m.label;
            div.appendChild(label);

            container.appendChild(div);
        }
    }
}

function hideAnomalyMarkers() {
    document.getElementById('anomaly-markers').innerHTML = '';
}

// ===== SISTEMA DE VEREDITO =====
function submitVerdict(isAnomalyChoice) {
    var item = ARTIFACTS[gameState.currentLevel];
    var correct = (isAnomalyChoice === item.isAnomaly);

    var modal = document.getElementById('modal-result');
    var box = document.getElementById('result-box');
    var icon = document.getElementById('result-icon');
    var title = document.getElementById('result-title');
    var detail = document.getElementById('result-detail');
    var rewards = document.getElementById('result-rewards');

    if (correct) {
        var earned = 100 + (gameState.toolLevels.loupe * 10);
        var coinsEarned = 50;
        gameState.score += earned;
        gameState.coins += coinsEarned;

        // Adicionar à mochila
        gameState.backpack.push({
            id: item.id,
            name: item.name,
            image: item.image,
            origin: item.origin
        });

        icon.innerText = '✅';
        box.className = 'modal-box result-success';
        title.innerText = 'Veredito Correto!';
        detail.innerText = item.anomalyDetail;
        rewards.innerHTML = '<div class="reward-item">+' + earned + ' pontos</div>' +
            '<div class="reward-item">+' + coinsEarned + ' moedas 💰</div>' +
            '<div class="reward-item">🎒 ' + item.name + ' adicionado à mochila</div>';
    } else {
        icon.innerText = '❌';
        box.className = 'modal-box result-failure';
        title.innerText = 'Erro de Curadoria';
        detail.innerText = item.isAnomaly ?
            'Você deixou passar uma anomalia: ' + item.anomalyDetail :
            'Você condenou um artefato legítimo. ' + item.name + ' era autêntico!';
        rewards.innerHTML = '<div class="reward-item penalty">-50 pontos</div>';
        gameState.score = Math.max(0, gameState.score - 50);
    }

    updateHUD();
    modal.classList.remove('hidden');
}

function nextFromResult() {
    document.getElementById('modal-result').classList.add('hidden');
    gameState.currentLevel++;

    if (gameState.currentLevel >= ARTIFACTS.length) {
        showGameOver();
    } else {
        showAuction(gameState.currentLevel);
    }
}

// ===== FIM DE JOGO =====
function showGameOver() {
    var modal = document.getElementById('modal-gameover');
    document.getElementById('final-summary').innerText =
        'Você inspecionou ' + ARTIFACTS.length + ' artefatos e acumulou ' + gameState.score + ' pontos.';

    var stats = document.getElementById('final-stats');
    stats.innerHTML = '<div class="stat-row"><span>Pontuação Final:</span><span>' + gameState.score + '</span></div>' +
        '<div class="stat-row"><span>Moedas:</span><span>💰 ' + gameState.coins + '</span></div>' +
        '<div class="stat-row"><span>Itens na Mochila:</span><span>🎒 ' + gameState.backpack.length + '</span></div>';

    modal.classList.remove('hidden');
}

// ===== LOJA =====
function openShop() {
    var grid = document.getElementById('shop-grid');
    grid.innerHTML = '';

    for (var i = 0; i < SHOP_ITEMS.length; i++) {
        var item = SHOP_ITEMS[i];
        var owned = gameState.purchased.indexOf(item.id) !== -1;
        var canAfford = gameState.coins >= item.cost;
        var currentToolLevel = gameState.toolLevels[item.tool] || 0;
        var available = item.level === currentToolLevel + 1;

        var card = document.createElement('div');
        card.className = 'shop-card' + (owned ? ' owned' : '') + (!canAfford && !owned ? ' expensive' : '');
        card.innerHTML =
            '<div class="shop-icon">' + item.icon + '</div>' +
            '<h4>' + item.name + '</h4>' +
            '<p>' + item.desc + '</p>' +
            '<div class="shop-price">' +
            (owned ? '✅ Comprado' : (available ? '💰 ' + item.cost : '🔒 Compre Nv.' + (item.level - 1) + ' primeiro')) +
            '</div>';

        if (!owned && canAfford && available) {
            card.setAttribute('data-index', i);
            card.addEventListener('click', (function (idx) {
                return function () { buyItem(idx); };
            })(i));
            card.classList.add('buyable');
        }

        grid.appendChild(card);
    }

    document.getElementById('modal-shop').classList.remove('hidden');
}

function buyItem(index) {
    var item = SHOP_ITEMS[index];
    if (gameState.coins >= item.cost && gameState.purchased.indexOf(item.id) === -1) {
        gameState.coins -= item.cost;
        gameState.purchased.push(item.id);
        gameState.toolLevels[item.tool] = item.level;
        updateHUD();
        openShop(); // Refresh

        // Update tool level display
        if (item.tool === 'loupe') document.getElementById('loupe-level').innerText = 'Nv.' + item.level;
        if (item.tool === 'uv') document.getElementById('uv-level').innerText = 'Nv.' + item.level;
        if (item.tool === 'scale') document.getElementById('scale-level').innerText = 'Nv.' + item.level;
    }
}

function closeShop() {
    document.getElementById('modal-shop').classList.add('hidden');
}

// ===== MOCHILA =====
function openBackpack() {
    var grid = document.getElementById('backpack-grid');

    if (gameState.backpack.length === 0) {
        grid.innerHTML = '<p class="empty-backpack">Sua mochila está vazia. Analise objetos para colecioná-los!</p>';
    } else {
        grid.innerHTML = '';
        for (var i = 0; i < gameState.backpack.length; i++) {
            var item = gameState.backpack[i];
            var card = document.createElement('div');
            card.className = 'backpack-card';
            card.innerHTML = '<img src="' + item.image + '" alt="' + item.name + '">' +
                '<h4>' + item.name + '</h4>' +
                '<p>' + item.origin + '</p>';
            grid.appendChild(card);
        }
    }

    document.getElementById('modal-backpack').classList.remove('hidden');
}

function closeBackpack() {
    document.getElementById('modal-backpack').classList.add('hidden');
}

// ===== PARTÍCULAS DO MENU =====
function createParticles() {
    var container = document.getElementById('particles');
    if (!container) return;
    for (var i = 0; i < 30; i++) {
        var p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (3 + Math.random() * 7) + 's';
        p.style.animationDelay = (Math.random() * 5) + 's';
        p.style.width = (2 + Math.random() * 4) + 'px';
        p.style.height = p.style.width;
        container.appendChild(p);
    }
}

createParticles();
