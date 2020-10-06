import React,{Component} from 'react';


export default class App extends Component{
  state = {
      title:"Tenas darav te che",
      count:0
  }
  changeTitle = (n) => {
		if (n === 0) {
			this.setState({ count: 0 })
		}else{
			this.setState({ count: this.state.count + n })
		}
  }
  render(){
      return(
          <div>
              <h1>{this.state.count}</h1>
					<button onClick={() => this.changeTitle(10)}>+</button>
					<button onClick={() => this.changeTitle(5)}>-</button>
					<button onClick={() => this.changeTitle(0)}>0</button>
          </div>
      )
  }
}