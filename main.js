/* ==========================================
   THE SILENT CURATOR — GAME v2.0
   Sem dependências externas
   ========================================== */

var ITEMS = [
    {
        id: "vaso", name: "Vaso Grego Antigo",
        image: "./assets/vaso grego.png",
        isAnomaly: true,
        house: "Casa de Leilões Christie's — Londres",
        price: "$18.500",
        origin: "Escavação arqueológica em Atenas, Grécia — 340 a.C.",
        desc: "Um vaso cerâmico com figuras negras típicas do período clássico grego. Foi encontrado em uma tumba real durante escavações recentes.",
        manual: "🔍 Use a LUPA para examinar a base.\nVasos autênticos NÃO possuem marcações digitais.\n\n⚖️ Use a BALANÇA para verificar o peso.\nCerâmica antiga é mais leve que réplicas.\n\n📌 PROCURE: Códigos de barras ou etiquetas modernas.",
        anomalyText: "Código de barras moderno encontrado na base do vaso.",
        markers: [{ x: 48, y: 85, w: 8, h: 6, tool: "loupe", label: "Código de barras" }],
        uvReact: false,
        weight: "1.8kg", expected: "0.9kg"
    },
    {
        id: "retrato", name: "Retrato de Nobre",
        image: "./assets/quadro nobre.jpg",
        isAnomaly: true,
        house: "Maison de Ventes Drouot — Paris",
        price: "$42.000",
        origin: "Coleção particular, família aristocrata portuguesa — séc. XIX",
        desc: "Retrato a óleo de um jovem nobre em trajes formais. A pintura apresenta tons escuros e traços neoclássicos europeus.",
        manual: "🔦 Use a LUZ UV para revelar reações na tinta.\nPinturas com propriedades anômalas emitem brilho.\n\n🔍 Use a LUPA nos olhos do retrato.\nHá relatos de que 'os olhos seguem o observador'.\n\n📌 PROCURE: Brilho anormal sob UV.",
        anomalyText: "A pintura emite aura mística violeta sob luz UV. Os olhos parecem seguir o observador.",
        markers: [{ x: 42, y: 32, w: 6, h: 4, tool: "uv", label: "Olho reage" }, { x: 52, y: 32, w: 6, h: 4, tool: "uv", label: "Olho reage" }],
        uvReact: true,
        weight: "2.1kg", expected: "2.1kg"
    },
    {
        id: "relogio", name: "Relógio de Bolso Vitoriano",
        image: "./assets/relogio antigo.webp",
        isAnomaly: true,
        house: "Bonhams Auction House — Nova York",
        price: "$8.200",
        origin: "Espólio de relojoeiro em Manchester, Inglaterra — 1887",
        desc: "Relógio de bolso em ouro com mecanismo aparente. O tique-taque é preciso após mais de um século.",
        manual: "🔍 Use a LUPA para inspecionar o mecanismo.\nRelógios vitorianos NÃO tinham eletrônicos.\n\n⚖️ Use a BALANÇA — peso maior que o esperado\npode indicar componentes ocultos.\n\n📌 PROCURE: Microchips ou circuitos.",
        anomalyText: "Microchip eletrônico encontrado entre as engrenagens mecânicas.",
        markers: [{ x: 35, y: 45, w: 5, h: 5, tool: "loupe", label: "Microchip" }],
        uvReact: false,
        weight: "450g", expected: "280g"
    },
    {
        id: "moeda", name: "Moeda Romana de Ouro",
        image: "./assets/unnamed.jpg",
        isAnomaly: false,
        house: "Numismática Roma Aurea — Roma",
        price: "$5.800",
        origin: "Sítio arqueológico no Fórum Romano — 27 a.C.",
        desc: "Moeda de ouro do período de Augusto com a face do imperador. Apresenta desgaste natural compatível com a idade.",
        manual: "🔍 Verifique o desgaste com a LUPA.\nMoedas autênticas têm erosão uniforme.\n\n⚖️ A BALANÇA deve confirmar peso consistente.\n\n🔦 Sob LUZ UV, ouro autêntico NÃO reage.\n\n📌 Esta peça PODE ser genuína. Cuidado!",
        anomalyText: "Peça autêntica do período de Augusto. Ouro puro com desgaste natural.",
        markers: [],
        uvReact: false,
        weight: "8.4g", expected: "8.4g"
    }
];

