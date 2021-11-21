/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';// <- <- "JSX를 사용한 리액트"
import  './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';//<- 라우터 다 만든 다음에, Home 컴포넌트 보이게 재수정하는것임.
import About from './routes/About';
import Navigation from './component/Navigation';
import Detail from './routes/Detail';




function App() {
  return (
  <HashRouter>

    <Navigation />
    <Route path="/" exact={true} component={Home} />{/* <- Route component : 특정 Home 이란 url 페이지 컴포넌트를 불러온다.*/}
                                                    {/* <- url 에 / 라고 적은것들만 Home 페이지로 이동시켜주는 라우터*/}
    <Route path="/about" exact={true} component={About} />{/* <- Route component :특정 About 이란 url 페이지 컴포넌트를 불러온다.*/}
                                                          {/* <- url 에 /about 라고 적은것들만 about 페이지로 이동시켜주는 라우터*/}
    {/* <Route path="/about"> */}
      {/* <h1>About</h1>   */}
    {/* </Route> */}
    

    <Route path="/movie-detail" component={Detail} />
  </HashRouter>
  )
}

export default App; // <- 이렇게 하면 APP 이라는 것(함수)를 다른 파일에서 똑같이 APP 이라는 이름으로, APP 함수를 사용할수 있다.
