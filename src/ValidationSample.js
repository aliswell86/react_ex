import React from 'react'
import PropTypes from 'prop-types'

class ValidationSample extends React.Component {
  state = {
    clicked:false,
    password:"",
    validated:false
  }

  handleChange = (e) => {
    this.setState({
      password:e.target.value
    });
  }

  handleKeyUp = (e) => {
    if(e.key === "Enter") {
      this.handleButtonClick();
    }
  }

  handleButtonClick = () => {
    this.setState({
      clicked:true,
      validated:this.state.password === "0000"
    })
    this.input.focus();
  }

  render () {
    return (
      <div>
        <input ref={(ref) => {this.input=ref}}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          className={this.state.clicked ? (this.state.validated ? "sucess" : "failure") : ""}
        />
        <button onClick={this.handleButtonClick}>검증</button>
      </div>
    )
  }
}

export default ValidationSample;
