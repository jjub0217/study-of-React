import React from 'react';
import { Link } from 'react-router-dom';
import  './Navigation.css';



function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            {/* └> 주의사항!! Link to 라는 컴포넌트 는, 반드시 App 컴포넌트에 있는 HashRouter 컴포넌트 안에 있어야 한다. */}
            
            {/* <Link to={{pathname: '/about', state:{fromNavigation: true}}}>About</Link> */}
            {/* └> Navigation 컴포넌트 안으로, route props 에 전달된 객체 데이터가 들어오고, 
                   전달되어 들어온 데이터 안에 pathname 과 state 라는 프로퍼티 키를, 디스트럭처링 할당으로 가져왔다. 
                   그리고, pathname 이라는 프로퍼티 키의 값을, /about 이라고 변경, 그리고 state 라는 프로퍼티 키의 값을 
                   fromNavigation */}
        </div>
    )
}

export default Navigation;