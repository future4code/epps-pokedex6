import { goToPokedex } from '../../Router/Coordinator'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
    display: flex;
    justify-content: center;
    color: white;
    background: none;
    outline: none;
    padding: 1rem;
    margin-left: 10px;
    margin-right: 10px;
    border: 2px solid white ;
    border-radius: 15px;
    cursor: pointer;
    &&:hover {
    background: gold;
    }

    @media(max-width: 520px){
    padding: 3px;
    width: 22vw;
    }
`

const GoToPokedex = () => {
    const history = useHistory()

    return (
        <Button onClick={() => goToPokedex(history)}>POKEDEX</Button>
    )
}

export default GoToPokedex