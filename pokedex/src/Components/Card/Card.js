import react from 'react';
import { goToDetails } from '../../Router/Coordinator';
import AddToPokedex from '../Buttons/AddToPokedex';
import RemoveToPokedex from '../Buttons/RemoveToPokedex'
import { ContainerCard,ImageCard, ButtonContainer,Button } from '../Card/styled'
import { useHistory } from 'react-router-dom'



function Cards() {

  const history = useHistory()

  return (

    <ContainerCard>
      <ImageCard src={'https://picsum.photos/300'}></ImageCard>
      <ButtonContainer>
      
        <Button onClick={() => goToDetails(history)}>Ver Detalhes</Button>
      </ButtonContainer>

    </ContainerCard>
   
  );
}

export default Cards;