var SHOP = [
    { id: "l2", name: "Lupa Avançada", desc: "Zoom 2x maior", cost: 150, tool: "loupe", lv: 2, icon: "🔍" },
    { id: "l3", name: "Lupa Pro", desc: "Zoom 3x + detecção", cost: 400, tool: "loupe", lv: 3, icon: "🔎" },
    { id: "u2", name: "UV Onda Longa", desc: "Revelação intensa", cost: 150, tool: "uv", lv: 2, icon: "🔦" },
    { id: "u3", name: "UV Espectro Total", desc: "Todo o espectro", cost: 400, tool: "uv", lv: 3, icon: "💡" },
    { id: "s2", name: "Balança Digital", desc: "Precisão 0.1g", cost: 200, tool: "scale", lv: 2, icon: "⚖️" }
];

// Estado
var G = {
    lvl: 0,
    score: 0,
    coins: 50,
    tools: { loupe: 1, uv: 1, scale: 1 },
    bag: [],
    bought: [],
    loupe: false,
    uv: false
};

// === NAVEGAÇÃO ===
function show(id) {
    var s = document.querySelectorAll('.screen');
    for (var i = 0; i < s.length; i++) s[i].classList.remove('active');
    document.getElementById(id).classList.add('active');
}

function startGame() {
    G.lvl = 0; G.score = 0; G.coins = 50; G.bag = []; G.bought = [];
    G.tools = { loupe: 1, uv: 1, scale: 1 };
    showAuction(0);
}

function showAuction(i) {
    var d = ITEMS[i];
    document.getElementById('auc-num').innerText = i + 1;
    document.getElementById('auc-house').innerText = d.house;
    document.getElementById('auc-img').src = d.image;
    document.getElementById('auc-name').innerText = d.name;
    document.getElementById('auc-origin').innerText = d.origin;
    document.getElementById('auc-desc').innerText = d.desc;
    document.getElementById('auc-price').innerText = d.price;
    show('screen-auction');
}

function goInspection() {
    loadItem(G.lvl);
    show('screen-inspection');
}

function loadItem(i) {
    var d = ITEMS[i];
    G.loupe = false; G.uv = false;
    document.getElementById('t-loupe').classList.remove('active');
    document.getElementById('t-uv').classList.remove('active');
    document.getElementById('loupe-el').style.display = 'none';
    document.getElementById('uv-ov').style.display = 'none';
    document.getElementById('obj-viewer').classList.remove('uv-on');
    document.getElementById('markers').innerHTML = '';
    var tr = document.getElementById('tool-res');
    tr.className = 'tool-res'; tr.style.display = 'none';

    document.getElementById('obj-img').src = d.image;
    document.getElementById('obj-name').innerText = d.name;
    document.getElementById('manual-txt').innerText = d.manual;

    document.getElementById('tl-loupe').innerText = 'Nv.' + G.tools.loupe;
    document.getElementById('tl-uv').innerText = 'Nv.' + G.tools.uv;
    document.getElementById('tl-scale').innerText = 'Nv.' + G.tools.scale;
    updHUD();
}

function updHUD() {
    document.getElementById('h-score').innerText = G.score;
    document.getElementById('h-coins').innerText = '💰 ' + G.coins;
    document.getElementById('h-level').innerText = (G.lvl + 1) + '/' + ITEMS.length;
}

// === FERRAMENTAS ===
function togLoupe() {
    G.loupe = !G.loupe;
    document.getElementById('t-loupe').classList.toggle('active', G.loupe);
    document.getElementById('loupe-el').style.display = G.loupe ? 'block' : 'none';
    if (G.loupe) {
        if (G.uv) togUV();
        showMarkers('loupe');
    } else {
        clearMarkers();
    }
}

