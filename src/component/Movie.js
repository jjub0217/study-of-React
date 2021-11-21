/* eslint-disable no-lone-blocks */
import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';


function Movie({title, year, summary, poster, genres}){
    return (
    <div className="movie">
        <Link to={{pathname: '/movie-detail', state: { year, title, summary, poster, genres}}}>
            {/* └> Home 컴포넌트에 있는 Movie 컴포넌트로부터 받아온 props 의 정보들이(id, year, title, summary, poster, genres), 
                   이 Movie 함수 컴포넌트에 전달되어졌다.  */}
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">{genres.map((genre, i)=>{
                    return <li key={i} className="movie__genres">{genre}</li>
                    // eslint-disable-next-line no-unreachable
                    {/* └> API 가 장르에는 고유한 id를 부여하지 않도록 만들어져있기 때문에, 고유한 id 를 부여해주기 위해 
                           인덱스를 활용하였다. */}
                })}
                </ul>
                <p className="movie__summary">{summary.slice(0, 180)}...</p>
                {/* └> 시놉시스 글자를 180자로 제한하고 싶다. : 인덱스 0 부터, 인덱스 180 바로 전까지(179) 잘라서 들어올려서 복사.*/}
            </div>
        </Link>
    </div>
    )  
}

Movie.propTypes = {
    // id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    // poster : 영화 포스터 이미지 주소
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default Movie;