import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterContent = styled.div`
  background: #f0f0f0;
  width: 100%;
  height: auto;
  padding: 10px;
`;

export const ContentMediosFormas = styled.div``;

export const ContentMedios = styled.div`
  width: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
`;

export const Medios = styled.div``;
export const ContentFormas = styled.div`
  width: 100px;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
`;

export const Formas = styled.div``;

export const ContentContacto = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Contacto = styled.div``;
