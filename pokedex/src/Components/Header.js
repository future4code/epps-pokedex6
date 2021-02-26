import styled from 'styled-components'
import React, {useContext} from 'react'
import GoToPokedex from './Buttons/GoToPokedex'
import GoToHome from './Buttons/GoToHome'
import GoBack from './Buttons/GoBack'
import GlobalStateContext from '../Global/Contexts/GlobalStateContext'

const HeaderBox = styled.header`
    display:flex;
    justify-content: space-between;    
    background: #d53b47;
    width: 100vw;
    height: 10vh;
    align-items: center;
`
const Title = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
    color: white;
    font-size: 25px;
    font-weight: bold;
    
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
                <Title>Pokemon</Title>
                <GoToPokedex/>
            </HeaderBox>
        )
    } else {
        return (
            <>
            </>
        )
    }
}

export default Header