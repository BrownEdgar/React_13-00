// <<<<<<< HEAD
// import React from 'react';
// //import {MyContext} from './App'
// import SuperF from "./SuperF"


//  function Child2(props) {
//     console.log('Child2.props', props)
//   return (
//     //   <MyContext.Consumer>
//     //       {value => (
//     //          <div onClick= {props.myF}>
//     //              <p>{props.name}</p>
//     //          </div>
//     //       )}
//     //   </MyContext.Consumer>
//     <div> 
//         <button onClick={()=>props.handleChange(5)}>Pass {this.props.count}</button>
//     </div>
//   )
// }

// export default SuperF(Child2);


// //kisat
// =======
import React from 'react'
import SuperF from "./SuperF"

function Child2(props) {
     console.log('Child2.props',props);
    return (
            <div>
                <button onClick={()=>props.handleChange(5)}>Pass {props.count}</button>
            </div>
        
    )
}
export default SuperF(Child2);
//>>>>>>> a5955b324f38a1a33cd6d4cd05d0d442ab0aaf53
