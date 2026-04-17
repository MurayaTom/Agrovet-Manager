# 🌿 AgroVet Pro - Kenya Stock Management System

A lightweight, professional stock management application tailored for Kenyan Agrovets. This system tracks animal feeds, veterinary medicines, seeds, and fertilizers with real-time stock alerts and sales tracking.

## 🚀 Features

* **Pre-loaded Inventory:** Comes with 60+ common Kenyan products (Unga, Baraka Fertilizers, Cooper K-Brands, etc.).
* **Stock Movements:** * 💰 **Sale:** Records a sale and updates total cash earned.
    * ➕ **Restock:** Adds new incoming stock to existing levels.
    * 📦 **Removal:** Removes damaged or expired stock.
* **Smart Alerts:** Visual indicators (Red/Orange) for products that fall below minimum threshold levels.
* **Category Filtering:** Quick navigation for Feeds, Vet Meds, Pesticides, Fungicides, and Tools.
* **Persistent Storage:** Uses browser `localStorage` to keep your data safe even after a page refresh.
* **Print Ready:** Dedicated "Print Report" button for physical inventory counts.

## 📂 Project Structure

* `index.html`: The main dashboard structure and category sidebar.
* `style.css`: Custom "Agro-Green" professional theme using 'Plus Jakarta Sans'.
* `script.js`: The core logic for inventory management and sales calculations.

## 🛠 Setup Instructions (VS Code)

1.  **Open Folder:** Open the project folder in VS Code.
2.  **Install Live Server:**
    * Go to the Extensions view (Ctrl+Shift+X).
    * Search for **"Live Server"**.
    * Click **Install**.
3.  **Run the App:**
    * Open `index.html`.
    * Click **"Go Live"** in the bottom-right status bar of VS Code.
    * The app will open automatically in your browser.

## 📝 How to Add Permanent Products

To make products a permanent part of your code so they appear on any computer:
1.  Open `script.js`.
2.  Add your new product to the `initialData` array.
3.  Increment the version key in the `localStorage` logic (e.g., change `vFinal_60` to `vFinal_61`) to force the browser to load the new list.

## ⚠️ Important Note
This application saves data to your **Browser's Local Storage**. Clearing your browser history/cache or switching to a different computer will reset the data to the default list. To avoid data loss, use the **Print Report** feature to save a PDF of your current stock regularly.

---
*Developed for Kenyan Agrovet Entrepreneurs.*