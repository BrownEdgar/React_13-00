import React, { Component } from 'react';
import Child1 from './Child1'

export const MyContext = React.createContext(
  // {
  //   name: "Sebastian",
  //   myF:function(){console.log("click")}
  // }
) 

export default class App extends Component{

  state={
    name:"Sebastian"
  }
  // handleChange = () =>{
  //   console.log("click")
  // }

  return (){
    return(
      // <div>
      //   <MyContext.Provider value={{
      //     name:this.state.name,
      //     myF:this.handleChange
      //   }} >
          <Child1/>
          // </MyContext.Provider>
          // </div>
     
    )
  }
}

