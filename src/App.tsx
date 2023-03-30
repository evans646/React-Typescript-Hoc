import React from 'react';
import './App.css';
import Employees from "./components/ListEmployees";
import {data} from "./data/data"

function App() {

// let  EmployeeData={
//    id:6,
//    name:"Evans",
//    jobtitle:"Software Engineer",
//    startdate:new Date(),
//    salary:4000,
//   //  contract:"Temporary",
//    street:"Evans Quao street",
//    line1:12 + "right left"
// }

  return (
    <div className="App">
      <header className="App-header">      
       <Employees data={data.string}/>
      </header>
    </div>
  );
}

export default App;
