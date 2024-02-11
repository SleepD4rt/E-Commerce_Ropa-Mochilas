import styled from "styled-components";

export const LayoutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LayoutContainerStyled = styled.div`
  min-height: 50vh;
  height: auto;
  width: 100%;
  position: relative;
`;

export const ContentContainerStyled = styled.div`
  height: calc(100vh - 50px);
  background: ${(props) => props.theme.desktopBackground};
`;
