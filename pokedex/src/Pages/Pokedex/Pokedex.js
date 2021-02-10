import React from 'react';
import Cards from '../../Components/Card/Card';
import { PokedexContainer } from '../Pokedex/styled';


function Pokedex() {
  return (
    <PokedexContainer>
      {<Cards/> === null ? <Cards/> : <div>Sem pokemons na pokedex</div>}
    </PokedexContainer>
  )
}

export default Pokedex;
