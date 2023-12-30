import styled from "styled-components";

export const ProductosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  background-color: white;
  width: 80%;
  gap: 10px;
  align-items: center;
  justify-items: center;
  padding: 10px;
  @media (max-width: 768px) {
    width: 60%;
  }
`;

export const RopaContainer = styled.div`
  background-color: #1d1d1d;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media (max-width: 768px) {
  }
`;

export const RopaTitulo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
  }
`;
