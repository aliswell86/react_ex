import React from 'react'
// import PropTypes from 'prop-types'

class EventPractice extends React.Component {
  state = {
    message:"",
    username:""
  }

  inputKeyUp = (e) => {
    if(e.key === "Enter") {
      this.buttonClick();
    }
  }

  inputChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    });
  }

  buttonClick = () => {
    alert(this.state.username + " : " + this.state.message);
    this.setState({
      message:"",
      username:""
    });
  }

  render () {
    return (
      <div>
        <h1>이벤트 예제</h1>
        <input
          type="text"
          name="message"
          placeholder="메세지"
          value={this.state.message}
          onKeyUp={this.inputKeyUp}
          onChange={this.inputChange}
        />
        <br/>
        <input
          type="text"
          name="username"
          placeholder="메세지"
          value={this.state.username}
          onKeyUp={this.inputKeyUp}
          onChange={this.inputChange}
        />

        <button
          onClick={this.buttonClick}
        >버튼</button>

      </div>
    )
  }
}

export default EventPractice;
