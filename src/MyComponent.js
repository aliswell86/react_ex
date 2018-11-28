import React from 'react'
import PropTypes from 'prop-types'

class MyComponent extends React.Component {

  static defaultProps = {
    name:"기본 이름",
    age:4
  }

  static propType = {
    name:PropTypes.string,
    age:PropTypes.number.isRequired
  }

  state = {
    number:0
  }

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     number:0
  //   }
  // }

  render () {
    return (
      <div>
        <p>하이 {this.props.name}</p>
        <p>저는 {this.props.age} 살입니다.</p>
        <p>숫자 {this.state.number}</p>
        <button onClick={() => {
            this.setState({
              number:this.state.number + 1
            })
        }}>더하기</button>
      </div>
    )
  }
}



export default MyComponent;
