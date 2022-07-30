import styled from "styled-components";

export const Container = styled.main `
    margin-left: auto;
    // margin-right: 3rem;
    height: 115px;
    width: 95%;
    background-color: #f2f2f2;
    color: #FFF;
    font-size: 32px;
    margin-top: 0;
    font-family: 'Helvetica';
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 2;
    box-shadow: 0 0 0.1em pink;

    img {
        width: 220px;
        cursor: pointer;
    }

    span {
        margin-right: 50px;
    }
`