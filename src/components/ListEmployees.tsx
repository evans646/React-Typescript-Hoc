import React from "react";
import employeeHoc from "../hoc";




export interface EmployeeData extends EmployeeAddress{
    id:number
    name: string
    age:number
    startdate?:Date
    email: string,
    phone: number,
    address:EmployeeAddress,
    isActive: boolean
    salary:number
    about: string
    contract?:Terms
}

enum Terms{
    Temporary="Temporay contract",
    FixedTerm="Fixed term"
}

interface EmployeeAddress{
    street:any
    line1:any
    line2?:any
}


const example = (props:any):any=> <p>{props.name}, {props.age}</p>

// const another =  (props:any):any=> <p>, {props.message}</p>
const Employee = employeeHoc(example)

export default  Employee;