import styled from "styled-components";

export const ProductosContainer = styled.div`
  display: grid;
  /* background-color: white; */
  width: 80%;
  gap: 10px;
  align-items: center;
  justify-items: center;
  padding: 10px;
  padding-top: 100px;
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  background-color: white;
  width: 80%;
  gap: 10px;
  align-items: center;
  justify-items: center;
  padding: 10px;
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
`;

export const RopaTitulo = styled.div`
  display: flex;
  justify-content: center;

  align-items: center;
`;

export const RopaImagen = styled.div`
  img {
    width: 64px;
    height: 72px;
  }
`;

export const RopaCompra = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: center;
`;

export const Precio = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  width: 50%;
`;

export const Compra = styled.div`
  width: 70%;
`;

export const BtnCompra = styled.button`
  font-size: 8px;
  font-weight: 800;
  width: 100%;
  height: auto;
  border: 1px solid white;
  border-radius: 1rem;
  color: white;
  background-color: #020f1a;
`;
