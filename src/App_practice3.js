/* eslint-disable jsx-a11y/alt-text */
import React from 'react';// <- <- "JSX를 사용한 리액트"
import PropTypes from 'prop-types';// <- <- "JSX를 사용한 리액트"



function Food({name, picture, rating, size}) { // <- 1번 경우 : 배열의 값들만 추출
                                // <- 2번 경우 : 진짜 Food 의 props 값들과, picture 값들만 추출

  console.log(name);  // ["Kimchi", "Samgiopsal", "Bibimbap", "Doncasu", "Kimbap"]
  console.log({name}); // { name: ["Kimchi", "Samgiopsal", "Bibimbap", "Doncasu", "Kimbap"] }

  return (
    <div>
      <h2>I Like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  )
  
}

const foodLike = [  // <- 가짜서버에서 받아오는 데이터들이 저장되는 곳 : 처음엔 빈배열 이었음
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://cdn.pixabay.com/photo/2019/03/09/15/12/kimchi-4044268_1280.jpg',
    // size: '100px',
    rating: 5,
  },

  {
    id: 2,
    name: 'Samgiopsal',
    image: 'https://i.pinimg.com/originals/c4/c5/d5/c4c5d5d428634b5ddf1aabd9f98faf60.jpg',
    rating: 2,
  },

  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://mblogthumb-phinf.pstatic.net/MjAxODAxMTJfMjYx/MDAxNTE1NzU4NzAwNTg4.Lsx-fZIBLlgOhZ2-qwhtbHJK_FOeO31_atllv97UZtsg.31b2NDz23pXmeX-oQBx56rkMg_yQuASMVRZzaYq54UIg.JPEG.mh950621/b-48f.jpg?type=w800',
    rating: 4,
  },

  {
    id: 4,
    name: 'Doncasu',
    image: 'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002274/img/basic/a0002274_main.jpg?20200626102550&q=80&rw=750&rh=536',
    rating: 4,
  },

  {
    id: 5,
    name: 'Kimbap',
    image: 'https://homecuisine.co.kr/files/attach/images/140/001/083/558d170258752df2dd76bef00861497f.JPG',
    rating: 4,
  },

];




function App() {
  return   (
  <div>
    {/* {foodLike.map(renderFood)} */}
    {foodLike.map(food => (<Food name = {food.name} picture={food.image} key={food.id} rating={food.rating} size={food.size}/>))}
  </div>
  )

}


Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}


export default App; // <- 이렇게 하면 APP 이라는 것(함수)를 다른 파일에서 똑같이 APP 이라는 이름으로, APP 함수를 사용할수 있다.
