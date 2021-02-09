import styled from 'styled-components'
import { goToBack } from '../Router/Coordinator'
import { useHistory } from 'react-router-dom'

const HeaderBox = styled.header`
    background: #d53b47;
    height: 10vh;

    display: flex;
    justify-content: center;
    align-items: center;
`
const Button = styled.button`
    color: white;
    position: absolute;
    left: 5vw;
    background: none;
    outline: none;
    padding: 1rem;
    border: solid white 1px;
    cursor: pointer;

    &&:hover {
    background: #d24953;
    }

    @media(max-width: 520px){
    padding: 0.5rem;

    }
`
const Title = styled.h1`
    color: white;
    
    @media(max-width: 800px){
    font-size: 1rem;
    margin-left: 5vw;

    }
`
function HeaderPokedex() {
    const history = useHistory()

    return (
        <HeaderBox>
            <Button onClick={() => goToBack(history)}>Voltar</Button>
            <Title>Pokedex</Title>
        </HeaderBox>
    )
}

export default HeaderPokedex