import React, { Component } from 'react';
// import MyComponent from './MyComponent.js';
// import EventPractice from './EventPractice.js';
// import ValidationSample from './ValidationSample.js';
// import ScrollBox from './ScrollBox.js';
import IterationSampl from './IterationSampl.js';
import './App.css';

class App extends Component {
  render() {
    return (
      // <MyComponent name="Name" age={13} />
      // <EventPractice />
      // <div>
      //   <ScrollBox ref={(ref) => this.scrollBox = ref}/>
      //   <button onClick={() => this.scrollBox.scrollToBottom()}>맨밑으로</button>
      // </div>
      <IterationSampl />
    );
  }
}

export default App;
