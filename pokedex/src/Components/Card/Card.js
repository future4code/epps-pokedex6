import React, {useContext} from 'react';
import AddToPokedex from '../Buttons/AddToPokedex';
import RemoveToPokedex from '../Buttons/RemoveToPokedex'
import GoToDetails from '../Buttons/GoToDetails'
import { ContainerCard, ImageCard, ButtonContainer } from '../Card/styled'
import GlobalStateContext from '../../Global/Contexts/GlobalStateContext'

function Cards(props) {
  
  const { states, setters, requests } = useContext(GlobalStateContext);

    if(states.page === "home"){
        
        return (
        <>
          {props.pokemon ? <ContainerCard key={props.pokemon.name}>

            <ImageCard src={props.pokemon.sprites.front_default}/>
              <p>{props.pokemon.name}</p>
            <ButtonContainer>
              <AddToPokedex pokemon={props.pokemon}/>
              <GoToDetails pokemon={props.pokemon}/>
            </ButtonContainer>

          </ContainerCard> : null}
        </>
        )
    } else if(states.page === "pokedex") {
        return (
        <>
          {props.pokemon ? <ContainerCard key={props.pokemon.name}>

            <ImageCard src={props.pokemon.sprites.front_default}/>
              <p>{props.pokemon.name}</p>
            <ButtonContainer>
              <RemoveToPokedex pokemon={props.pokemon}/>
              <GoToDetails pokemon={props.pokemon}/>
            </ButtonContainer>

          </ContainerCard> : null}
        </>
        )
    } else {
      return (
        <div>carregando...</div>
      )
    }
}

export default Cards;
