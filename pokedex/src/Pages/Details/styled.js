import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    justify-content: center;
    align-content: center;
    width: 100vw;
    height: 90vh;
    text-align: center;
    
    @media(max-width: 800px){
    flex-direction: column;
    width: 100vw;
    height: auto;
    }
`
export const Box = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    text-align: center;

    @media(max-width: 800px){
    width: 98vw;
    height: 98%;
    align-self: center;
    }
`

export const LeftCard = styled.div `
    display: flex;
    align-self: center;
    flex-direction: column;
    background-color: #DDD;
    width: 40%;
    height: 30%;
    margin: 50px;
    
    @media(max-width: 800px){
    width: 30%;
    height: 10%;
    margin: 2%;
    }
`
export const MiddleCard = styled.div `
    display: flex;
    flex-direction: column;
    align-self: center;
    background-color: #DDD;
    width: 80%;
    height: 80%;
    padding: 5px;
    
    @media(max-width: 800px){
    width: 30%;
    height: 40%;
    margin: 2%;
    }

`
export const RightTopCard = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-self: center;
    background-color: #DDD;
    width: 80%;
    height: 10%;
    margin-bottom:10px;
    padding: 5px;

    @media(max-width: 800px){
    width: 30%;
    height: 10%;
    margin: 2%;
    }
`

export const RightCard = styled.div `
    display: flex;
    align-self: center;
    background-color: #DDD;
    flex-direction: column;
    width: 80%;
    height: 70%;
    padding: 5px;

    @media(max-width: 800px){
    width: 30%;
    height: 40%;
    margin: 2%;
    }
`