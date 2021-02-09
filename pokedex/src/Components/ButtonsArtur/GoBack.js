import { goToBack } from '../../Router/Coordinator'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

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
    padding: 0;
    width: 22vw;
    }
`

const GoBack = () => {
    const history = useHistory()

    return (
        <Button onClick={() => goToBack(history)}>Voltar</Button>
    )
}

export default GoBack