import { EmployeeNameSpace } from './namespace';
import { employeeDetail  } from './function';


  let myemployee: EmployeeNameSpace.Employee = { name: "Sugata Maji", department: "Web Development", team: 25 }
  employeeDetail(myemployee);