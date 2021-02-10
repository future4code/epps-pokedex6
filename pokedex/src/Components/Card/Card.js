import React from 'react';
import AddToPokedex from '../Buttons/AddToPokedex';
import RemoveToPokedex from '../Buttons/RemoveToPokedex'
import GoToDetails from '../Buttons/GoToDetails'
import { ContainerCard, ImageCard, ButtonContainer } from '../Card/styled'

function Cards(props) {
   
  return (
    <>
        {props.pokemon ? <ContainerCard key={props.pokemon.name}>

          <ImageCard src={props.pokemon.sprites.front_default}/>
            <p>{props.pokemon.name}</p>
          <ButtonContainer>
              <AddToPokedex />
              <RemoveToPokedex />
              <GoToDetails 
                pokemon = {props.pokemon.name}
              />
          </ButtonContainer>

        </ContainerCard> : <div>Sem pokemons na pokedex</div>}
    </>
  );
}

export default Cards;
