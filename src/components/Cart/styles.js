import styled from "styled-components"

export const Container = styled.div `
    display: flex;
    // justify-content: center;
    flex-wrap: wrap;
    // flex-direction: row !important;
    width: 100%;
`

export const ContainerCart = styled.div `
    display: flex;
    justify-content: center;
    margin: 10px;

    span {
        cursor: pointer;
    }
`