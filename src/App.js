import React from 'react';
import PropTypes from 'prop-types'

const foodILike = [
  {
    key: 1,
    name: 'Kimchi',
    image: 'https://www.seriouseats.com/thmb/IY_PexlCt12GO7PmS_0NskjtAFM=/1125x1125/smart/filters:no_upscale()/20210527-baechu-kimchi-vicky-wasik-seriouseats-seriouseats-3-18a2d6d7d1d74a7a82cb13ed350218be.jpg',
    rating: 5.2,
  },
  {
    key: 2,
    name: 'Samgyeopsal',
    image: 'https://www.honestfoodtalks.com/wp-content/uploads/2022/04/Samgyeopsal-recipe-at-home.jpg',
    rating: 4.5,
  },
  {
    key: 3,
    name: 'Bibimbap',
    image: 'https://health.chosun.com/site/data/img_dir/2021/01/27/2021012702508_0.jpg',
    rating: 3.7,
  },
  {
    key: 4,
    name: 'Doncasu',
    image: 'https://t1.daumcdn.net/cfile/tistory/1807873A4DC691803A',
    rating: 2.6,
  },
  {
    key: 5,
    name: 'Kimbap',
    image: 'https://www.koreanbapsang.com/wp-content/uploads/2018/09/DSC_0421.jpg',
    rating: 1.9,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

function App() {
  return (
    <div>
      {foodILike.map(dish => {
        return <Food key={dish.key} name={dish.name} picture={dish.image} rating={dish.rating} />
      })}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
}

export default App;