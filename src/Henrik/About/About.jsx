<<<<<<< HEAD
import React, { Component } from 'react'
import AboutList from './AboutList'

export default class About extends Component {
    render() {
        return(
            <AboutList/>
=======
import React, { Component } from 'react';
// import Component2 from "./Component"

export default class About extends Component {
    render() {
       //1 // let params = this.props.match.params.name;
        // let konkret = this.props.users.filter(elem => elem.name.toLowerCase() === params.toLowerCase());
        // console.log(konkret)
        return (
            
            // <>
            // {konkret.length > 0 ? (
            //       <>
            //       <h1>Name is:{ konkret[0].name}</h1>
            //       <h1>Phone is:{ konkret[0].phone}</h1>
            //       <h1>City is:{ konkret[0].city}</h1>
            //   </>
            // ): <h1>Tenc mARD CHKA</h1> }
            // </>

          //2  // <>
            // <Component2/>
            // </>

            <>
            <h1>Karevor ej</h1>
            </>
          
            
>>>>>>> 344c4d2dad8b6566c3fc9eba097fc9e4e0d0af9b
        )
    }
}


// {this.props.users.map(elem => {
//     return (
//         <AboutList 
//             key={elem.id}
//             name={elem.name}
//             city={elem.city}
//             phone={elem.phone}
//         />
//     )
// })
// }