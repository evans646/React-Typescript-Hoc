import React,{Component} from "react";

//define state as a var
// const initialState ={
//     name:"Daniel",
//     message:"This is from the HOC component"
  
//   }
  
//   //define the type of state
//   type State = Readonly<typeof initialState>

  
//   const messageHoc =(WrappedComponent:any)=>{
//      class HOC extends Component<{},State>{
//         readonly state: State = initialState;

//         render(){
//             return(
    
//                 <WrappedComponent name={this.state.name} message={this.state.message} />
//             )
//         }
//      }return HOC;
//   }

//   export default messageHoc;