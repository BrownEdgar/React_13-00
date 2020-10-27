// // OLD WAY
// componentWillReceiveProps(newProps) {
//     if (this.props.visible === true && newProps.visible === false) {
//         registerLog('dialog is hidden');
//     }
// }
// // NEW WAY
// static getDerivedStateFromProps(nextProps, prevState) {
//     if (this.state.visible === true && nextProps.visible === false) {
//         registerLog('dialog is hidden');
//     }
//     return {visible: nextProps.visible};
// }
// //ORINAK
// lass XXX extends React.Component {
// 	state = {
// 		token: null
// 	}

//   static getDerivedStateFromProps(props){
// 		if (props.token) {
// 			return {
// 				token: props.token
// 			}
// 		}
// 		return null;
// 	}
// }
// В течение долгого времени метод жизненного цикла componentWillReceiveProps
// был единственным способом обновления состояния в ответ на изменение свойств
// props без дополнительной отрисовки. В версии 16.3 мы ввели ему на смену новый
// метод жизненного цикла: getDerivedStateFromProps




import React, { Component } from 'react'
import Button from '../../UI/Button/Button'
import Bomb from './Bomb'
import ComponentCatch from "./ComponentCatch"

export default class Components extends Component {
	state ={
		count: 0, tarmacum:-1
	}
static getDerivedStateFromProps(nextProps, prevState) {


	return { ...prevState, tarmacum: prevState.tarmacum + 1 }

}	
	render() {
		return (
			<ComponentCatch>
			<div>
				<Bomb
				bomb={this.state.count}></Bomb>
					<button onClick={() => this.setState({ count: this.state.count + 1 })}>Up count</button>
					<h1>Tarmacumneri qanaky havasar e: {this.state.tarmacum}</h1>
			</div>
			</ComponentCatch>
		)
	}
}
