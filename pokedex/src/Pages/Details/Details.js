import React from 'react';
import MainPowerList from '../../Components/MainPowerList';
import PowerList from '../../Components/PowerList';
import  {Box, Container, LeftCard, MiddleCard, RightTopCard, RightCard} from './styled'


function Details() {
  return (
  <Container>
    <Box>
      <LeftCard>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt='bulbasaur'/>              
      </LeftCard>
      <LeftCard>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png" alt='bulbasaur'/>  
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
        <p>grass</p>
        <p>grass</p>
      </RightTopCard>

      <RightCard>
        <h2>Principais Poderes</h2>
        <MainPowerList></MainPowerList>
      </RightCard>
    </Box>
  </Container> 
  );
}

export default Details;
