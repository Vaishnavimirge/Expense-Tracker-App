let transactions = []; // Corrected variable name

function addTransaction() {
    const description = document.getElementById("description").value; // Fixed ID and property
    const amount = parseFloat(document.getElementById("amount").value);
    const type = document.getElementById("type").value;

    if (description === "" || isNaN(amount)) {
        alert("Please enter valid details");
        return;
    }

    const txn = { description, amount, type };
    transactions.push(txn); // Corrected array name and method

    updateUI();
    updateChart(); // Fixed typo: updateCharts() → updateChart()
}

function updateUI() {
    const transactionList = document.getElementById("transaction-list");
    const balance = document.getElementById("balance");

    transactionList.innerHTML = "";
    let totalBalance = 0;

    transactions.forEach((txn, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${txn.description} - $${txn.amount.toFixed(2)} <button onclick="removeTransaction(${index})">x</button>`;

        if (txn.type === "income") {
            totalBalance += txn.amount;
            li.style.color = "green";
        } else {
            totalBalance -= txn.amount;
            li.style.color = "red";
        }

        transactionList.appendChild(li);
    });

    balance.textContent = totalBalance.toFixed(2);
}

function removeTransaction(index) {
    transactions.splice(index, 1);
    updateUI();
    updateChart(); // Fixed typo
}

// Chart setup
const ctx = document.getElementById("expenseChart").getContext("2d");
let chart = new Chart(ctx, {
    type: "doughnut",
    data: {
        labels: ["Income", "Expense"], // Fixed typo: "date" → "data"
        datasets: [{
            label: "Financial Overview",
            data: [0, 0],
            backgroundColor: ["green", "red"],
        }]
    },
});

function updateChart() {
    let income = transactions
        .filter(t => t.type === "income")
        .reduce((sum, t) => sum + t.amount, 0);

    let expense = transactions
        .filter(t => t.type === "expense")
        .reduce((sum, t) => sum + t.amount, 0);

    chart.data.datasets[0].data = [income, expense];
    chart.update();
}
