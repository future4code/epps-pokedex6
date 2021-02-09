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
    margin-left: 0;
    margin-right: 0;
    padding-left: 20px;
`
const Item = styled.li ` 
    padding: 15px;
`

function PowerList() {

    return (
        <BoxList>
          <List>
            <Item>HP: 45</Item>
            <Item>Attack: 49</Item>
            <Item>Defense: 49</Item>
            <Item>Special-attack: 65</Item>
            <Item>Special-defense: 65</Item>
            <Item>Speed: 45</Item>
          </List>
        </BoxList>
    )
}

export default PowerList