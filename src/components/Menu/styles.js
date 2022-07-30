import styled from "styled-components";

export const Container = styled.div `
  position: absolute;
  top: 40px;
  left: 10px;

  img {
    height: 30px;
    width: 40px;
    position: relative;
    top: 0;
    left: 10px;
  }
`

export const Items = styled.nav `
  a {
    color: #000;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    font-size: 22px;
    border-radius: 3px;
    margin: 2px;
    cursor: pointer;
  }

  a:hover {
    background-color: #c0c0c0;
    color: #000;
  }
`