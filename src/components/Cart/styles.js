import styled from "styled-components"

export const Container = styled.div `
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;

    .products {
        display: flex;
        flex-wrap: wrap;
        flex: 3;
    }

    .total-price {
        flex: 1;
        width: 300px;
        height: 130px;
        background-color: pink;
        text-align: center;
        border-radius: 10px;
        margin-right: 15px;
        display: flex;
        flex-direction: column;

        button {
            width: 50%;
            textalign: center;
            margin: 10px auto;
        }

        h2 {
            font-size: 20px;
            padding-right: 15px;
        }
       
        .total-items {
            text-align: left;
            margin: 10px;
            img {
                height: 70px;
                border-radius: 100%;
                display: flex;
                flex-direction: column;
            }
        }
    }
`

export const ContainerCart = styled.div `
    display: flex;
    justify-content: center;
    margin: 5px;

    span {
        cursor: pointer;
    }
`