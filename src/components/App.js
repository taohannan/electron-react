import '../assets/css/App.css';
import React, { Component } from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Big Day Countdown</h1>
        <div className="App">
        <div >
          <h1 className="App-title "> Weekend in Paris</h1>
        </div>

        <div className="Clock">
          <span className="Clock-time">30</span>
          <span className="Clock-desc">days</span>
        </div>
        <div className="Clock">
          <span className="Clock-time">30</span>
          <span className="Clock-desc">hours</span>
        </div>
        <div className="Clock">
        <span className="Clock-time">30</span>
        <span className="Clock-desc">time</span>
      </div>
      <div className="Clock">
      <span className="Clock-time">30</span>
      <span className="Clock-desc">minutes</span>
    </div>


      </div>
      <div className="App">
      <div >
        <h1 className="App-title "> Weekend in KL</h1>
      </div>

      <div className="Clock">
        <span className="Clock-time">30</span>
        <span className="Clock-desc">days</span>
      </div>
      <div className="Clock">
        <span className="Clock-time">30</span>
        <span className="Clock-desc">hours</span>
      </div>
      <div className="Clock">
      <span className="Clock-time">30</span>
      <span className="Clock-desc">time</span>
    </div>
    <div className="Clock">
    <span className="Clock-time">30</span>
    <span className="Clock-desc">minutes</span>
  </div>


    </div>
    <div className="App">
    <div >
      <h1 className="App-title "> Weekend in Bangkok</h1>
    </div>

    <div className="Clock">
      <span className="Clock-time">30</span>
      <span className="Clock-desc">days</span>
    </div>
    <div className="Clock">
      <span className="Clock-time">30</span>
      <span className="Clock-desc">hours</span>
    </div>
    <div className="Clock">
    <span className="Clock-time">30</span>
    <span className="Clock-desc">time</span>
  </div>
  <div className="Clock">
  <span className="Clock-time">30</span>
  <span className="Clock-desc">minutes</span>
</div>


  </div>
      </div>
    );
  }
}

export default App;
