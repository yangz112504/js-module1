const employees = [
    {id: 1, name: "John Doe", age: 30, department: "IT", salary: 50000, specialization: "Javascript"},
    {id: 2, name: "Alice Smith", age: 28, department: "HR", salary: 45000, specialization: "Python"},
    {id: 3, name: "Bob Johnson", age: 35, department: "Finance", salary: 60000, specialization: "Java"},
    //...More employee records can be added here
];
function displayEmployees(){
    const totalEmployees = employees.map((employee,index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById("employeesDetails").innerHTML = totalEmployees;
}


function calculateTotalSalaries(){
    const totalSalaries = employees.reduce((sum, employee) => sum + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees(){
    const hrEmployees = employees.filter((employee)=> employee.department === "HR");
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join("");
    document.getElementById("employeesDetails").innerHTML = hrEmployeesDisplay;
}
function findEmployeeById(employeeId){
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if(foundEmployee){
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }else{
        document.getElementById("employeesDetails").innerHTML = 'no employee has been found with this ID'; 
    }
}
function findEmployeeBySpecialization(spec){
    const foundEmployee1 = employees.find(function(employee){
        return employee.specialization === spec;
    });
    if(foundEmployee1){
        document.getElementById("employeesDetails").innerHTML = `<p>${foundEmployee1.id}: ${foundEmployee1.name} - ${foundEmployee1.department} - ${foundEmployee1.specialization}</p>`;
    }else{
        document.getElementById("employeesDetails").innerHTML = 'no employee has been found with this specialization'; 
    }
}