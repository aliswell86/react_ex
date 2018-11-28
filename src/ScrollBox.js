import React from 'react'
import PropTypes from 'prop-types'

class ScrollBox extends React.Component {

  scrollToBottom = () => {
    /* 비구조화 할당문법 (ES6)
    다음과 같은의미임.
    const scrollHeight = this.box.scrollHeight;
    const clientHeight = this.box.clientHeight;
    */
    const {scrollHeight, clientHeight} = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  }

  render () {

    const style = {
      border:"1px solid black",
      height:"300px",
      width:"300px",
      overflow:"auto",
      position:"realtive"
    };

    const innerStyle = {
      width:"100%",
      height:"650px",
      background:"linear-gradient(white, black)"
    }

    return (
      <div
        ref={(ref) => {this.box=ref}}
        style={style}>
        <div style={innerStyle} />
      </div>
    )
  }
}

export default ScrollBox;
