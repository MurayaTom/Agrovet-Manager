// 1. DATA INITIALIZATION
let products = JSON.parse(localStorage.getItem('agro_products')) || [
    { name: "Dairy Meal High Yield", sku: "AF001", category: "Animal Feeds", qty: 20, unit: "Bag", buyPrice: 2400, sellPrice: 2850, threshold: 5 },
    { name: "Chick Mash", sku: "AF002", category: "Animal Feeds", qty: 15, unit: "Bag", buyPrice: 2800, sellPrice: 3300, threshold: 5 },
    { name: "Growers Mash", sku: "AF003", category: "Animal Feeds", qty: 12, unit: "Bag", buyPrice: 2500, sellPrice: 2950, threshold: 5 },
    { name: "Layers Mash", sku: "AF004", category: "Animal Feeds", qty: 25, unit: "Bag", buyPrice: 2600, sellPrice: 3100, threshold: 5 },
    { name: "Pig Finisher", sku: "AF005", category: "Animal Feeds", qty: 8, unit: "Bag", buyPrice: 2200, sellPrice: 2600, threshold: 5 },
    { name: "Calf Pellets", sku: "AF006", category: "Animal Feeds", qty: 10, unit: "Bag", buyPrice: 2700, sellPrice: 3200, threshold: 5 },
    { name: "Broiler Starter", sku: "AF007", category: "Animal Feeds", qty: 18, unit: "Bag", buyPrice: 2950, sellPrice: 3450, threshold: 5 },
    { name: "Kienyeji Mash", sku: "AF008", category: "Animal Feeds", qty: 22, unit: "Bag", buyPrice: 2100, sellPrice: 2550, threshold: 5 },
    { name: "Rabbit Pellets", sku: "AF009", category: "Animal Feeds", qty: 5, unit: "Bag", buyPrice: 1800, sellPrice: 2200, threshold: 3 },
    { name: "Fish Meal", sku: "AF010", category: "Animal Feeds", qty: 4, unit: "Bag", buyPrice: 3200, sellPrice: 3800, threshold: 2 },
    { name: "Alamycin Spray", sku: "VM001", category: "Veterinary Medicines", qty: 12, unit: "Can", buyPrice: 650, sellPrice: 850, threshold: 5 },
    { name: "Albendazole 10%", sku: "VM002", category: "Veterinary Medicines", qty: 20, unit: "Bottle", buyPrice: 400, sellPrice: 600, threshold: 5 },
    { name: "Oxytetracycline 20%", sku: "VM003", category: "Veterinary Medicines", qty: 15, unit: "Vial", buyPrice: 350, sellPrice: 550, threshold: 5 },
    { name: "Multivitamin", sku: "VM004", category: "Veterinary Medicines", qty: 10, unit: "Vial", buyPrice: 450, sellPrice: 700, threshold: 3 },
    { name: "Ectopor Grease", sku: "VM005", category: "Veterinary Medicines", qty: 30, unit: "Tin", buyPrice: 120, sellPrice: 200, threshold: 10 },
    { name: "Penstrep Vial", sku: "VM006", category: "Veterinary Medicines", qty: 5, unit: "Vial", buyPrice: 800, sellPrice: 1100, threshold: 2 },
    { name: "Intramammary Tubes", sku: "VM007", category: "Veterinary Medicines", qty: 40, unit: "Pcs", buyPrice: 80, sellPrice: 150, threshold: 10 },
    { name: "Dewormer Dog", sku: "VM008", category: "Veterinary Medicines", qty: 50, unit: "Tabs", buyPrice: 30, sellPrice: 70, threshold: 15 },
    { name: "Roundup Turbo", sku: "PH001", category: "Pesticides & Herbicides", qty: 10, unit: "Litre", buyPrice: 1200, sellPrice: 1600, threshold: 3 },
    { name: "Glyphogan", sku: "PH002", category: "Pesticides & Herbicides", qty: 15, unit: "Litre", buyPrice: 900, sellPrice: 1300, threshold: 5 },
    { name: "Gramoxone", sku: "PH003", category: "Pesticides & Herbicides", qty: 10, unit: "Litre", buyPrice: 850, sellPrice: 1100, threshold: 3 },
    { name: "Weedar 64", sku: "PH004", category: "Pesticides & Herbicides", qty: 8, unit: "Litre", buyPrice: 1400, sellPrice: 1800, threshold: 2 },
    { name: "Lasso Herbi", sku: "PH005", category: "Pesticides & Herbicides", qty: 5, unit: "Litre", buyPrice: 1100, sellPrice: 1500, threshold: 2 },
    { name: "Dual Gold", sku: "PH006", category: "Pesticides & Herbicides", qty: 6, unit: "Bottle", buyPrice: 1800, sellPrice: 2300, threshold: 2 },
    { name: "Lumax", sku: "PH007", category: "Pesticides & Herbicides", qty: 4, unit: "Litre", buyPrice: 2500, sellPrice: 3100, threshold: 2 },
    { name: "Duduthrin", sku: "INS01", category: "Insecticides", qty: 25, unit: "Bottle", buyPrice: 450, sellPrice: 650, threshold: 10 },
    { name: "Match 50EC", sku: "INS02", category: "Insecticides", qty: 12, unit: "Bottle", buyPrice: 1200, sellPrice: 1600, threshold: 4 },
    { name: "Thunder 145OD", sku: "INS03", category: "Insecticides", qty: 10, unit: "Bottle", buyPrice: 1500, sellPrice: 1950, threshold: 3 },
    { name: "Belt 480SC", sku: "INS04", category: "Insecticides", qty: 8, unit: "Bottle", buyPrice: 2800, sellPrice: 3400, threshold: 2 },
    { name: "Decis 2.5EC", sku: "INS05", category: "Insecticides", qty: 20, unit: "Bottle", buyPrice: 350, sellPrice: 500, threshold: 5 },
    { name: "Dynamec", sku: "INS06", category: "Insecticides", qty: 6, unit: "Bottle", buyPrice: 1900, sellPrice: 2400, threshold: 2 },
    { name: "Ridomil Gold", sku: "FUN01", category: "Fungicides", qty: 20, unit: "Sachet", buyPrice: 250, sellPrice: 400, threshold: 5 },
    { name: "Milraz", sku: "FUN02", category: "Fungicides", qty: 15, unit: "Sachet", buyPrice: 300, sellPrice: 450, threshold: 5 },
    { name: "Mastercop", sku: "FUN03", category: "Fungicides", qty: 10, unit: "Litre", buyPrice: 1600, sellPrice: 2100, threshold: 3 },
    { name: "Antracol", sku: "FUN04", category: "Fungicides", qty: 12, unit: "Sachet", buyPrice: 400, sellPrice: 600, threshold: 4 },
    { name: "Ortiva", sku: "FUN05", category: "Fungicides", qty: 5, unit: "Bottle", buyPrice: 2200, sellPrice: 2800, threshold: 2 },
    { name: "Easy Grow Veg", sku: "FOL01", category: "Foliar Feeds", qty: 15, unit: "Kg", buyPrice: 800, sellPrice: 1100, threshold: 5 },
    { name: "Easy Grow Flower", sku: "FOL02", category: "Foliar Feeds", qty: 12, unit: "Kg", buyPrice: 850, sellPrice: 1150, threshold: 4 },
    { name: "Multi-K Foliar", sku: "FOL03", category: "Foliar Feeds", qty: 10, unit: "Kg", buyPrice: 700, sellPrice: 1000, threshold: 3 },
    { name: "Gabi Foliar", sku: "FOL04", category: "Foliar Feeds", qty: 8, unit: "Bottle", buyPrice: 550, sellPrice: 800, threshold: 3 },
    { name: "Boom Flower", sku: "PB01", category: "Plant Boosters", qty: 10, unit: "Bottle", buyPrice: 1200, sellPrice: 1650, threshold: 3 },
    { name: "Rooting Hormone", sku: "PB02", category: "Plant Boosters", qty: 20, unit: "Tins", buyPrice: 450, sellPrice: 700, threshold: 5 },
    { name: "Bio-Zyme", sku: "PB03", category: "Plant Boosters", qty: 6, unit: "Bottle", buyPrice: 1400, sellPrice: 1900, threshold: 2 },
    { name: "Atonik Booster", sku: "PB04", category: "Plant Boosters", qty: 10, unit: "Bottle", buyPrice: 950, sellPrice: 1300, threshold: 3 },
    { name: "DAP Fertilizer", sku: "SF01", category: "Seeds & Fertilizers", qty: 40, unit: "Bag", buyPrice: 3500, sellPrice: 4200, threshold: 10 },
    { name: "CAN Fertilizer", sku: "SF02", category: "Seeds & Fertilizers", qty: 30, unit: "Bag", buyPrice: 3200, sellPrice: 3800, threshold: 8 },
    { name: "NPK 17:17", sku: "SF03", category: "Seeds & Fertilizers", qty: 20, unit: "Bag", buyPrice: 3800, sellPrice: 4500, threshold: 5 },
    { name: "Maize H614", sku: "SF04", category: "Seeds & Fertilizers", qty: 50, unit: "2Kg", buyPrice: 450, sellPrice: 600, threshold: 15 },
    { name: "Maize PH4", sku: "SF05", category: "Seeds & Fertilizers", qty: 40, unit: "2Kg", buyPrice: 500, sellPrice: 650, threshold: 12 },
    { name: "Sukuma Wiki", sku: "SF06", category: "Seeds & Fertilizers", qty: 100, unit: "Pkt", buyPrice: 20, sellPrice: 50, threshold: 20 },
    { name: "Cabbage F1", sku: "SF07", category: "Seeds & Fertilizers", qty: 30, unit: "Pkt", buyPrice: 1500, sellPrice: 1900, threshold: 5 },
    { name: "Tomato Anna F1", sku: "SF08", category: "Seeds & Fertilizers", qty: 15, unit: "Pkt", buyPrice: 2800, sellPrice: 3500, threshold: 3 },
    { name: "Onion Pinoy", sku: "SF09", category: "Seeds & Fertilizers", qty: 25, unit: "Pkt", buyPrice: 800, sellPrice: 1100, threshold: 5 },
    { name: "Urea Fertilizer", sku: "SF10", category: "Seeds & Fertilizers", qty: 25, unit: "Bag", buyPrice: 3400, sellPrice: 4000, threshold: 6 },
    { name: "Knapsack 16L", sku: "TE01", category: "Farm Tools & Equipment", qty: 10, unit: "Pcs", buyPrice: 2800, sellPrice: 3800, threshold: 2 },
    { name: "Panga Chilling", sku: "TE02", category: "Farm Tools & Equipment", qty: 24, unit: "Pcs", buyPrice: 350, sellPrice: 550, threshold: 5 },
    { name: "Jembe Handle", sku: "TE03", category: "Farm Tools & Equipment", qty: 15, unit: "Pcs", buyPrice: 600, sellPrice: 900, threshold: 4 },
    { name: "Watering Can", sku: "TE04", category: "Farm Tools & Equipment", qty: 12, unit: "Pcs", buyPrice: 450, sellPrice: 750, threshold: 3 },
    { name: "Pruning Shears", sku: "TE05", category: "Farm Tools & Equipment", qty: 8, unit: "Pcs", buyPrice: 800, sellPrice: 1300, threshold: 2 },
    { name: "Milk Can 10L", sku: "TE06", category: "Farm Tools & Equipment", qty: 5, unit: "Pcs", buyPrice: 3500, sellPrice: 4500, threshold: 2 }
];

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

    filtered.forEach((p) => {
        const idx = products.indexOf(p);
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
                    <button class="ab2" onclick="sellPrompt(${idx})" title="Sale">💰</button>
                    <button class="ab2" onclick="restockPrompt(${idx})" title="Restock">➕</button>
                    <button class="ab2" onclick="removalPrompt(${idx})" title="Removal">📦</button>
                    <button class="ab2" onclick="openEdit(${idx})" title="Edit">✏️</button>
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
    const totalValue = products.reduce((sum, p) => sum + (parseFloat(p.qty) * parseFloat(p.buyPrice)), 0);
    const today = new Date().toLocaleDateString();
    const todaySales = salesData
        .filter(s => new Date(s.date).toLocaleDateString() === today)
        .reduce((sum, s) => sum + parseFloat(s.total), 0);
    const lowCount = products.filter(p => parseFloat(p.qty) <= parseFloat(p.threshold) && parseFloat(p.qty) > 0).length;

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

// 7. ACTION LOGIC
function sellPrompt(index) {
    const p = products[index];
    const amount = prompt(`Sale: How many ${p.unit} of ${p.name} sold?`, "1");
    if (amount && !isNaN(amount) && parseFloat(amount) <= parseFloat(p.qty)) {
        const qtySold = parseFloat(amount);
        const totalValue = qtySold * parseFloat(p.sellPrice);
        p.qty = (parseFloat(p.qty) - qtySold).toFixed(1);
        salesData.push({ total: totalValue, date: new Date().toISOString() });
        localStorage.setItem('agro_products', JSON.stringify(products));
        localStorage.setItem('agro_sales', JSON.stringify(salesData));
        render();
        alert(`Sold! Total: Ksh ${totalValue.toLocaleString()}`);
    } else if (amount) {
        alert("Invalid amount or insufficient stock!");
    }
}

function restockPrompt(index) {
    const p = products[index];
    const amount = prompt(`Restock: How many ${p.unit} of ${p.name} are you adding?`, "1");
    if (amount && !isNaN(amount) && parseFloat(amount) > 0) {
        p.qty = (parseFloat(p.qty) + parseFloat(amount)).toFixed(1);
        localStorage.setItem('agro_products', JSON.stringify(products));
        render();
    }
}

function removalPrompt(index) {
    const p = products[index];
    const amount = prompt(`Removal (Damaged/Expired): How many ${p.unit} of ${p.name} to remove?`, "1");
    if (amount && !isNaN(amount) && parseFloat(amount) <= parseFloat(p.qty)) {
        p.qty = (parseFloat(p.qty) - parseFloat(amount)).toFixed(1);
        localStorage.setItem('agro_products', JSON.stringify(products));
        render();
        alert("Stock removed successfully.");
    } else if (amount) {
        alert("Invalid amount!");
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

window.onload = render;