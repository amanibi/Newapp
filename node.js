// Simulated payroll data (this will act as mock "backend" data processing)
const employees = [
    { id: 1, name: 'John Doe', salary: 50000, taxes: { federal: 5000, state: 2000 }, benefits: { health: true, 401: 5 }, garnishment: 1000, hoursWorked: 160, overtime: 10 },
    { id: 2, name: 'Jane Smith', salary: 60000, taxes: { federal: 6000, state: 2500 }, benefits: { health: true, 401: 6 }, garnishment: 0, hoursWorked: 150, overtime: 5 }
];

// Process Payroll (simulated)
function processPayroll() {
    const employee = employees[0];  // Process for one employee as an example
    const salary = employee.salary;
    const deductions = employee.taxes.federal + employee.taxes.state + employee.garnishment;
    const netPay = salary - deductions;
    document.getElementById('payroll-status').innerText = `Processed: $${netPay} net pay`;
}

// Process Direct Deposit (simulated)
function processDirectDeposit() {
    document.getElementById('deposit-status').innerText = 'Completed';
    alert('Direct deposit processed.');
}

// Process Garnishment (simulated)
function processGarnishment() {
    document.getElementById('garnishment-amount').innerText = '0';
    alert('Garnishment processed.');
}

// Generate Report (simulated)
function generateReport(type) {
    let reportData = '';
    switch(type) {
        case 'earnings':
            reportData = 'Employee Earnings: $50,000';
            break;
        case 'tax':
            reportData = 'Federal Tax: $5,000, State Tax: $2,000';
            break;
        case 'benefits':
            reportData = 'Health Insurance: Opted In, 401(k): 5%';
            break;
    }
    alert(`Report Generated: ${reportData}`);
}
