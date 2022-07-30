import styled from "styled-components";

export const HeaderTitle = styled.header`
    background-color: #f08fa9;
    height: 27px;
    h1{
        font-size: 0.8rem;
        text-align: center;
        font-weight: 300;
        color: white;
    }
`

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

    input::placeholder {
        color: #f08fa9;
        font-size: 0.8rem
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