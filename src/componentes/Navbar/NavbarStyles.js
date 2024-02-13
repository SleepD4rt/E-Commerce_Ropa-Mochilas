import styled from "styled-components";

export const MenuSection = styled.div``;

export const CartSection = styled.div``;

export const NavbarContainerStyledDivisor = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  &::-webkit-scrollbar {
    display: none;
  }
  z-index: 0;
`;

export const NavbarInfoContainer = styled.div`
  height: auto;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-around;
  justify-content: center;
  align-items: center;

  /* @media (max-width: 768px) {
    padding: 0.5rem;
  } */
`;

export const NavbarInfo = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: auto;

  h2 {
    font-size: 16px;
    @media (max-width: 520px) {
      font-size: 14px;
    }
    @media (max-width: 390px) {
      font-size: 12px;
    }
  }
`;

export const NavbarLineDivisor = styled.div`
  background-color: white;
  height: 1.5px;
  width: 100%;
`;

export const NavbarContainerStyled = styled.div`
  width: 90%;
  display: flex;
  height: auto;
  justify-content: space-between;
  align-items: center;

  /* @media (max-width: 768px) {
    padding: 1rem 2rem;
  } */
`;

export const LinksContainerStyled = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  a {
    padding: 1rem 1.5rem;
  }
  a:first-child {
    background: var(--orange-bg);
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
`;

export const LinkContainerStyled = styled.div`
  font-size: 1.2rem;
  color: ${(props) => (props.home ? "#ff9d01" : "#ff9300")};
`;

export const UserContainerStyled = styled(LinkContainerStyled)`
  display: flex;
  align-items: center;
`;

export const HomeContainerStyled = styled(LinkContainerStyled)`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuContainerStyled = styled(LinkContainerStyled)`
  display: none;
  align-items: center;
  font-size: 2rem;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const UserNavStyled = styled.div`
  gap: 15px;
  cursor: pointer;
  span {
    color: white;
    font-size: 1rem;
    margin-right: 20px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const UserImageStyled = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  cursor: pointer;
`;

export const SpanStyled = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;

export const LinkLogo = styled.div`
  display: flex;
  width: auto;
  height: auto;
  padding: 10px;
`;

export const LinkRouter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;
