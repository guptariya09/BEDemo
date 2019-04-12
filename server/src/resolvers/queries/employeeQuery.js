import { EmployeeModel } from '../../models'

export const allEmployees = () => {
    return async (_, arg, context) => {
        console.log('arg', arg);
        let employees = await EmployeeModel.findAll();
        console.log(employees);
        return employees;
    }

}

