const initialData = [
    // --- ANIMAL FEEDS (20 ITEMS) ---
    {id:1, name:"Chicken Finisher - 50kg", sku:"AF01", category:"Animal Feeds", qty:20, unit:"Bag", buyingPrice:2800, sellingPrice:3200, threshold:5},
    {id:2, name:"Chicken Finisher - 25kg", sku:"AF02", category:"Animal Feeds", qty:30, unit:"Bag", buyingPrice:1500, sellingPrice:1800, threshold:5},
    {id:3, name:"Chicken Finisher - 10kg", sku:"AF03", category:"Animal Feeds", qty:15, unit:"Bag", buyingPrice:700, sellingPrice:900, threshold:3},
    {id:4, name:"Chicken Grower - 50kg", sku:"AF04", category:"Animal Feeds", qty:25, unit:"Bag", buyingPrice:2600, sellingPrice:3000, threshold:5},
    {id:5, name:"Chicken Grower - 25kg", sku:"AF05", category:"Animal Feeds", qty:20, unit:"Bag", buyingPrice:1400, sellingPrice:1700, threshold:5},
    {id:6, name:"Dairy Meal - 50kg", sku:"AF06", category:"Animal Feeds", qty:10, unit:"Bag", buyingPrice:2200, sellingPrice:2600, threshold:4},
    {id:7, name:"Dairy Meal - 25kg", sku:"AF07", category:"Animal Feeds", qty:15, unit:"Bag", buyingPrice:1200, sellingPrice:1450, threshold:4},
    {id:8, name:"Cattle Salt - 2kg", sku:"AF08", category:"Animal Feeds", qty:50, unit:"Pkt", buyingPrice:150, sellingPrice:220, threshold:10},
    {id:9, name:"Pig Starter - 50kg", sku:"AF09", category:"Animal Feeds", qty:8, unit:"Bag", buyingPrice:2900, sellingPrice:3400, threshold:2},
    {id:10, name:"Layers Mash - 50kg", sku:"AF10", category:"Animal Feeds", qty:20, unit:"Bag", buyingPrice:2750, sellingPrice:3100, threshold:5},
    {id:11, name:"Kienyeji Mash - 50kg", sku:"AF11", category:"Animal Feeds", qty:12, unit:"Bag", buyingPrice:2400, sellingPrice:2800, threshold:5},
    {id:12, name:"Chick Mash - 50kg", sku:"AF12", category:"Animal Feeds", qty:18, unit:"Bag", buyingPrice:2950, sellingPrice:3300, threshold:5},
    {id:13, name:"Molasses - 20L", sku:"AF13", category:"Animal Feeds", qty:5, unit:"Jerrican", buyingPrice:1200, sellingPrice:1600, threshold:2},
    {id:14, name:"Cotton Seed Cake - 50kg", sku:"AF14", category:"Animal Feeds", qty:10, unit:"Bag", buyingPrice:2800, sellingPrice:3200, threshold:3},
    {id:15, name:"Wheat Bran - 50kg", sku:"AF15", category:"Animal Feeds", qty:15, unit:"Bag", buyingPrice:1100, sellingPrice:1400, threshold:5},
    {id:16, name:"Maize Germ - 50kg", sku:"AF16", category:"Animal Feeds", qty:20, unit:"Bag", buyingPrice:1300, sellingPrice:1650, threshold:5},
    {id:17, name:"Calf Starter - 50kg", sku:"AF17", category:"Animal Feeds", qty:6, unit:"Bag", buyingPrice:3100, sellingPrice:3600, threshold:2},
    {id:18, name:"Rabbit Pellets - 10kg", sku:"AF18", category:"Animal Feeds", qty:10, unit:"Bag", buyingPrice:850, sellingPrice:1100, threshold:3},
    {id:19, name:"Fish Meal - 1kg", sku:"AF19", category:"Animal Feeds", qty:25, unit:"Pkt", buyingPrice:400, sellingPrice:550, threshold:5},
    {id:20, name:"Mineral Lick - 2kg", sku:"AF20", category:"Animal Feeds", qty:30, unit:"Pkt", buyingPrice:350, sellingPrice:480, threshold:10},

    // --- VETERINARY MEDICINES ---
    {id:21, name:"Albendazole 1L", sku:"VM01", category:"Veterinary Medicines", qty:15, unit:"Bottle", buyingPrice:400, sellingPrice:600, threshold:5},
    {id:22, name:"Oxytetracycline 10%", sku:"VM02", category:"Veterinary Medicines", qty:10, unit:"Vial", buyingPrice:350, sellingPrice:550, threshold:3},
    {id:23, name:"Multivitamin Injection", sku:"VM03", category:"Veterinary Medicines", qty:12, unit:"Vial", buyingPrice:450, sellingPrice:700, threshold:3},
    {id:24, name:"Tylosin 50ml", sku:"VM04", category:"Veterinary Medicines", qty:5, unit:"Vial", buyingPrice:800, sellingPrice:1100, threshold:2},
    {id:25, name:"Ectomin Dip 100ml", sku:"VM05", category:"Veterinary Medicines", qty:20, unit:"Bottle", buyingPrice:300, sellingPrice:450, threshold:5},
    {id:26, name:"Penistrep 100ml", sku:"VM06", category:"Veterinary Medicines", qty:8, unit:"Vial", buyingPrice:650, sellingPrice:850, threshold:3},
    {id:27, name:"Gumboro Vaccine", sku:"VM07", category:"Veterinary Medicines", qty:50, unit:"Dose", buyingPrice:500, sellingPrice:750, threshold:10},
    {id:28, name:"Newcastle Vaccine", sku:"VM08", category:"Veterinary Medicines", qty:50, unit:"Dose", buyingPrice:450, sellingPrice:700, threshold:10},
    {id:29, name:"Gentian Violet Spray", sku:"VM09", category:"Veterinary Medicines", qty:15, unit:"Can", buyingPrice:350, sellingPrice:500, threshold:5},
    {id:30, name:"Eye Powder", sku:"VM10", category:"Veterinary Medicines", qty:20, unit:"Sachet", buyingPrice:120, sellingPrice:200, threshold:5},

    // --- PESTICIDES & HERBICIDES ---
    {id:31, name:"Roundup 1L", sku:"PH01", category:"Pesticides & Herbicides", qty:10, unit:"Bottle", buyingPrice:1200, sellingPrice:1600, threshold:3},
    {id:32, name:"Duduthrin 250ml", sku:"INS01", category:"Insecticides", qty:20, unit:"Bottle", buyingPrice:450, sellingPrice:650, threshold:5},
    {id:33, name:"Ridomil Gold 50g", sku:"FUN01", category:"Fungicides", qty:40, unit:"Sachet", buyingPrice:250, sellingPrice:350, threshold:10},
    {id:34, name:"EasyGro Starter", sku:"FF01", category:"Foliar Feeds", qty:12, unit:"Pkt", buyingPrice:550, sellingPrice:750, threshold:3},
    {id:35, name:"Atonik 500ml", sku:"PB01", category:"Plant Boosters", qty:8, unit:"Bottle", buyingPrice:1100, sellingPrice:1500, threshold:2},
    {id:36, name:"Gramoxone 1L", sku:"PH02", category:"Pesticides & Herbicides", qty:10, unit:"Bottle", buyingPrice:1150, sellingPrice:1500, threshold:3},
    {id:37, name:"Bestox 100ml", sku:"INS02", category:"Insecticides", qty:15, unit:"Bottle", buyingPrice:280, sellingPrice:400, threshold:5},
    {id:38, name:"Milraz 500g", sku:"FUN02", category:"Fungicides", qty:6, unit:"Pkt", buyingPrice:1850, sellingPrice:2300, threshold:2},
    {id:39, name:"Glysophate 1L", sku:"PH03", category:"Pesticides & Herbicides", qty:12, unit:"Bottle", buyingPrice:900, sellingPrice:1250, threshold:3},
    {id:40, name:"Thunder 100ml", sku:"INS03", category:"Insecticides", qty:10, unit:"Bottle", buyingPrice:850, sellingPrice:1150, threshold:3},
    {id:41, name:"Copper Oxychloride", sku:"FUN03", category:"Fungicides", qty:8, unit:"Pkt", buyingPrice:1100, sellingPrice:1500, threshold:3},
    {id:42, name:"Flower/Fruit Foliar", sku:"FF02", category:"Foliar Feeds", qty:10, unit:"Pkt", buyingPrice:600, sellingPrice:850, threshold:3},
    {id:43, name:"Green Master", sku:"FF03", category:"Foliar Feeds", qty:15, unit:"Pkt", buyingPrice:500, sellingPrice:700, threshold:4},
    {id:44, name:"Weedal 1L", sku:"PH04", category:"Pesticides & Herbicides", qty:10, unit:"Bottle", buyingPrice:950, sellingPrice:1300, threshold:3},
    {id:45, name:"Abamectin 100ml", sku:"INS04", category:"Insecticides", qty:12, unit:"Bottle", buyingPrice:400, sellingPrice:600, threshold:3},

    // --- SEEDS & FERTILIZERS ---
    {id:46, name:"Maize H614 - 2kg", sku:"SF01", category:"Seeds & Fertilizers", qty:100, unit:"Pkt", buyingPrice:500, sellingPrice:650, threshold:20},
    {id:47, name:"Maize DK8031 - 2kg", sku:"SF02", category:"Seeds & Fertilizers", qty:50, unit:"Pkt", buyingPrice:600, sellingPrice:800, threshold:10},
    {id:48, name:"DAP Fertilizer - 50kg", sku:"SF03", category:"Seeds & Fertilizers", qty:10, unit:"Bag", buyingPrice:2500, sellingPrice:3500, threshold:4},
    {id:49, name:"CAN Fertilizer - 50kg", sku:"SF04", category:"Seeds & Fertilizers", qty:15, unit:"Bag", buyingPrice:2200, sellingPrice:3000, threshold:4},
    {id:50, name:"NPK 17:17:17 - 50kg", sku:"SF05", category:"Seeds & Fertilizers", qty:8, unit:"Bag", buyingPrice:2800, sellingPrice:3600, threshold:2},
    {id:51, name:"Rose Coco Beans 2kg", sku:"SF06", category:"Seeds & Fertilizers", qty:30, unit:"Pkt", buyingPrice:450, sellingPrice:600, threshold:5},
    {id:52, name:"Sukuma Wiki Seeds", sku:"SF07", category:"Seeds & Fertilizers", qty:40, unit:"Sachet", buyingPrice:150, sellingPrice:250, threshold:10},
    {id:53, name:"Anna F1 Tomato Seeds", sku:"SF08", category:"Seeds & Fertilizers", qty:10, unit:"Pkt", buyingPrice:2500, sellingPrice:3200, threshold:2},
    {id:54, name:"UREA - 50kg", sku:"SF09", category:"Seeds & Fertilizers", qty:12, unit:"Bag", buyingPrice:2600, sellingPrice:3300, threshold:4},
    {id:55, name:"Red Sensation Onion", sku:"SF10", category:"Seeds & Fertilizers", qty:15, unit:"Pkt", buyingPrice:1800, sellingPrice:2400, threshold:3},

    // --- TOOLS ---
    {id:56, name:"Knapsack 16L", sku:"TE01", category:"Farm Tools & Equipment", qty:5, unit:"Pc", buyingPrice:3500, sellingPrice:4500, threshold:2},
    {id:57, name:"Panga", sku:"TE02", category:"Farm Tools & Equipment", qty:15, unit:"Pc", buyingPrice:380, sellingPrice:550, threshold:5},
    {id:58, name:"Shovel", sku:"TE03", category:"Farm Tools & Equipment", qty:10, unit:"Pc", buyingPrice:600, sellingPrice:850, threshold:3},
    {id:59, name:"Rake", sku:"TE04", category:"Farm Tools & Equipment", qty:8, unit:"Pc", buyingPrice:450, sellingPrice:700, threshold:3},
    {id:60, name:"Poultry Drinker 4L", sku:"TE05", category:"Farm Tools & Equipment", qty:12, unit:"Pc", buyingPrice:400, sellingPrice:650, threshold:3}
];

