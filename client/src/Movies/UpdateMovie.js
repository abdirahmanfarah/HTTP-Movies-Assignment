import React, { useState, useEffect } from 'react';
import axios from 'axios';

// const initialMovie = {
  // title: "",
  // director: "",
  // metascore: null,
  // stars: []
// }

const UpdateMovie = props => {
    console.log(props);
  const [movie, setMovie] = useState({id:props.match.params.id});
  
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
      .then(res => setMovie(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleChange = e => {
    setMovie({
      ...movie, [e.target.name]: e.target.value
    })
  };
  
 const handleSubmit = e => {
    e.preventDefault();
    const editingMovie = {
      ...movie,
      stars: movie.stars.split(', ')
    }
    axios
      .put(`http://localhost:5000/api/movies/${movie.id}`, editingMovie)
      .then(res => {
        setMovie(res.data);
        document.querySelector('form').reset();
        props.history.push(`/movies/${movie.id}`)
      })
      .catch(err =>  console.log(err))
  }

  return (
      <div>
          <h2>Update Movie</h2>
          <form onSubmit={handleSubmit}>
            <input 
              type="text"
              name="title"
              placeholder="title"
              value={movie.title}
              onChange={handleChange}
            />
            
            <input 
              type="text"
              name="director"
              placeholder="director"
              value={movie.director}
              onChange={handleChange}
            />

            <input 
              type="text"
              name="metascore"
              placeholder="metascore"
              value={movie.metascore}
              onChange={handleChange}
            />

            <input 
              type="text"
              name="stars"
              placeholder="stars"
              value={movie.stars}
              onChange={handleChange}
            />
            
            <button>Update</button>
          </form>
      </div>
  )
}

export default UpdateMovie;
