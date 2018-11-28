import React from 'react'
import PropTypes from 'prop-types'

class IterationSampl extends React.Component {

  static defaultProps = {
    names:["눈사람", "얼음", "눈", "바람"],
    name:""
  }

  static propTypes = {
    names:PropTypes.array,
    name:PropTypes.string
  }

  state = {
    names:this.props.names,
    name:this.props.name
  }

  handleKeyUp = (e) => {
    if(e.key === "Enter") {
      this.handleInsert();
    }
  }

  handleCange = (e) => {
    this.setState({
      name:e.target.value
    });
  }

  handleInsert = () => {
    this.setState({
      names:this.state.names.concat(this.state.name),
      name:""
    });
  }

  handleRemove = (index) => {
    const {names} = this.state;
    this.setState({
      names:names.filter((item,i) => i!==index)
      // names:[
        // ...names.slice(0,index),
        // ...names.slice(index+1,names.length)
      // ]
    })
  }

  render () {
    const nameList = this.state.names.map(
      (name, index) => (<li
        key={index}
        onDoubleClick={() => this.handleRemove(index)}
        >{name}</li>)
    );

    return (
      <div>
        <input
          onKeyUp={this.handleKeyUp}
          onChange={this.handleCange}
          value={this.state.name}
          />
        <button onClick={this.handleInsert}
          >추가</button>
        <ul>
          {nameList}
        </ul>
      </div>
    )
  }
}

export default IterationSampl;
