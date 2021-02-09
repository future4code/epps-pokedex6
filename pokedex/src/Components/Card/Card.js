import React, {useEffect, useState} from 'react';
import { goToDetails } from '../../Router/Coordinator';
import AddToPokedex from '../Buttons/AddToPokedex';
import RemoveToPokedex from '../Buttons/RemoveToPokedex'
import { ContainerCard, ImageCard, ButtonContainer, Button } from '../Card/styled'
import { useHistory } from 'react-router-dom'
import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/pokemon/?limit=20";

function Cards() {

  const history = useHistory()

  const [pokeList, setPokeList] = useState([])
  const [pokeData, setPokeData] = useState ([])

  const pokeUrl = []
  
  const getPokemon = () => { 
    axios
      .get(baseUrl)
      .then(response => {
        setPokeList(response.data.results)
      })
      .catch(err => {
        console.log(err)
      });
  };


  useEffect(() => {
    getPokemon()
  }, [])

  useEffect(() => {

    pokeList.map((pokemon) => {
      
      axios
          .get(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
          )
          .then(res => {
            pokeUrl.push(res.data)
            if (pokeUrl.length === 20){
              setPokeData(pokeUrl)}
          })
          .catch(err => {
            console.log(err)
          });
    })
  },[pokeList])

  return (
      <>
        { pokeData && pokeData.map((pokemon) => {
          return(
            <ContainerCard 
            key={pokemon.name}>
              <ImageCard src={pokemon.sprites.front_default}></ImageCard>
              <p>{pokemon.name}</p>
              <ButtonContainer>
                <AddToPokedex />
                <RemoveToPokedex />
              <Button onClick={() => goToDetails(history)}>Ver Detalhes</Button>
              </ButtonContainer>
            </ContainerCard>
          )
        }
        )}
      </>
  );
}

export default Cards;
