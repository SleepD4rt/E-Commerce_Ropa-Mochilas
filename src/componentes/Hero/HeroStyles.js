import styled from "styled-components";

export const HeroContainerStyled = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  gap: 30px;

  h1 {
    margin-bottom: 2rem;
  }
`;

export const HeroTextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  h1 {
    text-align: center;
    font-size: 2rem;
    margin: 10px 0;
  }
  h2 {
    font-size: 2rem;
    margin: 10px 0;
  }
  p {
    font-size: 1rem;
  }
  @media (max-width: 968px) {
    width: 40%;
    align-items: center;
    text-align: center;
  }
`;

export const HeroImageContainerStyled = styled.div`
  width: 40%;
  img {
    width: 100%;
    padding-bottom: 75px;
  }

  @media (max-width: 960px) {
    display: none;
  }
`;
