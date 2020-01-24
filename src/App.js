import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      number: this.props.init
    };

    console.log(this.props);
  }

  onClickHandle = () => {
    this.setState((preStates, preProps) => {
    return { number: preStates.number + 1}}, 
    () => {
      console.log(this.state.number);
    } );
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.number}
          </p>
          <button onClick={this.onClickHandle}>Add</button>
        </header>
      </div>
    );
  }
}

export default App;
