import React, {useEffect, useContext} from 'react';
import Cards from '../../Components/Card/Card';
import { HomeContainer } from '../Home/styled';
import GlobalStateContext from '../../Global/Contexts/GlobalStateContext'

function Home() {
  const { states, setters, requests } = useContext(GlobalStateContext)

  useEffect(() => {
    setters.setPage("home")
  }, [])
  
  return (
    <HomeContainer>
      {states.pokeData.map((pokemon) => {
        return(
          <Cards 
          pokemon={pokemon}
          id = {pokemon.id}
          key={pokemon.name}
          />
        )})}
    </HomeContainer>
  );
}

export default Home;

