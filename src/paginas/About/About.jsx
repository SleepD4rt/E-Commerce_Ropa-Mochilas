import {
  AboutGeneralSection,
  AboutGeneralContainer,
  AboutTitleDiv,
  AboutTitle,
  AboutDescripDiv,
  AboutDescrip,
} from "./AboutStyles";
const About = () => {
  return (
    <AboutGeneralSection>
      <AboutGeneralContainer>
        <AboutTitleDiv>
          <AboutTitle>Conocenos</AboutTitle>
        </AboutTitleDiv>
        <AboutDescripDiv>
          <AboutDescrip>
            Somos una tienda de Ropa ubicada en algun lugar recondito de
            Argentina
          </AboutDescrip>
        </AboutDescripDiv>
      </AboutGeneralContainer>
    </AboutGeneralSection>
  );
};

export default About;
