import React from 'react';
import './App.css';

class Counter extends React.Component {
  render() {
    return <div className={this.props.className}>{this.props.count}</div>
  }
}

class Button extends React.Component {
  render() {
      const {label } = this.props;

      return (
          <button onClick={this.props.onClick} className={this.props.className}>
              {label}
          </button>
      );
  }
}

class Text extends React.Component {
  render() {
      return (
          <div className={this.props.className}>{this.props.count >= 10 ? "You reached 10!" : null}</div>
      );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state =  {
      count: 0,
      isCountShown: false,
      buttonLabel: "Hide"
    }
    this.addCount = this.addCount.bind(this);
    this.reduceCount = this.reduceCount.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
  }

  addCount() {
    this.setState((prevState, { count }) => ({
      count: prevState.count + 1
    }));
  }

  reduceCount() {
    this.setState((prevState, { count }) => ({
      count: prevState.count - 1
    }));
  }

  toggleClass() {
    const currentState = this.state.isCountShown;
    this.setState({ 
      isCountShown: !currentState
    });
  }

  render() {
    console.log(this.state.count);
    return (
      <React.Fragment>
        <Counter className={this.state.isCountShown ? 'counterNone': 'counter'}  count={this.state.count}  />
        <div className="buttons">
          <Button className="buttonPlus" label="+" onClick={this.addCount}/>
          <Button className="buttonMinus" label="-" onClick={this.reduceCount} />
          <Button className="counterShown" label={this.state.isCountShown ? "Show" : "Hide"} onClick={this.toggleClass} />
        </div>
        <Text className="textMessage" count={this.state.count} />
      </React.Fragment>
    );
  }
}

export default App;
