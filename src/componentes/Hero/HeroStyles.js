import styled from "styled-components";

export const HeroContainerStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const HeroImageNormalScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50%;
  }

  :first-child {
    width: 49%;
    border-right: 0.5px solid white;
  }
  :last-child {
    width: 49%;
    border-left: 0.5px solid white;
  }
`;

export const HeroImageWideScreen = styled.div`
  border-bottom: 2px solid white;
  img {
    width: 100%;
  }
`;

export const HeroImageContainerStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50%;
    height: 1022px;
  }
`;
