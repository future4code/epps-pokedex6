import styled from 'styled-components'
import React, {useContext} from 'react'
import GoToPokedex from './Buttons/GoToPokedex'
import GoToHome from './Buttons/GoToHome'
import GoBack from './Buttons/GoBack'
import AddOrRemove from './Buttons/AddOrRemove'
import GlobalStateContext from '../Global/Contexts/GlobalStateContext'

const HeaderBox = styled.header`
    background: #d53b47;
    width: 100vw;
    height: 10vh;

    display: flex;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
    color: white;
    
    @media(max-width: 800px){
    font-size: 1rem;
    margin-left: 5vw;
    }
`

function Header() {
    
  const { states, setters, requests } = useContext(GlobalStateContext);

    if(states.page === "home"){
        
        return (
            <HeaderBox>
                <GoToPokedex/>
                <Title>Lista de Pokemons</Title>
            </HeaderBox>
        )
    } else if(states.page === "pokedex") {
        return (
            <HeaderBox>
                <GoToHome/>
                <Title>Pokedex</Title>
            </HeaderBox>
        )
    } else if(states.page === "details") {
        return(
            <HeaderBox>
                <GoBack/>
                <Title>Nome do Pokemon</Title>
                <GoToPokedex/>
            </HeaderBox>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default Header