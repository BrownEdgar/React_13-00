import React from 'react'
import Button from './UI/Button/Button'

export default class Developers extends React.Component {
    componentWillUnmount() {
        console.log("jnjum:",this.props.name)
    }
    
   render () {
    return (
        <div style={{border:'1px solid #000',margin:'25px',width:"450px"}}>
            <h1>{this.props.name}</h1>
            <pre style={{fontSize:'24px'}}>{this.props.skils}</pre>
            <button onClick={()=>this.props._onCklick(this.props.id)}>X</button>
            <Button type={'primary'} onClick={() => console.log("erevi")}/>
            <Button type={'succes'}/>
            <Button type={'dark'} btnName={'Dark'}/>
            
        </div>
    )
}
   }
