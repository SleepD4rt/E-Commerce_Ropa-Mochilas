import styled from "styled-components";

export const ContactoGeneralSection = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const ContactoGeneralContainer = styled.section`
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;

`;

export const ContactoTitleDiv = styled.div`
  
  display: flex;
  width: auto;
  font-size: 32px;
  text-decoration: underline;
  text-decoration-thickness: 5px;
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    text-decoration-thickness: 10px;
  }
`;

export const ContactoTitle = styled.h1`
  font-size: 20px;
`;

export const ContactoFormContainer = styled.div`
width:100%;
display: flex;
flex-direction: column;
align-items: flex-start;

`;

export const ContactoFormItemDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 5px;
`;


export const ContactoFormItem = styled.div``;

export const ContactoFormTextArea = styled.textarea`width:100%;`;

export const ContactoFormInput = styled.input.attrs(({type})=> ({type:  type || "text"}))`width:100%;`;


export const ContactoFormInputSend = styled.button`
width: 200px;
height: 30px;
border-radius: 10px;
border: 2px solid white;
color: white;
background-color: #020f1a;`;




// nombre", "apellido" , "email" y "asunto"
