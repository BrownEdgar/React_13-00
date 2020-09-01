// <<<<<<< HEAD
// import React from 'react';
// import Child2 from './Child2'
// import SuperF from './SuperF'


//  function Child1() {
//   return (
//  <Child2/>
//   );
// }
// export default SuperF(Child1)
//=======
import React from 'react'


class Child1 extends React.Component {

 render(){
    if(this.props.count > 10){
        throw new Error ("antuylatreli arjeq!!!")
     }
        return  <h1>{this.props.count}</h1>
     }
    
}
export default Child1

