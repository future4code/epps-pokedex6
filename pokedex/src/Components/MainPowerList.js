import styled from 'styled-components'


const BoxList = styled.div `
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    height: 100%;
    text-align: left;
`

const List = styled.ul`
    display: block;
    list-style-type: none;
    margin-top: 1em;
    margin-bottom: 1 em;
    margin-left: 0;
    margin-right: 0;
    padding-left: 20px;
`
const Item = styled.li ` 
    padding: 20px;
`

function MainPowerList() {

    return (
        <BoxList>
        <List>
            <Item>razor-wind</Item>
            <Item>swords-dance</Item>
            <Item>cut</Item>
            <Item>bind</Item>
            <Item>vine-whip</Item>
        </List>
        </BoxList>
    )
}

export default MainPowerList