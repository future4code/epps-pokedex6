import styled from 'styled-components'

const Button = styled.button`
    color: white;
    background: none;
    outline: none;
    padding: 1rem;
    border: solid white 1px;
    cursor: pointer;

    &&:hover {
    background: #d24953;
    }
    
    @media(max-width: 520px){
    padding: 0;
    width: 22vw;
    }
`

const AddOrRemove = () => {

    return (
        <div>

        <Button>Adicionar</Button>
        {/* OU */}
        <Button>Remover</Button>

        </div>
    )
}

export default AddOrRemove