document.addEventListener('mousemove', function (e) {
    if (!G.loupe) return;
    var v = document.getElementById('obj-viewer');
    var r = v.getBoundingClientRect();
    var lens = document.getElementById('loupe-el');
    var x = e.clientX - r.left, y = e.clientY - r.top;
    if (x >= 0 && x <= r.width && y >= 0 && y <= r.height) {
        var sz = 100 + (G.tools.loupe * 25);
        var zm = 1.5 + (G.tools.loupe * 0.5);
        lens.style.width = sz + 'px'; lens.style.height = sz + 'px';
        lens.style.left = (x - sz / 2) + 'px'; lens.style.top = (y - sz / 2) + 'px';
        var img = document.getElementById('obj-img');
        var ir = img.getBoundingClientRect();
        var bx = ((e.clientX - ir.left) / ir.width) * 100;
        var by = ((e.clientY - ir.top) / ir.height) * 100;
        lens.style.backgroundImage = 'url(' + img.src + ')';
        lens.style.backgroundSize = (ir.width * zm) + 'px ' + (ir.height * zm) + 'px';
        lens.style.backgroundPosition = bx + '% ' + by + '%';
        lens.style.display = 'block';
    } else {
        lens.style.display = 'none';
    }
});

function togUV() {
    G.uv = !G.uv;
    document.getElementById('t-uv').classList.toggle('active', G.uv);
    document.getElementById('uv-ov').style.display = G.uv ? 'block' : 'none';
    document.getElementById('obj-viewer').classList.toggle('uv-on', G.uv);
    if (G.uv) {
        if (G.loupe) togLoupe();
        if (ITEMS[G.lvl].uvReact) showMarkers('uv');
    } else {
        clearMarkers();
    }
}

function useScale() {
    var d = ITEMS[G.lvl];
    var ok = (d.weight === d.expected);
    var prec = G.tools.scale >= 2 ? ' (±0.1g)' : ' (±5g)';
    var tr = document.getElementById('tool-res');
    var tt = document.getElementById('tool-res-txt');
    tt.innerHTML = '⚖️ <b>Peso:</b> ' + d.weight + prec + '<br>📊 <b>Esperado:</b> ' + d.expected + '<br>' + (ok ? '✅ Peso consistente.' : '⚠️ DISCREPÂNCIA DETECTADA!');
    tr.style.display = 'block';
    tr.className = ok ? 'tool-res tres-ok' : 'tool-res tres-warn';
}

function showMarkers(tool) {
    var d = ITEMS[G.lvl];
    var c = document.getElementById('markers');
    c.innerHTML = '';
    for (var i = 0; i < d.markers.length; i++) {
        var m = d.markers[i];
        if (m.tool === tool) {
            var div = document.createElement('div');
            div.className = 'amarker';
            div.style.left = m.x + '%'; div.style.top = m.y + '%';
            div.style.width = m.w + '%'; div.style.height = m.h + '%';
            var lbl = document.createElement('span');
            lbl.className = 'mlabel'; lbl.innerText = m.label;
            div.appendChild(lbl);
            c.appendChild(div);
        }
    }
}

function clearMarkers() { document.getElementById('markers').innerHTML = ''; }

// === VEREDITO ===
function verdict(isAnom) {
    var d = ITEMS[G.lvl];
    var ok = (isAnom === d.isAnomaly);
    var box = document.getElementById('res-box');
    var icon = document.getElementById('res-icon');
    var title = document.getElementById('res-title');
    var detail = document.getElementById('res-detail');
    var rew = document.getElementById('res-rewards');

    if (ok) {
        var pts = 100 + (G.tools.loupe * 10);
        var cns = 50;
        G.score += pts; G.coins += cns;
        G.bag.push({ id: d.id, name: d.name, image: d.image, origin: d.origin });
        icon.innerText = '✅'; box.className = 'mbox';
        title.innerText = 'Veredito Correto!';
        detail.innerText = d.anomalyText;
        rew.innerHTML = '<div class="rew">+' + pts + ' pontos</div><div class="rew">+' + cns + ' moedas 💰</div><div class="rew">🎒 ' + d.name + ' → mochila</div>';
    } else {
        G.score = Math.max(0, G.score - 50);
        icon.innerText = '❌'; box.className = 'mbox fail';
        title.innerText = 'Erro de Curadoria';
        detail.innerText = d.isAnomaly ? 'Era uma anomalia: ' + d.anomalyText : 'O item era legítimo. ' + d.name + ' era autêntico!';
        rew.innerHTML = '<div class="rew bad">-50 pontos</div>';
    }
    updHUD();
    document.getElementById('m-result').classList.add('open');
}

