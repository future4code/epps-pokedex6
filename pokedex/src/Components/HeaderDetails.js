import styled from 'styled-components'
import { goToPokedex, goToHome } from '../Router/Coordinator'
import { useHistory } from 'react-router-dom'


const HeaderBox = styled.header`
    background: #d53b47;
    height: 10vh;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5vw;
    
    @media(max-width: 520px){
    padding: 0 2vw;
    }
`
const Button = styled.button`
    color: white;
    background: none;
    outline: none;
    padding: 1rem;
    border: solid white 1px;
    cursor: pointer;

    &&:hover {
    background: #d24953;
    }
    
    @media(max-width: 520px){
    padding: 0;
    width: 22vw;
    }
`
const Title = styled.h1`
    color: white;
    
    @media(max-width: 520px){
    font-size: 1rem;
    }
`

function HeaderDetails() {
    const history = useHistory()

    return (
        <HeaderBox>
            <Button onClick={() => goToPokedex(history)}>PokeDex</Button>
            <Title>Nome do Pokemon</Title>
            <Button>Adicionar / Remover da pokedex</Button>
        </HeaderBox>
    )
}

export default HeaderDetails