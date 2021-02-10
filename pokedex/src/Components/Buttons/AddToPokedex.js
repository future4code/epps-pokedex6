import react, {useContext} from 'react';
import { Button } from '../Buttons/styled'
import GlobalStateContext from '../../Global/Contexts/GlobalStateContext'


function AddToPokedex(props) {
  const { states, setters, requests } = useContext(GlobalStateContext);

  const addPokemonToPokedex = (poke) => {
    const index = states.pokeList.findIndex((pokemon) => pokemon.name === poke.name);
    let newPokedex = [...states.pokedex];
      newPokedex.push( states.pokeList[index] )
    setters.setPokedex(newPokedex);

    let newList = [...states.pokeData]
    newList.splice(states.pokeData[index], 1)
    setters.setPokeData(newList)
  };
  
  return (
    <Button onClick={() => addPokemonToPokedex(props.pokemon)}>Adicionar</Button>
  )
}

export default AddToPokedex;
