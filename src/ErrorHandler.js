import React, { Component } from 'react'

export default class ErrorHandler extends Component {
        state = {
            error:false
        }
//այս մեթոդի աշխատանքի ժամանակ դեռ 'state' չկա՝ դրա համար ուղակի { error: true }
    static getDerivedStateFromError(e) {
    console.log('getDerivedStateFromError')
    // Տեղի է ունեցել ՍԽԱԼ!!!
    return { error: e.message };
 }

    
    render() {
        if(this.state.error){
            return <h1 style={{ color: 'red' }}>{this.state.error}</h1>;
        }
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
