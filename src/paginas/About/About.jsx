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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla
            tempora temporibus eligendi? Unde sequi aperiam consectetur rem,
            esse ea mollitia. Aperiam hic odio minus mollitia. Nemo unde sit
            minima!
          </AboutDescrip>
        </AboutDescripDiv>
      </AboutGeneralContainer>
    </AboutGeneralSection>
  );
};

export default About;
