import React, {useContext, useState, useEffect} from 'react';
import AddToPokedex from '../Buttons/AddToPokedex';
import RemoveToPokedex from '../Buttons/RemoveToPokedex'
import GoToDetails from '../Buttons/GoToDetails'
import {ContainerCard, ImageCard, ButtonContainer } from '../Card/styled'
import GlobalStateContext from '../../Global/Contexts/GlobalStateContext'
import axios from 'axios'

function Cards(props) {
  
  const { states, setters, requests } = useContext(GlobalStateContext);
  const [pokeColor, setPokeColor] = useState();
  
  const getColor = () => { 
    const id = props.pokemon.id
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon-color/${id}/`
      )
      .then(res => {
        setPokeColor(res.data.name)
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    getColor()
  }, []);

    if(states.page === "home"){
        
        return (
        <div>
          {props.pokemon ? <ContainerCard key={props.pokemon.name} style = {{backgroundColor: `${pokeColor}`}}>
            <ImageCard src={props.pokemon.sprites.front_default}/>
            <ButtonContainer>
              <AddToPokedex pokemon={props.pokemon}/>
              <GoToDetails pokemon={props.pokemon}/>
            </ButtonContainer>
          </ContainerCard> : null}
        </div>
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
