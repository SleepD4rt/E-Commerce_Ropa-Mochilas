import {
  FooterContainer,
  FooterContent,
  ContentMediosFormas,
  ContentMedios,
  Medios,
  ContentFormas,
  Formas,
  ContentContacto,
  Contacto,
} from "./FooterStyled";

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <ContentMediosFormas>
          <ContentMedios>
            <Medios>1</Medios>
            <Medios>2</Medios>
            <Medios>3</Medios>
            <Medios>4</Medios>
            <Medios>5</Medios>
            <Medios>6</Medios>
          </ContentMedios>
          <ContentFormas>
            <Formas>1</Formas>
            <Formas>2</Formas>
          </ContentFormas>
        </ContentMediosFormas>
        <ContentContacto>
          <Contacto></Contacto>
          <Contacto></Contacto>
        </ContentContacto>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
