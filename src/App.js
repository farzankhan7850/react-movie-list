import React, { useState } from 'react';
import './App.css';
import ListOfMovies from './components/ListOfMovies.js';
import Header from './components/Header';

const moviesDB = {

  action: [
    { name: 'Mission Impossible', rating: " 4.5/5" },
    { name: 'Avenger Civil War', rating: ' 4/5 ' }
  ],
  adventure: [
    { name: 'Lost City', rating: " 4.5/5" },
    { name: 'Journey to Mysterious Island', rating: ' 4.7/5 ' }
  ],
  comedy: [
    { name: 'Mr. Bean', rating: " 4.9/5" },
    { name: 'Golmaal', rating: ' 4.3/5 ' }
  ],
  horror: [
    { name: 'Conjuring', rating: " 3.9/5" },
    { name: 'Bhool bhulaiya', rating: " 3.9/5" },
    { name: 'IT', rating: ' 4.8/5 ' }
  ],
  Suspense: [
    { name: 'Raaz', rating: ' 4.8/5 ' },
    { name: 'Ek Villain', rating: ' 3/5 ' }
  ]
}


function App() {

  const [movie, setMovie] = useState('adventure');
  function setCategory(e) {
    setMovie(e)
  }


  return (
    <div className='container mt-5'>

      <Header setCategory={setCategory} dB={moviesDB} />
      <ListOfMovies dB={moviesDB} movie={movie} />

    </div>
  );
}

export default App;
