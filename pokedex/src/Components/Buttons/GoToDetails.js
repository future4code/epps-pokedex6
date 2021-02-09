import { goToDetails } from '../../Router/Coordinator'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
`

const GoToDetails = (props) => {

    const history = useHistory()


    const selectPokemon = (pokemon) => {
        const index = "NOSSA LISTA DE POKEMONS".findIndex((poke) => poke.name === pokemon.name);
        
        const pokemonToDetails = "NOSSA LISTA DE POKEMONS"[index]
        // pokemonToDetails é o que precisamos mandar la pro Details por meio de context
    };

    const detailsFunction = (pokemon) => {
        goToDetails(history)
        selectPokemon(pokemon)

    }

    

    return (
        <Button onClick={() => detailsFunction(props.pokemon)}>Ver Detalhes</Button>
    )
}

export default GoToDetails