//Step 2: Employee Array
const employees =[
    {name:"Jonathan", hourlyRate: 20, hoursWorked: 38},
    {name:"James", hourlyRate: 22, hoursWorked: 40},
    {name:"Jade", hourlyRate: 24, hoursWorked: 36},
    {name:"Jacob", hourlyRate: 26, hoursWorked: 42},
    {name:"Jessica", hourlyRate: 21.50, hoursWorked: 45}
];

//Step 3: Caclculate base pay (up to 40 hrs)
function calculateBasePay(rate, hours)
{const regularHours = Math.min(hours, 40);
    return rate * regularHours;}

//Step 4: Calculate overtime pay (time and a half >40 hrs)
function calculateOvertimePay(rate, hours)
{const overtimeHours = Math.max(0, hours - 40);
    return overtimeHours * (rate * 1.5);}

//Step 5: Calculate Taxes (15% deduction)
function calculateTaxes(grossPay)
{return grossPay * 0.15;}

//Step 6: Process Payroll for one employee
function processPayroll (employee) {
  const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
  const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
  const grossPay = basePay + overtimePay;
  const taxes = calculateTaxes(grossPay);
  const netPay = grossPay - taxes;

return { 
    name: employee.name,
    basePay: basePay.toFixed(2),
    overtimePay: overtimePay.toFixed(2),
    grossPay: grossPay.toFixed(2),
    netPay: netPay.toFixed(2)
};
}

//Step 7: Loop & Log Payroll report 
employees.forEach(emp =>
     {console.log(processPayroll(emp));

});
