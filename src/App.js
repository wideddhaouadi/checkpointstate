import React, { Component } from 'react'
import Pro from './Pro'
import './App.css'

export default class App extends Component {
  constructor(props) {
  super(props)
  this.state = {
    fullName: "flenfouleni",
    bio : "autodidacte",
    profession:"moudir",
    img: "../1.jpeg",
    show : false
  }}
  click =() =>{
    this.setState({
      show : !this.state.show
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.click}>show</button>
        {
          this.state.show ? <Pro person={this.state}/> :null
        }


      </div>
    )
  }
}
