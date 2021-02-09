import Router from './Router/Router'
import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151";

const App = props => {

  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    getPokemon();
  }, []);
  
  const getPokemon = () => { 
    axios
      .get(baseUrl)
      .then(response => {
        setPokeList(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    
    <Router
      Pokemon = {pokeList}
    />
    
    );
  }

export default App;