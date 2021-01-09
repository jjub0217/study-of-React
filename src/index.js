import React from 'react'; // <- "JSX를 사용한 리액트" 
import ReactDOM from 'react-dom'; // <- "react-dom 라는 변수에, ReactDom 이라는 라이브러리를 담겠다."
                                  // <- reactDOM : 만든 컴포넌트를 리얼돔에 실제로 그리는 역할을 하는 라이브러리
import App from './App'; // <- " App.js에 있는 것(함수 컴포넌트)에 담긴, App 라는 이름으로 된 함수를 가져오겠다."


ReactDOM.render(// <- ReactDOM : 뷰에 그리는 역할을 하는 라이브러리
  <App />,//<- root 라는 div 안에 App 이라는 함수를 넣겠다. 
  document.getElementById('root')//<- index.html 의 root 라는걸 id 로 가지고 있는 돔요소를 가지고 온다.
); 
// └> id가 root 인 요소에, App 함수를  그린다.

                               