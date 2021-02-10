import React, { useEffect, useState} from 'react';
import MainPowerList from '../../Components/Lists/MainPowerList';
import PowerList from '../../Components/Lists/PowerList';
import  {Box, Container, LeftCard, MiddleCard, RightTopCard, RightCard} from './styled'
import Card from '../../Components/Card/Card'
import axios from 'axios'

const baseUrl = "https://pokeapi.co/api/v2/pokemon?limit=5";


function Details() {

  // const [pokeList, setPokeList] = useState([]);
  // const [pokeName, setPokeName] = useState("");
  // const [pokeUrl, setPokeUrl] = useState([]);
  // const [pokeId, setPokeId] = useState([]);
  // const [pokeColor, setPokeColor] = useState([]);

  // const getPokemon = () => { 
  //   axios
  //     .get(baseUrl)
  //     .then(response => {
  //       setPokeList(response.data.results)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     });
  // };

  // useEffect(() => {
  //   getPokemon()
  // }, [])

  // useEffect(() => {
  //   pokeList.map((pokemon) => {
  //     axios
  //         .get(
  //           `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
  //         )
  //         .then(res => {
  //             setPokeName(pokemon.name)
  //             setPokeUrl(pokemon.url)
  //         })
  //         .catch(err => {
  //           console.log(err)
  //         });
  //   })
  // },[pokeList])

  // useEffect(() => {
  //   pokeList.map((pokemon) => {
  //     axios
  //         .get(
  //           `${pokemon.url}`
  //         )
  //         .then(res => {
  //             setPokeId(res.data.id)
  //         })
  //         .catch(err => {
  //           console.log(err)
  //         });
  //   })
  // },[pokeList])


  // useEffect(() => {
  //     axios
  //         .get(
  //           `https://pokeapi.co/api/v2/pokemon-color/${pokeId}`
  //         )
  //         .then(res => {
  //             setPokeColor(res.data.results)
  //         })
  //         .catch(err => {
  //           console.log(err)
  //         });
  // },[pokeList])

  // console.log(pokeColor)

  return (
  <Container>
    <Box>
      <LeftCard>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt='bulbasaur'/>              
      </LeftCard>
      <LeftCard>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png" alt='bulbasaur'/>  
      </LeftCard>
    </Box>
    <Box>
      <MiddleCard>
        <h2>Poderes</h2>
        <PowerList/>
      </MiddleCard>
    </Box>
    <Box>
      <RightTopCard>
        <p>grass</p>
        <p>grass</p>
      </RightTopCard>

      <RightCard>
        <h2>Principais Poderes</h2>
        <MainPowerList></MainPowerList>
      </RightCard>
    </Box>
  </Container> 
  );
}

export default Details;
