import styled from "styled-components";

export const AboutGeneralSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background: 030f1a;
  min-height: 100vh;
`;

export const AboutGeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: auto;
  margin: 25px;
`;

export const AboutTitleDiv = styled.div`
  display: flex;
  width: auto;
  font-size: 32px;
  text-decoration: underline;
  text-decoration-thickness: 15px;
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    text-decoration-thickness: 10px;
  }
`;

export const AboutTitle = styled.h1`
  color: white;
`;

export const AboutDescripDiv = styled.div`
  min-height: 100px;
  min-width: 200px;
`;

export const AboutDescrip = styled.p`
  font-size: 12px;
`;
