// Write your solution in this file!
/* const employee = {
    name: 'sara',
    streetAddress: '70th'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newEmployee = {...employee}
        newEmployee[key] = value
        //newEmployee[key] allows me to access its value
    return newEmployee 
} */
let employee = {
    name: "Anna",
    streetAddress: "700 Madison Avenue"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    let newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    let newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}