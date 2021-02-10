import React, {useContext, useEffect} from 'react';
import Cards from '../../Components/Card/Card';
import { PokedexContainer } from '../Pokedex/styled';
import GlobalStateContext from '../../Global/Contexts/GlobalStateContext'

function Pokedex() {
  const { states, setters, requests } = useContext(GlobalStateContext);

   useEffect(() => {
    requests.getPokedexData()
  }, [states.pokedex])

console.log(states.pokedexData)
  return (
    <PokedexContainer>

      {states.pokedexData && states.pokedexData.map((pokemon) => {
        {console.log(pokemon)}
        return(
          <Cards 
          pokemon={pokemon}
          key={pokemon.name}
          />
        )})}
        

      
    </PokedexContainer>
  )
}

export default Pokedex;
