import react, {useContext} from 'react';
import { Button } from '../Buttons/styled'
import GlobalStateContext from '../../Global/Contexts/GlobalStateContext'

function RemoveToPokedex(props) {

  const { states, setters, requests } = useContext(GlobalStateContext)

  const removePokemonOfPokedex = (poke) => {
    const index = states.pokedex.findIndex((pokemon) => pokemon.name === poke.name)
    let newList = [...states.pokedex]
    newList.splice(states.pokedex[index], 1)
    
    setters.setPokeData(newList)
  }

  return (
    <Button onClick={() => removePokemonOfPokedex(props.pokemon)}>Remover</Button>
  )
}

export default RemoveToPokedex;
