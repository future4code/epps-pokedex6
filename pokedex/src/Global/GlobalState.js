import GlobalStateContext from './Contexts/GlobalStateContext'
import React,{useState} from 'react'
import axios from 'axios' 

const GlobalState = (props) => {
const baseUrl = "https://pokeapi.co/api/v2/pokemon/?limit=20";
    
  const [pokeList, setPokeList] = useState([]);
  const [pokeData, setPokeData] = useState ([]);
  const [pokeName, setPokeName] = useState("");
  const [pokeUrl, setPokeUrl] = useState([]);
  const [pokeId, setPokeId] = useState([]);
  const [pokeColor, setPokeColor] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [pokedexData, setPokedexData] = useState();
  const [pokeDetails, setPokeDetails] = useState();
  const [pokeDataDetails, setPokeDataDetails] = useState();

const pokeImg = []
const pokedexImg = []

// Pega a lista de pokemons inteira

  const getPokemon = () => { 
    axios
      .get(baseUrl)
      .then(response => {
        setPokeList(response.data.results)
      })
      .catch(err => {
        console.log(err)
      });
  };


// pega o nome do pokemon com a url
  
  const getPokeUrl =() => {
        pokeList.map((pokemon) => {
        axios
          .get(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
          )
          .then(res => {
              setPokeName(pokemon.name)
              setPokeUrl(pokemon.url)
          })
          .catch(err => {
            console.log(err)
          });
        })
    }

// pega a id
    
  const getPokeId = () => {
    pokeList.map((pokemon) => {
      axios
          .get(
            `${pokemon.url}`
          )
          .then(res => {
              setPokeId(res.data.id)
          })
          .catch(err => {
            console.log(err)
          });
    })
  }


// pega a cor

  const getPokeColor = () => {
      axios
          .get(
            `https://pokeapi.co/api/v2/pokemon-color/${pokeId}`
          )
          .then(res => {
              setPokeColor(res.data.results)
              console.log(res.data.results)
          })
          .catch(err => {
            console.log(err)
          });
    }   

    const getPokeData = () => {
    pokeList.map((pokemon) => {
        axios
            .get(
                `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
            )
            .then(res => {
                pokeImg.push(res.data)
                if (pokeImg.length === 20){
                setPokeData(pokeImg)}
            })
            .catch(err => {
                console.log(err)
            });
        })
    }

    const getPokedexData = () => {
    pokedex.map((pokemon) => {
        axios
            .get(
                `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
            )
            .then(res => {
                pokedexImg.push(res.data)
                if (pokedexImg.length > 0){
                setPokedexData(pokedexImg)}
            })
            .catch(err => {
                console.log(err)
            });
        })
    }
    
// pega detalhes
  
    const getPokeDataDetails = () => {
        axios
            .get(
                `https://pokeapi.co/api/v2/pokemon/${pokeDetails.name}`
            )
            .then(res => {
                setPokeDataDetails(res.data)
            })
            .catch(err => {
                console.log(err)
            });
    }

    const states = {pokeList, pokeData, pokeName, pokeUrl, pokeId, pokeColor, pokedex, pokedexData, pokeDetails, pokeDataDetails}
    const setters = {setPokeList, setPokeData, setPokeName, setPokeUrl, setPokeId, setPokeColor, setPokedex, setPokedexData, setPokeDetails, setPokeDataDetails}
    const requests = {getPokemon, getPokeData, getPokeUrl, getPokeId, getPokeColor, getPokedexData, getPokeDataDetails}

    const data = { states, setters, requests };

    return (
        <GlobalStateContext.Provider value={data}>
        {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;