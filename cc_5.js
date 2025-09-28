//Step 2: Employee Array
const empployees =[
    {name:"Jonathan", hourlyRate: 20, hoursWorked: 38},
    {name:"James", hourlyRate: 22, hoursWorked: 40},
    {name:"Jade", hourlyRate: 24, hoursWorked: 36},
    {name:"Jacob", hourlyRate: 26, hoursWorked: 42},
    {name:"Jessica", hourlyRate: 21.50, hoursWorked: 45}
];

//Step 3: Caclculate base pay (up to 40 hrs)
function calculateBasePay(rate, hours)
{const regularHours = Math.min(hours, 40);
    return rate * regularHours;
}

//Step 4: Calculate overtime pay (time and a half >40 hrs)
function calculateOvertimePay(rate, hours)
{const overtimeHours = Math.max(0, hours - 40);
    return overtimeHours * (rate * 1.5);
}