function nextItem() {
    document.getElementById('m-result').classList.remove('open');
    G.lvl++;
    if (G.lvl >= ITEMS.length) {
        document.getElementById('end-sum').innerText = 'Você inspecionou ' + ITEMS.length + ' artefatos com ' + G.score + ' pontos.';
        document.getElementById('end-stats').innerHTML = '<div class="frow"><span>Pontuação</span><span>' + G.score + '</span></div><div class="frow"><span>Moedas</span><span>💰 ' + G.coins + '</span></div><div class="frow"><span>Coleção</span><span>🎒 ' + G.bag.length + '</span></div>';
        document.getElementById('m-end').classList.add('open');
    } else {
        showAuction(G.lvl);
    }
}

// === LOJA ===
function openShop() {
    var g = document.getElementById('shop-grid'); g.innerHTML = '';
    for (var i = 0; i < SHOP.length; i++) {
        var s = SHOP[i];
        var own = G.bought.indexOf(s.id) !== -1;
        var afford = G.coins >= s.cost;
        var avail = s.lv === (G.tools[s.tool] || 0) + 1;
        var c = document.createElement('div');
        c.className = 'scard' + (own ? ' own' : '') + ((!afford && !own) ? ' exp' : '') + ((!own && afford && avail) ? ' can' : '');
        c.innerHTML = '<div class="si">' + s.icon + '</div><h4>' + s.name + '</h4><p>' + s.desc + '</p><div class="sp">' + (own ? '✅ Comprado' : (avail ? '💰 ' + s.cost : '🔒 Nv.' + (s.lv - 1) + ' primeiro')) + '</div>';
        if (!own && afford && avail) {
            c.setAttribute('data-i', i);
            c.addEventListener('click', (function (idx) { return function () { buy(idx); }; })(i));
        }
        g.appendChild(c);
    }
    document.getElementById('m-shop').classList.add('open');
}
function buy(i) {
    var s = SHOP[i];
    if (G.coins >= s.cost && G.bought.indexOf(s.id) === -1) {
        G.coins -= s.cost; G.bought.push(s.id); G.tools[s.tool] = s.lv;
        updHUD(); openShop();
    }
}
function closeShop() { document.getElementById('m-shop').classList.remove('open'); }

// === MOCHILA ===
function openBP() {
    var g = document.getElementById('bp-grid');
    if (G.bag.length === 0) { g.innerHTML = '<p class="empty-bp">Sua mochila está vazia.</p>'; }
    else { g.innerHTML = ''; for (var i = 0; i < G.bag.length; i++) { var b = G.bag[i]; var c = document.createElement('div'); c.className = 'bcard'; c.innerHTML = '<img src="' + b.image + '" alt=""><h4>' + b.name + '</h4><p>' + b.origin + '</p>'; g.appendChild(c); } }
    document.getElementById('m-bp').classList.add('open');
}
function closeBP() { document.getElementById('m-bp').classList.remove('open'); }

// === PARTÍCULAS ===
(function () {
    var c = document.getElementById('particles');
    if (!c) return;
    for (var i = 0; i < 25; i++) {
        var p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (3 + Math.random() * 7) + 's';
        p.style.animationDelay = (Math.random() * 5) + 's';
        var sz = 2 + Math.random() * 3;
        p.style.width = sz + 'px'; p.style.height = sz + 'px';
        c.appendChild(p);
    }
})();
