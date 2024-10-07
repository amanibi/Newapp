document.addEventListener('DOMContentLoaded', function() {
    const payrollButton = document.getElementById('run-payroll');
    const depositButton = document.getElementById('process-direct-deposit');
    const garnishmentButton = document.getElementById('process-garnishment');
    const reportForm = document.getElementById('report-form');

    payrollButton.addEventListener('click', function() {
        processPayroll();
    });

    depositButton.addEventListener('click', function() {
        processDirectDeposit();
    });

    garnishmentButton.addEventListener('click', function() {
        processGarnishment();
    });

    reportForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const reportType = document.getElementById('report-type').value;
        generateReport(reportType);
    });
});
