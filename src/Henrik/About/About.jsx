import React, { Component } from 'react'
import AboutList from './AboutList'

export default class About extends Component {
    render() {
        return(
            <AboutList/>
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