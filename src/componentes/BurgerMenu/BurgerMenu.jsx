import { MenuGeneralSection, MenuLinkContainer } from "./BurgerMenuStyled";
import { Outlet, Link } from "react-router-dom";

export function handleMenu() {
  // auth ? setAuth(false):setAuth(true)
  setOpen((prevOpen) => !prevOpen);
  //       true        false
  //       false       true
}

const BurgerMenu = () => {
  return (
    <MenuGeneralSection>
      <MenuLinkContainer>
        <Link to="/">Home</Link>
        <Link to="Productos">Productos</Link>
        <Link to="About">Conocenos</Link>
        <Link to="Contacto">Contacto</Link>
      </MenuLinkContainer>
    </MenuGeneralSection>
  );
};

export default BurgerMenu;
