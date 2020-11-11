import Styled from 'styled-components'

const Background = Styled.div`
    width: 100%;
    padding: 1rem;
    margin: 0;
    background-color: ${props => props.color || "white"}
`

export default Background;