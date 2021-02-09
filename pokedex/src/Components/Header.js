import styled from 'styled-components'
import GoToPokedex from './Buttons/GoToPokedex'
import GoToHome from './Buttons/GoToHome'
import GoBack from './Buttons/GoBack'
import AddOrRemove from './Buttons/AddOrRemove'

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

    return (
        <HeaderBox>
            <GoToPokedex/>
            <GoToHome/>
            <GoBack/>
            <Title>Lista de Pokemons</Title>
            <Title>Pokedex</Title>
            <Title>Nome do Pokemon</Title>
            <AddOrRemove/>
        </HeaderBox>
    )
}

export default Header