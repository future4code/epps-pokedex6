import react from 'react';
import { goToDetails } from '../../Router/Coordinator';
import { ContainerCard,ImageCard, ButtonContainer,Button } from '../Card/styled'
import { useHistory } from 'react-router-dom'



function Cards() {

  const history = useHistory()

  return (

    <ContainerCard>
      <ImageCard src={'https://picsum.photos/300'}></ImageCard>
      <ButtonContainer>
        <Button>Adicionar</Button>
        <Button onClick={() => goToDetails(history)}>Ver Detalhes</Button>
      </ButtonContainer>

    </ContainerCard>
   
  );
}

export default Cards;
