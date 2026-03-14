# Smart Parking Slot Management System

## Overview
The **Smart Parking Slot Management System** is a web-based application that simulates a real-world parking lot. It allows users to park cars by entering vehicle numbers, track parking duration, calculate fees, and view parking history. The system features a dynamic dashboard showing total, available, and occupied slots. All data is stored locally using browser `localStorage`.

---

## Technologies Used
- **HTML** – Structure of the web application  
- **CSS** – Styling and layout design  
- **JavaScript** – Logic for parking slot management, validation, timers, and dashboards  
- **localStorage** – Persistent storage for parking and history data  

---

## Features
1. **Automatic Slot Allocation** – Cars are automatically assigned the next available parking slot.  
2. **Vehicle Number Validation** – Accepts only valid Indian car numbers (e.g., TS09AB1234).  
3. **Entry/Exit Tracking** – Records entry time and calculates parking duration.  
4. **Parking Fee Calculation** – Calculates fees based on duration (₹20 for first hour, ₹10 per extra hour).  
5. **Parking History** – Displays car number, entry time, exit time, and fee in a table.  
6. **Dashboard** – Shows total, available, and occupied slots in real-time.  
7. **Persistent Data** – Parking data is stored using `localStorage` so it remains after page reload.  
8. **Interactive UI** – Colorful and user-friendly interface for realistic experience.  

---

## How to Run
1. Clone or download the repository.  
2. Open the project folder in **Visual Studio Code** or any code editor.  
3. Open **index.html** with **Live Server** extension or double-click the file in your browser.  
4. Enter a valid car number in the input field and click **Park Car**.  
5. Click on an occupied slot to release the car and calculate parking fee.  

---

---

## Future Enhancements
- Add **search car** functionality  
- Display **total revenue and analytics**  
- Add **timer countdown for parking slots**  
- Use **backend database** for multi-user access  

---

## Author
**Reshma**  
BCA Student | Python & Web Development Enthusiast  
Email: reshma264737@gmail.com
