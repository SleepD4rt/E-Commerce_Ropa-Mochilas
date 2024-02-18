// import Boton from "../UI/Boton"
import {
  HeroContainerStyled,
  HeroImageContainerStyled,
  HeroImageNormalScreen,
  HeroImageWideScreen,
} from "./HeroStyles";
import heroWide from "../../img/Hero2_2500px.jpg";
import menImage from "../../img/Hero1.jpg";
import womanImage from "../../img/Hero3.jpg";

function Hero() {
  return (
    <HeroContainerStyled>
      <HeroImageWideScreen>
        <img src={heroWide} alt="" />
      </HeroImageWideScreen>
      <HeroImageNormalScreen>
        <img src={menImage} />
        <img src={womanImage} />
      </HeroImageNormalScreen>
    </HeroContainerStyled>
  );
}

export default Hero;
