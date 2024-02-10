import {
  ContactoGeneralContainer,
  ContactoGeneralSection,
  ContactoTitleDiv,
  ContactoTitle,
  ContactoFormContainer,
  ContactoFormItem,
  ContactoFormItemDiv,
  ContactoFormInput,
  ContactoFormInputSend,
  ContactoFormTextArea,
} from "./ContactoStyled";

const Contacto = () => {
  return (
    <ContactoGeneralSection>
      <ContactoGeneralContainer>
        <ContactoTitleDiv>
          <ContactoTitle>CONTACTO</ContactoTitle>
        </ContactoTitleDiv>
        <ContactoFormContainer>
          {/* Nombre */}
          <ContactoFormItemDiv>
            <ContactoFormItem>Nombre:</ContactoFormItem>
            <ContactoFormInput></ContactoFormInput>
          </ContactoFormItemDiv>
          {/* Apellido */}
          <ContactoFormItemDiv>
            <ContactoFormItem>Apellido:</ContactoFormItem>
            <ContactoFormInput></ContactoFormInput>
          </ContactoFormItemDiv>
          {/* Email */}
          <ContactoFormItemDiv>
            <ContactoFormItem >EMail:</ContactoFormItem>
            <ContactoFormInput type='email'></ContactoFormInput>
          </ContactoFormItemDiv>
          {/* Mensaje */}
          <ContactoFormItemDiv>
            <ContactoFormItem>Mensaje/Asunto:</ContactoFormItem>
            <ContactoFormTextArea></ContactoFormTextArea>
          </ContactoFormItemDiv>
          <ContactoFormItemDiv isbtn={'center'}>
            <ContactoFormInputSend>Enviar</ContactoFormInputSend>
          </ContactoFormItemDiv>
        </ContactoFormContainer>
      </ContactoGeneralContainer>
    </ContactoGeneralSection>
  );
};

export default Contacto;
