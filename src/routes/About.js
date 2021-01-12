import React from 'react';
import './About.css';

function About(props) {
    console.log(props); // <- { history: {…}, location: {…}, match: {…}, staticContext: undefined }
    // return <span>리액트 쌩초보 주현이의 리액트로 만드는 영화 앱 어플리케이션</span>
    return (
        <div className="about__container">
            <span>"리액트 쌩초보 주현이가, 리액트로 만드는 영화 평점 웹 어플리케이션"</span>
            <span> - 강주현</span>
        </div>
    )
}



export default About; 