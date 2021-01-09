import React from 'react';// <- <- "JSX를 사용한 리액트"
// import Potato from './Potato'; //  ./ : 현재 파일이 있는 경로에 있는 폴더
// └> " Potato.js에 있는 것(함수 컴포넌트)에 담긴, Potato 라는 이름으로 된 함수를 가져오겠다."


/* function Food(pprops) {
   console.log(pprops); // <- 인수에 뭘 넣든, 그 인수는, 해당 컴포넌트의 props 내용들을 받는다.
   console.log(typeof pprops); // <- object
   console.log(Array.isArray(pprops));// <- false
   // console.log(Array.isArray(pprops.papapapa));// <- true
   return (
   <h1>I like {pprops.favorite}</h1>
   )
 } */

function Food({favorite}) { // <- 인수에 뭘 넣든, 그 인수는, 해당 컴포넌트의 props 내용들을 받는다.

  return <h1>I like {favorite}</h1> // <- props 는 객체이기 때문에, props 의 객체의 프로퍼티 키의 값을 가져오려고 디스트럭처링 할당을 사용
  
}


function App() {
  return   (
  <div>
    <h1>Hello</h1>
    <Food favorite="kimchi" />
    <Food favorite="ramen" />
    <Food favorite="samgiopsal" />
    <Food favorite="chukumi" />
  </div>
  )

  // return <div className= "App" /> 
  // <div>Hello!</div> // <- 리턴값이 한줄일때는 리턴 밑에 줄에 쓰면 안됨. 
}

export default App; // <- 이렇게 하면 APP 이라는 것(함수)를 다른 파일에서 똑같이 APP 이라는 이름으로, APP 함수를 사용할수 있다.
