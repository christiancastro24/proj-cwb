import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 79vw;
    height: auto;
    z-index: -1;
    border-radius: 20px;
    // margin-top: 17px;
    margin: 17px auto;

  }
  
  @media (min-width: 1200px) {
    width: 1200px;
    margin: 0px auto;
  }
`;