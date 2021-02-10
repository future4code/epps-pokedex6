import { goToPokedex } from '../../Router/Coordinator'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
    color: white;
    position: absolute;
    right: 5vw;
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

const GoToPokedex = () => {
    const history = useHistory()

    return (
        <Button onClick={() => goToPokedex(history)}>Ver minha POKEDEX</Button>
    )
}

export default GoToPokedex