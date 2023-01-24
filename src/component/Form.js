import React, { Component,useState } from 'react'
import { Link } from 'react-router-dom'

class Form extends Component {
    constructor(props) {
      super(props)
        
      this.state = {
         email:"",
         password:"",
         option:'student'
      }
    }
    
    email=(event)=>{
       this.setState({
        email:event.target.value
       }) 
    }
    password=(event)=>{
        this.setState({
         password:event.target.value
        }) 
     }
    select=(event)=>{
        this.setState({
            option:event.target.value
        })
    }
    
    handleSubmit=(event)=>{
        let Credentials={
            email: this.state.email,
            password:this.state.password
        }
        fetch("http://localhost:3000/v1/staff/login", {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(Credentials)
        })
        .then(response => response.json())
        .then(data => {
            <Link to="/ips"/>
        })
        .catch(error => {
            console.error(error)
        });
        event.preventDefault()
    }


  render() {
    const {email,password,option}=this.state
    return(
        <form onSubmit={this.handleSubmit}>
            <div>
            <label>Email</label>
            <input type="text" value={email} onChange={this.email}/>
            <label>password</label>
            <input type="text" value={password} onChange={this.password}/>
            <select value={option} onChange={this.select}>
                <option>student</option>
                <option>admin</option>
                <option>staff</option>
            </select>
            <button type='submit'>Login</button>
            </div>
        </form>
    )
  }
}

export default Form
