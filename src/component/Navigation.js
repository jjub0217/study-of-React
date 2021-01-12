import React from 'react';
import { Link } from 'react-router-dom';
import  './Navigation.css';



function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            {/* └> 주의사항!! Link to 라는 prop 은 반드시 App 컴포넌트에 있는 HashRouter 컴포넌트 안에 있어야 한다. */}
            
            {/* <Link to={{pathname: '/about', state:{fromNavigation: true}}}>About</Link> */}
        </div>
    )
}

export default Navigation;