// DATA INITIALIZATION
let prods = JSON.parse(localStorage.getItem('av_stock_vFinal_60'));
if(!prods) {
    prods = initialData;
    localStorage.setItem('av_stock_vFinal_60', JSON.stringify(prods));
}

let salesTotal = parseFloat(localStorage.getItem('av_sales_vFinal_60') || '0');
let activeCat = 'all';

function save() {
    localStorage.setItem('av_stock_vFinal_60', JSON.stringify(prods));
    localStorage.setItem('av_sales_vFinal_60', salesTotal);
}

// UI HELPERS
function openAdd() {
    document.getElementById('eid').value = '';
    document.querySelectorAll('.fg input').forEach(i => i.value = '');
    document.getElementById('mtitle').textContent = "Add Product";
    document.getElementById('pmod').classList.add('open');
}
function cm(id) { document.getElementById(id).classList.remove('open'); }

function setcat(c) {
    activeCat = c;
    document.querySelectorAll('.cb').forEach(b => b.classList.remove('active'));
    document.querySelector(`[data-cat="${c}"]`).classList.add('active');
    render();
}

// CORE STOCK LOGIC
function adjustStock(id, type) {
    const p = prods.find(x => x.id === id);
    let msg = (type === 'sale') ? "Sale Qty:" : (type === 'in' ? "Restock Qty:" : "Removal Qty:");
    const val = prompt(`${msg} for ${p.name}`);
    const qty = parseInt(val);
    if (isNaN(qty) || qty <= 0) return;

    if (type === 'sale') {
        if (p.qty < qty) return alert("Insufficient stock!");
        p.qty -= qty;
        salesTotal += (qty * p.sellingPrice);
    } else if (type === 'in') {
        p.qty += qty;
    } else {
        if (p.qty < qty) return alert("Not enough items in stock!");
        p.qty -= qty;
    }
    save(); render();
}

