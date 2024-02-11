import styled from "styled-components";

export const MenuGeneralSection = styled.div`
  width: 60%;
  height: auto;
  height: ${(props) => (props.clicked ? "auto" : "0")};
  display: flex;
  border: 1px solid #0f518c;
  box-shadow: 1px 2px 10px #3692fc;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  background: #06213a;
  transform: ${(props) =>
    props.clicked ? "translateX(0)" : "translateX(-150%)"};
  bottom: 100px;
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
