import React from'react'
import ReactDOM from 'react-dom'

class RegistrationForm extends React.Component {
  render(){
    return (
      <form>
        <label>Input</label>
        <input type="text"></input>
        <label>Password</label>
        <input type="password"></input>
        <button type="submit" value="Submit">Submit</button>
      </form>
    )
  }
}

export default RegistrationForm;
