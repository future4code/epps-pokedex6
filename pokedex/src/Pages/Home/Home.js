import React, {useState, useEffect, useContext} from 'react';
import Cards from '../../Components/Card/Card';
import { HomeContainer } from '../Home/styled';
import axios from 'axios'
import GlobalStateContext from '../../Global/Contexts/GlobalStateContext'

function Home() {
  const { states, setters, requests } = useContext(GlobalStateContext)

  useEffect(() => {
    requests.getPokemon()
    setters.setPage("home")
  }, [])

   useEffect(() => {
    requests.getPokeData()
  }, [states.pokeList])

  return (
    <HomeContainer>
      {states.pokeData && states.pokeData.map((pokemon) => {
        return(
          <Cards 
          pokemon={pokemon}
          key={pokemon.name}
          />
        )})}
    </HomeContainer>
  );
}

export default Home;

