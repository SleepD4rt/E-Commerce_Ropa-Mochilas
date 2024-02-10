import styled from "styled-components";

export const MenuGeneralSection = styled.div`
  width: 60%;
  height: auto;
  display: flex;
  border-radius: 1px solid red;
  color: white;
  background: red;
  transform: ${({ open }) => (open ? "translateX(-150%)" : "translateX(0)")};
`;

export const MenuLinkContainer = styled.div`
  width: 80%;
  background: red;
  height: auto;
  display: flex;
  flex-direction: column;
  border-radius: 1px solid red;
  color: white;
`;
