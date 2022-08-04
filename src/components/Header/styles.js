import styled from "styled-components";

export const HeaderTitle = styled.header`
    background-color: #f08fa9;
    height: 34px;
    h1{
        margin-top: 3px;
        font-size: 0.8rem;
        text-align: center;
        font-weight: 300;
        color: white;
    }
`

export const Container = styled.main `
    margin-left: auto;
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

    input::placeholder {
        color: #f08fa9;
        font-size: 0.8rem
    }

    input {
        border: 1px solid #000;
        color: #000;
        width: 20rem;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        span{
            padding-top: 5px;
            font-size: 12px;
            color: #f08fa9;
        }
    }
`

export const ContainerProducts = styled.div `
    background-color: #fff;
    position: absolute;
    z-index: 99999;
    top: 18.3%;
    width: 20rem;
    left: 38.5%;
    padding: 1rem 5rem;
    max-height: calc(60vh - 60px);
    border-radius: 0 0 3rem 3rem;
    overflow-y: auto;
    overflow-x: hidden;
    color: #f08fa9;
    font-size: 1.2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    box-shadow: 0 0 0.5em #f08fa9;
    cursor: pointer;

    img {
        height: 100px;
        width: 100px;
        margin: 0.5rem;
        border-radius: 100%;
    }
`