/*eslint no-loss-of-precision: "error"*/
import styled from "styled-components";

export const Container = styled.main `
    display: flex;
    justify-content: center;
    margin: 10px;
    flex-wrap: wrap;
`

export const Products = styled.div `

    border: 3px solid pink;
    padding: 1.02rem 0.9375rem;
    max-width: 12.8rem;
    background-color: #f2f2f6;
    box-shadow:inset 0 0 1em pink;
    text-align: center;
    margin: 1.5rem;
    word-break: break-all;
    min-height: auto;
    background: #fff;
    border-radius: 10px;
    

    h4 {
        color: #000;
        text-transform: uppercase;
        word-break: normal;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        font-family: 'Lato', sans-serif;
        font-weight: 700;
    }

    strong {
        color: #fff;
        font-weight: bold;
        font-family: Univers,Helvetica,Arial,sans-serif;
        font-size: .625rem;
        padding: 0.3125rem 0.625rem;
        position: relative;
        float: left;
        top: 0;
        text-transform: uppercase;
        z-index: 1;
        border-radius: 10px;
    }

    .price {
        display: block;
        color: #776969;
        letter-spacing: 0;
        margin: 0.5rem;
        text-align: left;
        font-family: 'Lato', sans-serif;
        text-align: left;
        font-weight: 700;
        font-size: 21px;
    }

    .line-through {
        text-decoration: line-through;
        font-style: italic;
        font-weight: 300;
        text-align: left;
        margin-top: 1rem;
    }

    img {
        overflow: hidden;
        height: 250px;
        max-width: 12.7rem;
        position: relative;
        right: 16.3px;
        top: -19px;
        background-size: cover;
        border-radius: 10px;
    }

    button {
        position: relative;
        width: 100%;
        min-height: 45px;
        padding: 0.9375rem 0;
        border: 1px solid #776969;
        background-color: #fff;
        color: #776969;
        text-transform: uppercase;
        font-family: Univers,Helvetica,Arial,sans-serif;
        font-size: .625rem;
        white-space: nowrap;
        letter-spacing: 2px;
        cursor: pointer;
        font-weight: 700;
    }
`

export const Header = styled.header `
    color: #FFF;
    background-color: #000;
    text-align: center;
    font-size: 15px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5.01rem;
`

export const WhatsApp = styled.div `
    img {
        height: 55px;
        position: absolute; 
        left: 83%; 
        top:  90%;
        cursor: pointer;
    }

    @media (min-width: 1024px) {
        img {
            position: absolute; 
            left: 93%; 
            top:  90%;
            cursor: pointer;
        }
    }
  
`