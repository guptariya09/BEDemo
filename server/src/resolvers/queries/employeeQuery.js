import {EmployeeModel} from '../../models'

export const allEmployees = async(_, arg, context)=>{
    // return async(_, arg, context)=> {
        console.log('arg', arg);
        let employees = await EmployeeModel.findAll() 
        return employees
    // }
    
}

