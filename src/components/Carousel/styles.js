import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 62vw;
    height: 70vh;
    z-index: -1;
    
  }

  @media (min-width: 320px) and (max-width: 1024px) {
    display: none;
  }
  
  @media (min-width: 1200px) {
    width: 1200px;
    margin: 0px auto;
  }
`;