import { goToDetails } from '../../Router/Coordinator'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import {useContext} from 'react'
import PokeFullList from '../../Contexts/PokeFullList'
import PokeToDetails from '../../Contexts/PokeToDetails'

const Button = styled.button`
`

const GoToDetails = (props) => {

    const history = useHistory()
    const pokeData = useContext(PokeFullList)

    const selectPokemon = (pokemon) => {
        const index = pokeData.findIndex((poke) => poke.name === pokemon.name);
        
        const pokemonToDetails = pokeData[index]
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