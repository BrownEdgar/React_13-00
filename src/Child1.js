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