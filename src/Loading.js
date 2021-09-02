import React from 'react'
import styled from 'styled-components'

function Loading() {
    return (
        <Wrapper>
            Loading...
        </Wrapper>
    )
}

export const Wrapper = styled.div`
    margin: 2rem 0;
    font-size: 2rem;
    font-weight: 700;
    text-align:center;
`;



export default Loading
