import react from 'react';
import { ContainerCard,ImageCard, ButtonContainer,Button } from '../Card/styled'



function Cards() {
  return (

    <ContainerCard>
      <ImageCard src={'https://picsum.photos/300'}></ImageCard>
      <ButtonContainer>
        <Button>Adicionar</Button>
        <Button>Ver Detalhes</Button>
      </ButtonContainer>

    </ContainerCard>
   
  );
}

export default Cards;
