import React from 'react';




export default function SuperF(Component) {
  return  class SuperF extends React.Component{
      constructor(props){
          super(props)
          this.state = {
              count:5,
              bool: false
          }
          this.handleChange = this.handleChange.bind(this)
      }
      handleChange = (arg) => {
          this.setState({count:arg})
          console.log(arg)
      }
      render(){
          return <Component 
          {...this.props}  
          handleChange = {this.handleChange}
          count= {this.state.count}
          bool={this.state.bool } />
      }
  }
}