function savep() {
    const id = document.getElementById('eid').value;
    const p = {
        id: id ? parseInt(id) : Date.now(),
        name: document.getElementById('fn').value,
        sku: document.getElementById('fsk').value,
        category: document.getElementById('fc').value,
        qty: parseInt(document.getElementById('fq').value) || 0,
        unit: document.getElementById('fu').value,
        buyingPrice: parseFloat(document.getElementById('fb').value) || 0,
        sellingPrice: parseFloat(document.getElementById('fs').value) || 0,
        threshold: parseInt(document.getElementById('fth').value) || 5
    };
    if (!p.name) return alert("Name required!");
    const idx = prods.findIndex(x => x.id == id);
    if (idx > -1) prods[idx] = p; else prods.push(p);
    save(); render(); cm('pmod');
}

function editp(id) {
    const p = prods.find(x => x.id == id);
    document.getElementById('eid').value = p.id;
    document.getElementById('fn').value = p.name;
    document.getElementById('fsk').value = p.sku;
    document.getElementById('fc').value = p.category;
    document.getElementById('fq').value = p.qty;
    document.getElementById('fu').value = p.unit;
    document.getElementById('fb').value = p.buyingPrice;
    document.getElementById('fs').value = p.sellingPrice;
    document.getElementById('fth').value = p.threshold;
    document.getElementById('pmod').classList.add('open');
}

