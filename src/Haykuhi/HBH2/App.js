import React, {Component} from 'react';
import './App.css'
import Child from './Child'


class App extends Component{
    constructor(props){
        super(props);
        this.state={
            updates: 0
        }
    }
    componentDidUpdate(prevProps, prevState){
        console.log("component did update","[updates]=>", this.state.updates )
         }
       
    Updatecount= () => {
        this.setState( {updates: this.state.updates + 1 })
    }

        // prevState => {
        //     return{updates: prevState.updates +1}
        // }
    render(){
        return(
            <div className="App">
                <Child updates = {this.state.updates}/>

                <button 
                onClick={this.Updatecount}
                > Update {this.state.updates} </button>

            </div>
        )
    }  
}

export default App;