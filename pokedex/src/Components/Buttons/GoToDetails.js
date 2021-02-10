import { goToDetails } from '../../Router/Coordinator'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import {useContext} from 'react'
import GlobalStateContext from '../../Global/Contexts/GlobalStateContext'

const Button = styled.button`
`

const GoToDetails = (props) => {
  const { states, setters, requests } = useContext(GlobalStateContext);

    const history = useHistory()

    const selectPokemon = (pokemon) => {
        const index = states.pokeList.findIndex((poke) => poke.name === pokemon.name);

        const pokemonToDetails = states.pokeList[index]
        // pokemonToDetails é o que precisamos mandar la pro Details por meio de context
        console.log(pokemonToDetails)
    };

    const detailsFunction = (pokemon) => {
        goToDetails(history)
        selectPokemon(pokemon)
    }

    return (
        // <PokeToDetails.Provider value={pokemonToDetails}>
        <Button onClick={() => detailsFunction(props.pokemon)}>Ver Detalhes</Button>
        // </PokeToDetails.Provider>
    )
}

export default GoToDetails