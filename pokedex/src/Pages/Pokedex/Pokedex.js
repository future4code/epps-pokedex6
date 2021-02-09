import React from 'react';
import Cards from '../../Components/Card/Card';
import {PokedexContainer }from '../Pokedex/styled';
import RemoveToPokedex from '../../Components/Buttons/RemoveToPokedex'

function Pokedex() {
  return (
    <PokedexContainer>
      <Cards>
      <RemoveToPokedex/>
      </Cards>
      
         
    </PokedexContainer>
  );
}

export default Pokedex;
