export default class App extends Components{
  state = {
      title:"Tenas darav te che",
      count:0
  }
  changeTitle = () => {
      this.setState({
          title:"vonc vor darav :)"
      })
  }
  render(){
      return(
          <div>
              <h1>{this.state.count}</h1>
              <button onClick={() => this.setState({count:this.state.count + 10})}>+</button>
              <button onClick={() => this.setState({count:this.state.count - 5})}>-</button>
              <button onClick={() => this.setState({count:0})}>0</button>
          </div>
      )
  }
}