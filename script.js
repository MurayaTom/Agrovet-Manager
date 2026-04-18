let products = JSON.parse(localStorage.getItem('agro_products')) || [];
let salesData = JSON.parse(localStorage.getItem('agro_sales')) || [];
let currentCategory = 'all';

function render() {
    const tbody = document.getElementById('tbody');
    const query = document.getElementById('q').value.toLowerCase();
    tbody.innerHTML = '';

    const filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query);
        const matchesCat = currentCategory === 'all' || p.category === currentCategory;
        return matchesSearch && matchesCat;
    });

    filtered.sort((a, b) => a.name.localeCompare(b.name));

    filtered.forEach((p) => {
        const idx = products.indexOf(p);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="col-name">
                <div style="font-weight:700; color:#1a3a0a">${p.name}</div>
                <div class="cat-badge">${p.category}</div>
            </td>
            <td class="col-stock">${p.qty} <small style="font-weight:400; color:#888">${p.unit}</small></td>
            <td class="col-price">${parseFloat(p.buyPrice).toLocaleString()}</td>
            <td class="col-price">${parseFloat(p.sellPrice).toLocaleString()}</td>
            <td class="col-act">
                <div class="acts">
                    <button class="ab2" onclick="sellPrompt(${idx})">💰</button>
                    <button class="ab2" onclick="openEdit(${idx})">✏️</button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
    renderStats();
    updateCounters();
}

function updateCounters() {
    document.getElementById('cnt-all').innerText = products.length;
    document.getElementById('cnt-af').innerText = products.filter(p => p.category === 'Animal Feeds').length;
    document.getElementById('cnt-vm').innerText = products.filter(p => p.category === 'Veterinary Medicines').length;
    document.getElementById('cnt-ph').innerText = products.filter(p => p.category === 'Pesticides & Herbicides').length;
    document.getElementById('cnt-sf').innerText = products.filter(p => p.category === 'Seeds & Fertilizers').length;
}

function renderStats() {
    const totalValue = products.reduce((sum, p) => sum + (parseFloat(p.qty) * parseFloat(p.buyPrice)), 0);
    const today = new Date().toLocaleDateString();
    const todaySales = salesData.filter(s => new Date(s.date).toLocaleDateString() === today).reduce((sum, s) => sum + parseFloat(s.total), 0);
    const lowCount = products.filter(p => parseFloat(p.qty) <= 5).length;

    document.getElementById('stat-sales').innerText = `Ksh ${todaySales.toLocaleString()}`;
    document.getElementById('stat-value').innerText = `Ksh ${totalValue.toLocaleString()}`;
    document.getElementById('stat-low').innerText = lowCount;
}

function setcat(c) {
    currentCategory = c;
    document.querySelectorAll('.cb').forEach(b => b.classList.toggle('active', b.dataset.cat === c));
    render();
}

function openAdd() { 
    document.getElementById('mtitle').innerText = "Add New Product";
    document.getElementById('eid').value = ""; 
    document.getElementById('pmod').classList.add('open'); 
}

function openEdit(i) {
    const p = products[i];
    document.getElementById('mtitle').innerText = "Update Item";
    document.getElementById('eid').value = i;
    document.getElementById('fn').value = p.name;
    document.getElementById('fsk').value = p.sku;
    document.getElementById('fc').value = p.category;
    document.getElementById('fq').value = p.qty;
    document.getElementById('fu').value = p.unit;
    document.getElementById('fb').value = p.buyPrice;
    document.getElementById('fs').value = p.sellPrice;
    document.getElementById('pmod').classList.add('open');
}

function savep() {
    const id = document.getElementById('eid').value;
    const pData = {
        name: document.getElementById('fn').value, sku: document.getElementById('fsk').value,
        category: document.getElementById('fc').value, qty: parseFloat(document.getElementById('fq').value || 0),
        unit: document.getElementById('fu').value, buyPrice: parseFloat(document.getElementById('fb').value || 0),
        sellPrice: parseFloat(document.getElementById('fs').value || 0), threshold: 5
    };
    if (id === "") products.push(pData); else products[id] = pData;
    localStorage.setItem('agro_products', JSON.stringify(products));
    cm('pmod'); render();
}

function sellPrompt(i) {
    const p = products[i];
    const qtySold = parseFloat(prompt(`Sale: How many ${p.unit} of ${p.name}?`, "1"));
    if (qtySold && qtySold <= p.qty) {
        p.qty -= qtySold;
        salesData.push({ total: qtySold * p.sellPrice, date: new Date().toISOString() });
        localStorage.setItem('agro_products', JSON.stringify(products));
        localStorage.setItem('agro_sales', JSON.stringify(salesData));
        render();
    }
}

function cm(id) { document.getElementById(id).classList.remove('open'); }
function downloadBackup() {
    const blob = new Blob([JSON.stringify({products, salesData})], {type: 'application/json'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `agrovet_data.json`;
    a.click();
}

window.onload = render;