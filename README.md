# Expense Tracker App

## Description

The Expense Tracker App is a simple, interactive web application that helps users track their financial transactions, including incomes and expenses. Users can add transaction descriptions, specify amounts, and categorize them as income or expense. The app displays the current balance and a list of transactions with an option to remove them. It also provides a visual overview of incomes and expenses using a dynamic doughnut chart powered by Chart.js.

---

## Features

* Add income and expense transactions with descriptions and amounts.
* View current balance updating dynamically based on transactions.
* List all transactions with clear color coding: green for income and red for expenses.
* Remove individual transactions to update balance and chart.
* Visual financial summary using a doughnut chart showing income vs. expenses.
* Responsive design and intuitive user interface.

---

## Project Structure
Expense-Tracker-App/
 index.html          # Main HTML page with UI structure
 style.css           # (Optional) Stylesheet for styling the app (not provided here)
 script.js           # JavaScript logic for handling transactions and chart updates
 README.md           # This file
 

## How to Use

### Prerequisites

* A modern web browser (Chrome, Firefox, Edge, Safari).
* Internet connection for Chart.js CDN (unless you download and serve it locally).

### Running the App

1. Open `index.html` in a browser by double-clicking or dragging it into a browser window.
2. Add a transaction by entering a description, amount, and selecting type (Income/Expense).
3. Click the **Add** button.
4. View updated balance and transaction list.
5. Remove transactions using the "x" button next to each transaction.
6. Visualize financial data on the doughnut chart.

---

## Code Highlights

* Transactions are stored in an array of objects containing description, amount, and type.
* UI updates dynamically with DOM manipulation.
* Chart.js renders the doughnut chart and updates on transaction changes.

---

## Technologies Used

* HTML5 for structure
* CSS3 for styling (optional)
* JavaScript for interactivity
* Chart.js for charts
* CDN to load Chart.js externally

---

## Possible Improvements

* Persist data using browser local storage.
* Add date/time to transactions.
* Implement filters for better transaction management.
* Enhance UI with animations and styles.
* Add user authentication for data saving.

---

## Credits

Developed by \[Your Name]. Inspired by common expense tracker tutorials and personal finance apps.

---

## License

This project is open source and free to use.


