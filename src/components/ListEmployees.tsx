import React from "react";
// import messageHoc from "./hoc";



// const example = (props:any):any=> <p>{props.name}, {props.message}</p>

// // const another =  (props:any):any=> <p>, {props.message}</p>
// const Message = messageHoc(example)


interface EmployeeData extends EmployeeAddress{
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

const  Employees =(props:{data:EmployeeData}):any=>{
    return(
        <div>
            <p>{props.data.name}</p>
            {/* <p>{props.data.startdate.toString()}</p> */}
            <p>{props.data.salary}</p>
            <p>{props.data.street}</p>
            <p>{props.data.line1}</p>
            <p>{props.data.contract}</p>
        </div>
    )
}
  


export default Employees; 

