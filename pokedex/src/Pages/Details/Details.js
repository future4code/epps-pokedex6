import React, { useEffect, useState, useContext} from 'react';
import MainPowerList from '../../Components/Lists/MainPowerList';
import PowerList from '../../Components/Lists/PowerList';
import  {Box, Container, LeftCard, MiddleCard, RightTopCard, RightCard} from './styled'
import Card from '../../Components/Card/Card'
import axios from 'axios'
import GlobalStateContext from '../../Global/Contexts/GlobalStateContext'

function Details() {
  
  const { states, setters, requests } = useContext(GlobalStateContext);

  useEffect(() => {
   states.pokeDetails && requests.getPokeDataDetails()
  }, [states.pokeDetails])

  console.log(states.pokeDataDetails)

if(states.pokeDataDetails) {
      return (
        <Container>
        <h1>{states.pokeDataDetails.name}</h1>
          <Box>
            <LeftCard>
              <img src={states.pokeDataDetails.sprites.front_default} alt={states.pokeDataDetails.name}/>              
            </LeftCard>
            <LeftCard>
              <img src={states.pokeDataDetails.sprites.back_default} alt={states.pokeDataDetails.name}/>  
            </LeftCard>
          </Box>
          <Box>
            <MiddleCard>
              <h2>Poderes</h2>
              <PowerList/>
            </MiddleCard>
          </Box>
          <Box>
            <RightTopCard>
            {states.pokeDataDetails.types && states.pokeDataDetails.types.map((type) => {
                return(
                  <p>{type.type.name}</p>
                )
            })}
            </RightTopCard>

            <RightCard>
              <h2>Principais Poderes</h2>
              <MainPowerList/>
            </RightCard>
          </Box>
        </Container> 
        )
} else {
  return(
// Aqui pode ter um loading personalizado
  <div>Carregando...</div>
  )
}
  
}

export default Details;
