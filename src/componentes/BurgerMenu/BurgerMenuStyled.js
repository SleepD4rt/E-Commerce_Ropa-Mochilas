import styled from "styled-components";

export const MenuGeneralSection = styled.div`
  position: absolute;
  width: 300px;
  height: auto;
  height: ${(props) => (props.clicked ? "auto" : "0")};
  display: flex;
  border: 1px solid #0f518c;
  box-shadow: 1px 2px 10px #3692fc;
  border-top: 1px solid white;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  background: #06213a;
  transform: ${(props) =>
    props.clicked ? "translateX(0)" : "translateX(-200%)"};
  top: 45px;
  z-index: 2;

  @media (max-width: 400px) {
    top: 0;
  }
`;

export const MenuLinkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px solid red;
  color: white;
  text-align: center;
  padding: 10px;
`;
