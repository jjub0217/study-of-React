import React from 'react';// <- "React라는 변수에, JSX를 사용한 내용을 담겠다."


function App() {
  return   (
  <div>
    <h1>Hello</h1>
  </div>
  )
  // return <div className= "App" /> 
  // <div>Hello!</div> // <- 리턴값이 한줄일때는 리턴 밑에 줄에 쓰면 안됨. 
}

export default App; // <- 이렇게 하면 APP 이라는 것(함수)를 다른 파일에서 똑같이 APP 이라는 이름으로, APP 함수를 사용할수 있다.
