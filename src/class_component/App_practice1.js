/* eslint-disable jsx-a11y/alt-text */
import React from 'react';// <- <- "JSX를 사용한 리액트"


class App extends React.Component {
  
  state = {
    count: 0,
  }

  add = () => {
    // console.log('증가');
    // this.state.count = 1; // <- 이렇게 하면 state 의 값을 직접 변경하는 것이므로, 변경이 되지 않는다.
    // this.setState({count: this.state.count +1});
    this.setState(current => ( {count : current.count +1}));
    // └> current 라는 매개변수에, state 객체가 전달된다.
  }
  
  minus = () => {
    // console.log('감소');
    // this.state.count = -1; // <- 이렇게 하면 state 의 값을 직접 변경하는 것이므로, 변경이 되지 않는다.
    // this.setState({count: this.state.count -1});
    this.setState(current => ( {count : current.count -1}));
    // └> current 라는 매개변수에, state 객체가 전달된다.
  }


  render(){
    return (
    <div>
      <h1>I'm a class component</h1>
      <h2>The number is: {this.state.count}</h2>
      <button onClick={this.add}>Add</button> {/* <- Add 버튼을 누르면 state 의 count 값이 증가*/}
      <button onClick={this.minus}>Minus</button> {/* <- Minus 버튼을 누르면 state 의 count 값이 감소*/}
    </div>
    )
  } 
    
}


export default App; // <- 이렇게 하면 APP 이라는 것(함수)를 다른 파일에서 똑같이 APP 이라는 이름으로, APP 함수를 사용할수 있다.
