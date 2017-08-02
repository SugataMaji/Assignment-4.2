 
 import { EmployeeNameSpace } from './namespace';
 
 export function employeeDetail(Employee: EmployeeNameSpace.Employee) {
    console.log(` The name of the employee is ${Employee.name} , from ${Employee.department} department and has a  ${Employee.team}no of team.`);
  };

