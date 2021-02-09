import styled from 'styled-components'
import GoToPokedex from './ButtonsArtur/GoToPokedex'
import GoToHome from './ButtonsArtur/GoToHome'
import GoBack from './ButtonsArtur/GoBack'
import AddOrRemove from './ButtonsArtur/AddOrRemove'

const HeaderBox = styled.header`
    background: #d53b47;
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