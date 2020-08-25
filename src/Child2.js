import React from 'react';
//import {MyContext} from './App'
import SuperF from "./SuperF"


 function Child2(props) {
    console.log('Child2.props', props)
  return (
    //   <MyContext.Consumer>
    //       {value => (
    //          <div onClick= {props.myF}>
    //              <p>{props.name}</p>
    //          </div>
    //       )}
    //   </MyContext.Consumer>
    <div> 
        <button onClick={()=>props.handleChange(5)}>Pass {this.props.count}</button>
    </div>
  )
}

export default SuperF(Child2);


//kisat