import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialMovie = {
  title: '',
  director: '',
  metascore: ''
  // stars: ''
}

const UpdateMovie = props => {
  const [movie, setMovie ] = useState(initialMovie);
  console.log(props);
  

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .put(`http://localhost:3000/update-movie/{movie.id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err.response));
  };

  return (
    <div>
      <h2>Update Movie</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          name='title'
          // onChange={changeHandler}
          placeholder="Title"
          value={movie.title}
        />
        <input 
          type='text'
          name='director'
          // onChange={changeHandler}
          placeholder="Director"
          value={movie.director}
        />
        <input 
          type='text'
          name='metascore'
          // onChange={changeHandler}
          placeholder="Metascore"
          value={movie.metascore}
        />
        {/* <input 
          type='text'
          name='title'
          onChange={changeHandler}
          placeholder="Title"
          value={movie.title}
        /> */}
      </form>
      
    

    </div>
  )
}

export default UpdateMovie;