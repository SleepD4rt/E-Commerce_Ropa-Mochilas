import { MenuGeneralSection, MenuLinkContainer } from "./BurgerMenuStyled";
import { Link } from "react-router-dom";

const BurgerMenu = (props) => {
  return (
    <MenuGeneralSection clicked={props.clicked ? 1 : 0}>
      <MenuLinkContainer>
        <Link to="/">Inicio</Link>
        <Link to="Productos">Productos</Link>
        <Link to="About">Conocenos</Link>
        <Link to="Contacto">Contacto</Link>
      </MenuLinkContainer>
    </MenuGeneralSection>
  );
};

export default BurgerMenu;
