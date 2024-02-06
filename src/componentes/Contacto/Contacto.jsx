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
            <ContactoFormItem>Nombre</ContactoFormItem>
            <ContactoFormInput></ContactoFormInput>
          </ContactoFormItemDiv>
          {/* Apellido */}
          <ContactoFormItemDiv>
            <ContactoFormItem>Apellido</ContactoFormItem>
            <ContactoFormInput></ContactoFormInput>
          </ContactoFormItemDiv>
          {/* Email */}
          <ContactoFormItemDiv>
            <ContactoFormItem>EMail</ContactoFormItem>
            <ContactoFormInput></ContactoFormInput>
          </ContactoFormItemDiv>
          {/* Mensaje */}
          <ContactoFormItemDiv>
            <ContactoFormItem>Mensaje/Asunto</ContactoFormItem>
            <ContactoFormInput></ContactoFormInput>
            <ContactoFormItemDiv>
              <ContactoFormInputSend>Enviar</ContactoFormInputSend>
            </ContactoFormItemDiv>
          </ContactoFormItemDiv>
        </ContactoFormContainer>
      </ContactoGeneralContainer>
    </ContactoGeneralSection>
  );
};

export default Contacto;
