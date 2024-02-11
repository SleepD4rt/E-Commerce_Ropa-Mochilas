import styled from "styled-components";

export const FooterContainer = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterContent = styled.div`
  background: #f0f0f0;
  display: flex;
  flex-direction: row;

  width: 100%;
  height: auto;
  padding: 10px;
`;

export const ContentMediosFormas = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: center;
  h3 {
    color: #5f5f5f;
  }
`;

export const ContentMedios = styled.div`
  width: 200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(45px, 1fr));
`;

export const Medios = styled.div`
  img {
    border: 0.3px solid gray;
    width: 40px;
  }
`;
export const ContentFormas = styled.div`
  width: 200px;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(2px, 1fr));
`;

export const Formas = styled.div`
  img {
    border: 0.3px solid gray;
    width: 40px;
  }
`;

export const ContentContacto = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Contacto = styled.div``;
