// 1. DATA INITIALIZATION
let products = JSON.parse(localStorage.getItem('agro_products')) || [];
let salesData = JSON.parse(localStorage.getItem('agro_sales')) || [];
let currentCategory = 'all';

// 2. RENDER THE MAIN TABLE
function render() {
    const tbody = document.getElementById('tbody');
    const query = document.getElementById('q').value.toLowerCase();
    const stockFilter = document.getElementById('stf').value;
    
    tbody.innerHTML = '';

    const filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(query) || p.sku.toLowerCase().includes(query);
        const matchesCat = currentCategory === 'all' || p.category === currentCategory;
        
        let matchesStock = true;
        const qty = parseFloat(p.qty);
        const threshold = parseFloat(p.threshold);

        if (stockFilter === 'low') matchesStock = (qty > 0 && qty <= threshold);
        else if (stockFilter === 'out') matchesStock = (qty <= 0);
        else if (stockFilter === 'ok') matchesStock = (qty > threshold);

        return matchesSearch && matchesCat && matchesStock;
    });

    filtered.forEach((p, index) => {
        const qty = parseFloat(p.qty);
        const threshold = parseFloat(p.threshold);
        const statusClass = qty <= 0 ? 'dou' : (qty <= threshold ? 'dlo' : 'dok');

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <div style="font-weight:600">${p.name}</div>
                <div style="font-size:11px; color:#888">${p.sku} | ${p.category}</div>
            </td>
            <td>
                <span class="dot ${statusClass}"></span>
                <b>${p.qty}</b> <small>${p.unit}</small>
            </td>
            <td>${parseFloat(p.buyPrice).toLocaleString()}</td>
            <td>${parseFloat(p.sellPrice).toLocaleString()}</td>
            <td>
                <div class="acts">
                    <button class="ab2" onclick="sellPrompt(${products.indexOf(p)})" title="Record Sale">💰</button>
                    <button class="ab2" onclick="openEdit(${products.indexOf(p)})" title="Edit">✏️</button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });

    updateCounters();
    renderStats();
}

// 3. CALCULATE AND DISPLAY STATISTICS
function renderStats() {
    // Calculate Stock Value
    const totalValue = products.reduce((sum, p) => sum + (parseFloat(p.qty) * parseFloat(p.buyPrice)), 0);
    
    // Calculate Today's Sales
    const today = new Date().toLocaleDateString();
    const todaySales = salesData
        .filter(s => new Date(s.date).toLocaleDateString() === today)
        .reduce((sum, s) => sum + parseFloat(s.total), 0);

    // Count Low Stock items
    const lowCount = products.filter(p => parseFloat(p.qty) <= parseFloat(p.threshold) && parseFloat(p.qty) > 0).length;

    // Update the UI (Matching your new HTML IDs)
    document.getElementById('stat-sales').innerText = `Ksh ${todaySales.toLocaleString()}`;
    document.getElementById('stat-value').innerText = `Ksh ${totalValue.toLocaleString()}`;
    document.getElementById('stat-low').innerText = lowCount;
}

// 4. CATEGORY FILTERING
function setcat(c) {
    currentCategory = c;
    document.querySelectorAll('.cb').forEach(b => {
        b.classList.remove('active');
        if (b.dataset.cat === c) b.classList.add('active');
    });
    render();
}

// 5. UPDATE CATEGORY COUNTERS
function updateCounters() {
    document.getElementById('cnt-all').innerText = products.length;
    
    const cats = {
        'af': 'Animal Feeds', 'vm': 'Veterinary Medicines', 'ph': 'Pesticides & Herbicides',
        'ins': 'Insecticides', 'fun': 'Fungicides', 'fol': 'Foliar Feeds',
        'pb': 'Plant Boosters', 'sf': 'Seeds & Fertilizers', 'te': 'Farm Tools & Equipment'
    };

    for (let id in cats) {
        const count = products.filter(p => p.category === cats[id]).length;
        const el = document.getElementById(`cnt-${id}`);
        if (el) el.innerText = count;
    }
}

// 6. ADD / EDIT MODAL LOGIC
function openAdd() {
    document.getElementById('mtitle').innerText = "Add New Product";
    document.getElementById('eid').value = "";
    document.getElementById('pmod').classList.add('open');
}

function openEdit(index) {
    const p = products[index];
    document.getElementById('mtitle').innerText = "Edit Product";
    document.getElementById('eid').value = index;
    document.getElementById('fn').value = p.name;
    document.getElementById('fsk').value = p.sku;
    document.getElementById('fc').value = p.category;
    document.getElementById('fq').value = p.qty;
    document.getElementById('fu').value = p.unit;
    document.getElementById('fb').value = p.buyPrice;
    document.getElementById('fs').value = p.sellPrice;
    document.getElementById('fth').value = p.threshold;
    document.getElementById('pmod').classList.add('open');
}

function savep() {
    const id = document.getElementById('eid').value;
    const pData = {
        name: document.getElementById('fn').value,
        sku: document.getElementById('fsk').value,
        category: document.getElementById('fc').value,
        qty: document.getElementById('fq').value,
        unit: document.getElementById('fu').value,
        buyPrice: document.getElementById('fb').value,
        sellPrice: document.getElementById('fs').value,
        threshold: document.getElementById('fth').value
    };

    if (id === "") products.push(pData);
    else products[id] = pData;

    localStorage.setItem('agro_products', JSON.stringify(products));
    cm('pmod');
    render();
}

// 7. SALES LOGIC
function sellPrompt(index) {
    const p = products[index];
    const amount = prompt(`How many ${p.unit} of ${p.name} sold?`, "1");
    
    if (amount && !isNaN(amount) && parseFloat(amount) <= parseFloat(p.qty)) {
        const qtySold = parseFloat(amount);
        const totalValue = qtySold * parseFloat(p.sellPrice);
        
        // Deduct from stock
        p.qty = parseFloat(p.qty) - qtySold;
        
        // Record sale
        salesData.push({
            name: p.name,
            qty: qtySold,
            total: totalValue,
            date: new Date().toISOString()
        });

        localStorage.setItem('agro_products', JSON.stringify(products));
        localStorage.setItem('agro_sales', JSON.stringify(salesData));
        render();
        alert(`Sold! Total: Ksh ${totalValue.toLocaleString()}`);
    } else {
        alert("Invalid amount or insufficient stock!");
    }
}

// 8. UTILITIES
function cm(id) { document.getElementById(id).classList.remove('open'); }

function downloadBackup() {
    const data = { products, salesData };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `agrovet_backup_${new Date().toLocaleDateString()}.json`;
    a.click();
}

// Initialize on Load
window.onload = render;