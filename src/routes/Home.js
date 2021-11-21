/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';// <- <- "JSX를 사용한 리액트"
import axios from 'axios';
import Movie from '../component/Movie';
import  './Home.css';

class Home extends React.Component {
   
  state = { // <- 앱 데이터 저장
    loading : true,
    movies: [], // <- 원래 빈 배열이었던, movies 프로퍼티의 값들에 데이터들을 저장할것이다.
  }
  
  getMovies = async () => {
    // const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    // └> axios.get 함수가 반환하는 값을, movies 라는 변수에 담았다.
    // console.log(movies);
    // console.log(movies.data.data.movies);

    // 위 코드를 디스트럭처링 할당을 쓰면 아래 코드처럼 된다.

    const {    
      data: // : movies -> data
        { 
          data: // : movies -> data -> data
         {movies}, // : movies -> data -> data -> movies
          // },} = await axios.get('https://yts-proxy.now.sh/list_movies.json');
          },} = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    // └> axios.get 해서 가져온 영화 앱('movies') 전체 데이터에서, -> data -> data -> movies 라는 프로퍼티 키의,
    //    우리가 정말 필요로하는 데이터 알맹이라는 프로터티 값을 가져왔다. 

    // this.setState(current => ({count: current.count + 1}))
    // └>current라는 매개변수에 state 객체가 담긴다. 
    //   state 객체의 count 라는 프로퍼티 키의 값에 +1 을 한 값으로 state 를 변경시키겠다
    
    // const { loading } = this.state 
    // └> state 객체에서 loading 이라는 프로퍼티 키의 값을, loading 이라는 변수에 담았다. 
    
    // this.setState({ loading : false })
    // └> loading 이라는 변수의 값을 false 로 바꾸겠다. 


    // this.setState({movies : movies}) 
    // └> state 객체에서, movies 라는 빈 배열을, 
    // axios.get 해서 가져온 영화 앱('movies') 전체 데이터에서, -> data -> data -> movies 라는 
    // 우리가 정말 필요로하는 데이터 알맹이라는 프로터티 값을 가져온것을 담은, 
    // 변수인, movies로 바꿀것이다. 

    this.setState({movies, loading:false})
    // this.setState({movies: movies}) = this.setState({ movies })
    // state 의 movies 의 빈 배열을 데이터 알맹이로 바꿀것이다. 
    // state 의 loading 의 값을 false 로 바꿀것이다. 
  }

  componentDidMount(){ // <- 여기서 앱을 로딩시켜야 한다. 
    //                        : 빈배열 movies 에서 알맹이 데이터인 movies로 바뀌는 getMovies 라는 함수 실행 
    
    // setTimeout(()=>{
    //   this.setState({loading: false})
    // }, 6000)
    
    // axios.get('https://yts-proxy.now.sh/list_movies.json')
    this.getMovies();

  }

  render(){
    const {loading, movies} = this.state; 
    // └> 'state 객체의, loading 과 movies 라는 프로퍼티 키의 값을, loading 과 movies 라는 변수에 담았다.
    console.log(movies); // <- 빈배열 에서, 리턴 후, 빈 배열이 데이터가 담긴 배열로 바뀐다. (20)[ {...}, {...}, {...}, {...}, {...} ]
    return (
      <section className="container">
        {/* {loading ? '로딩중...' : '로딩완료'} <- 로딩완료 부분에 앱 데이터를 출력시켜야 한다. */}
        {loading ? (<div className="loader">
                      <span className="loader__text>">로딩중...</span>
                    </div>
                    ) : 
                  (<div className="movies">{movies.map(movie => 
                      {
                        // console.log(movie); // 배열의 요소 개수만큼, movie 배열에 담긴, 데이터의 객체들이 반환된다.
                        return <Movie key= {movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} 
                        poster={movie.medium_cover_image} genres={movie.genres} 
                      />
                       }
                    )
                  }
                  </div>
                  )}
                  </section>
        )
  } 
    
}


export default Home; // <- 이렇게 하면 Home 이라는 것(함수)를 다른 파일에서 똑같이 APP 이라는 이름으로, APP 함수를 사용할수 있다.