function delp(id) { if(confirm("Delete this product?")) { prods = prods.filter(x => x.id != id); save(); render(); } }

// NEW: DOWNLOAD BACKUP FUNCTION
function downloadBackup() {
    const data = {
        products: prods,
        totalSales: salesTotal,
        backupDate: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Agrovet_Backup_${new Date().toLocaleDateString().replace(/\//g,'-')}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

// RENDER FUNCTION
function render() {
    const q = document.getElementById('q').value.toLowerCase();
    const sf = document.getElementById('stf').value;
    
    const list = prods.filter(p => {
        const mc = activeCat === 'all' || p.category === activeCat;
        const ms = p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q);
        const st = p.qty <= 0 ? 'out' : (p.qty <= p.threshold ? 'low' : 'ok');
        return mc && ms && (sf === 'all' || sf === st);
    });

    // Counts
    document.getElementById('cnt-all').textContent = prods.length;
    const cats = {'Animal Feeds':'cnt-af','Veterinary Medicines':'cnt-vm','Pesticides & Herbicides':'cnt-ph','Insecticides':'cnt-ins','Fungicides':'cnt-fun','Foliar Feeds':'cnt-fol','Plant Boosters':'cnt-pb','Seeds & Fertilizers':'cnt-sf','Farm Tools & Equipment':'cnt-te'};
    Object.keys(cats).forEach(k => {
        if(document.getElementById(cats[k])) document.getElementById(cats[k]).textContent = prods.filter(p => p.category === k).length;
    });

    document.getElementById('tbody').innerHTML = list.map(p => `
        <tr>
            <td><strong>${p.name}</strong><br><small>${p.sku}</small></td>
            <td>${p.category}</td>
            <td><div class="dot ${p.qty <= 0 ? 'dou' : (p.qty <= p.threshold ? 'dlo' : 'dok')}"></div>${p.qty} ${p.unit}</td>
            <td>${p.buyingPrice.toLocaleString()}</td>
            <td><strong>${p.sellingPrice.toLocaleString()}</strong></td>
            <td>
                <div class="acts">
                    <button class="ab2" title="Sale" onclick="adjustStock(${p.id}, 'sale')">💰</button>
                    <button class="ab2" title="Restock" onclick="adjustStock(${p.id}, 'in')">➕</button>
                    <button class="ab2" title="Damage" onclick="adjustStock(${p.id}, 'out')">📦</button>
                    <button class="ab2" onclick="editp(${p.id})">✏️</button>
                    <button class="ab2" onclick="delp(${p.id})" style="color:red">🗑</button>
                </div>
            </td>
        </tr>`).join('');

    const totalVal = prods.reduce((s, p) => s + (p.qty * p.sellingPrice), 0);
    const lowCount = prods.filter(p => p.qty <= p.threshold && p.qty > 0).length;

    document.getElementById('stats').innerHTML = `
        <div class="sc"><div class="sl">Total Cash Sales</div><div class="sv">Ksh ${salesTotal.toLocaleString()}</div></div>
        <div class="sc"><div class="sl">Stock Value</div><div class="sv">Ksh ${totalVal.toLocaleString()}</div></div>
        <div class="sc"><div class="sl">Low Stock Alerts</div><div class="sv" style="color:red">${lowCount}</div></div>
    `;
    document.getElementById('abar').classList.toggle('hidden', lowCount === 0);
}

render();