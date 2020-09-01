// <<<<<<< HEAD
// import React, { Component } from 'react';
// import Child1 from './Child1'

// export const MyContext = React.createContext(
//   // {
//   //   name: "Sebastian",
//   //   myF:function(){console.log("click")}
//   // }
// ) 

// export default class App extends Component{

//   state={
//     name:"Sebastian"
//   }
//   // handleChange = () =>{
//   //   console.log("click")
//   // }

//   return (){
//     return(
//       // <div>
//       //   <MyContext.Provider value={{
//       //     name:this.state.name,
//       //     myF:this.handleChange
//       //   }} >
//           <Child1/>
//           // </MyContext.Provider>
//           // </div>
     
//     )
//   }
// }

//=======
import React, { Component } from 'react'
import './App.css'
import Child1 from './Child1'
import ErrorHandler from './ErrorHandler'

export default class App extends Component {
  state={
      count:16
  }

  render() {
    return (
      <div className="App">
        <ErrorHandler>
          <Child1 count={this.state.count}/>
        </ErrorHandler>
      </div>
    )
  }
}

