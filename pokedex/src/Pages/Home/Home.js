import React, {useState, useEffect} from 'react';
import Cards from '../../Components/Card/Card';
import { HomeContainer } from '../Home/styled';
import axios from 'axios'

const baseUrl = "https://pokeapi.co/api/v2/pokemon/?limit=20";

function Home() {

  const [pokeList, setPokeList] = useState([])
  const [pokeData, setPokeData] = useState ([])

  const pokeUrl = []
  
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


  useEffect(() => {
    getPokemon()
  }, [])

  useEffect(() => {

    pokeList.map((pokemon) => {
      axios
          .get(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
          )
          .then(res => {
            pokeUrl.push(res.data)
            if (pokeUrl.length === 20){
              setPokeData(pokeUrl)}
          })
          .catch(err => {
            console.log(err)
          });
    })
  },[pokeList])

  return (
    <HomeContainer>
      {pokeData && pokeData.map((pokemon) => {
        return(
          <Cards pokemon={pokemon}/>
        )})}
    </HomeContainer>
  );
}

export default Home;
