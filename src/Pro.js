import React, { Component } from 'react'
import './App.css'
export default class Pro extends Component {

    state={
        time:0
    }

    componentDidMount(){
        setInterval(() =>{
            this.setState({
                time: this.state.time +1
            })

        },1000)
    }
  render() {
    return (
      <div>
<h1>{this.props.person.fullName}</h1>
<h2>{this.props.person.bio}</h2>
<h2>{this.props.person.profession}</h2>
<h2>{this.state.time}</h2>
<img src={this.props.person.img}/>

      </div>
    )
  }
}
