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
    margin-bottom: 5%;
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
    width: 35%;
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
    height: 75%;
    padding: 10px;
    
    @media(max-width: 800px){
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
    margin-bottom:5px;
    padding: 10px;

    @media(max-width: 800px){
    margin: 2%;
    }
`
export const RightCard = styled.div `
    display: flex;
    align-self: center;
    background-color: #DDD;
    flex-direction: column;
    width: 80%;
    height: auto;
    padding: 10px;
`