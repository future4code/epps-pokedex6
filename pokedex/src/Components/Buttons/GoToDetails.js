import { goToDetails } from '../../Router/Coordinator'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
`

const GoToDetails = (pokemon) => {

    const history = useHistory()

    return (
        <Button onClick={() => goToDetails(history)}>Ver Detalhes</Button>
    )
}

export default GoToDetails