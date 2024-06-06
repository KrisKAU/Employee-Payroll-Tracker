// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeetabletbody = document.getElementById('employee-table');


var employees = [];
// TODO: Get user input to create and return an array of employee objects
// addEmployeesBtn.addEventListener('click', function() {
  function addEmployee() {
  var firstName;
  var lastName;
  var salary;

  // Use a while loop to continuously prompt until valid input is provided or user cancels
  while (true) {
      firstName = window.prompt('Please enter the first name of the employee:');
      if (firstName === null) {
          console.log('User cancelled.');
          return; // Exit the function if the user cancels
      }

      lastName = window.prompt('Please enter the last name of the employee:');
      if (lastName === null) {
          console.log('User cancelled.');
          return; // Exit the function if the user cancels
      }

      salary = window.prompt('Please enter the salary of the employee:');
         if (salary === null) {
          console.log('User cancelled.');
          return; // Exit the function if the user cancels
      }

      salary = parseFloat(salary.replace(/[^\d.-]/g, ''));
      if (!isNaN(salary) && salary >= 0) {
          // Perform actions based on the employee information entered
          // Collect employee data
          employees.push({ firstName: firstName, lastName: lastName, salary: salary });
          console.log('Employee added:', { firstName: firstName, lastName: lastName, salary: salary });
          break;
      } else {
          console.log('Invalid input. Please enter a valid non-negative salary.');
      }
  }

     // Sort employees array by last name
     employees.sort(function(a, b) {
      return a.lastName.localeCompare(b.lastName);
  });

  displayEmployeesList();
  displayAverageSalary();
  displayRandomWinner();

  var addAnother = window.confirm('Do you want to add another employee?');
  if (addAnother) {
      addEmployee(); // Recursively call addEmployee function
  }
}

addEmployeesBtn.addEventListener('click', addEmployee);

function displayEmployeesList() {
  employeetabletbody.innerHTML = ''; // Clear previous content
    
  employees.forEach(function(employee) {
    var row = document.createElement('tr');
    var firstNameCell = document.createElement('td');
    firstNameCell.textContent = employee.firstName;
    var lastNameCell = document.createElement('td');
    lastNameCell.textContent = employee.lastName;
    var salaryCell = document.createElement('td');
    salaryCell.textContent = '$' + employee.salary.toFixed(2);
    salaryCell.textContent = formatCurrency(employee.salary);   // currency format
    row.appendChild(firstNameCell);
    row.appendChild(lastNameCell);
    row.appendChild(salaryCell);
    employeetabletbody.appendChild(row);
    });
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}

// Display the average salary
function displayAverageSalary() {
  var totalSalary = 0;
  employees.forEach(function(employee) {
      totalSalary += employee.salary;
  });
  var averageSalary = totalSalary / employees.length;
  console.log('Average Salary:', formatCurrency(averageSalary));
}

    // Select a random employee
function displayRandomWinner() {
  if (employees.length === 0) {
      console.log('No employees to choose from.');
      return;
  }
  var randomIndex = Math.floor(Math.random() * employees.length);
  var randomEmployee = employees[randomIndex];
  console.log('Congratulations to ' + randomEmployee.firstName + ' ' + randomEmployee.lastName + ', our random drawing winner!');
}
 
  



// const getRandomEmployee = function(employeesArray) {





  // TODO: Select and display a random employee
//}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
// const displayEmployees = function(employeesArray) {
//   // Get the employee table
//   const employeeTable = document.querySelector('#employee-table');

//   // Clear the employee table
//   employeeTable.innerHTML = '';

//   // Loop through the employee data and create a row for each employee
//   for (let i = 0; i < employeesArray.length; i++) {
//     const currentEmployee = employeesArray[i];

//     const newTableRow = document.createElement("tr");

//     const firstNameCell = document.createElement("td");
//     firstNameCell.textContent = currentEmployee.firstName;
//     newTableRow.append(firstNameCell);

//     const lastNameCell = document.createElement("td");
//     lastNameCell.textContent = currentEmployee.lastName;
//     newTableRow.append(lastNameCell);

//     const salaryCell = document.createElement("td");
//     // Format the salary as currency
//     salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
//       style:"currency",
//       currency:"USD"
//     });

//     newTableRow.append(salaryCell);

//     employeeTable.append(newTableRow);
//   }
// }

// const trackEmployeeData = function() {
//   const employees = collectEmployees();

//   console.table(employees);

//   displayAverageSalary(employees);

//   console.log('==============================');

//   getRandomEmployee(employees);

//   employees.sort(function(a,b) {
//     if (a.lastName < b.lastName) {
//       return -1;
//     } else {
//       return 1;
//     }
//   });

//   displayEmployees(employees);
// }

// // Add event listener to 'Add Employees' button
// addEmployeesBtn.addEventListener('click', trackEmployeeData);
