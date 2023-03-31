import React,{Component} from "react";

import {Data} from "./data/data"




//define state as a var
const initialState ={
    name:"Daniel",
    age: 23
  }


  //define the type of state
type State = Readonly<typeof initialState>

  
  const employeeHoc =(WrappedComponent:any)=>{
     class HOC extends Component<{},State>{
        readonly state: State = initialState;
        
        render(){
            return(
                <WrappedComponent name={this.state.name} age={this.state.age} />
            )
        }
     }return HOC;
  };

  export default employeeHoc;