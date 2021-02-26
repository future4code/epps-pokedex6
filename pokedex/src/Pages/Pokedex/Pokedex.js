import React, {useContext, useEffect} from 'react';
import Cards from '../../Components/Card/Card';
import { PokedexContainer } from '../Pokedex/styled';
import GlobalStateContext from '../../Global/Contexts/GlobalStateContext'

function Pokedex() {
  const { states, setters, requests } = useContext(GlobalStateContext);

  useEffect(() => {
    setters.setPage("pokedex")
  },[])

  useEffect(() => {
    requests.getPokedexData()
  }, [states.pokedex])

  return (
    <PokedexContainer>

      {states.pokedexData && states.pokedexData.length > 0 && states.pokedexData.map((pokemon) => {
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
