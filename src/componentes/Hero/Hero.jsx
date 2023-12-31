// import Boton from "../UI/Boton"
import {
  HeroContainerStyled,
  HeroTextContainerStyled,
  HeroImageContainerStyled,
} from "./HeroStyles";

function Hero() {
  return (
    <HeroContainerStyled>
      <HeroTextContainerStyled>
        <h1 style={{ color: "#030f1a" }}>Venta de indumentaria</h1>
      </HeroTextContainerStyled>
      <HeroImageContainerStyled>
        <img
          src="https://images.pexels.com/photos/4940756/pexels-photo-4940756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </HeroImageContainerStyled>
    </HeroContainerStyled>
  );
}

export default Hero;
