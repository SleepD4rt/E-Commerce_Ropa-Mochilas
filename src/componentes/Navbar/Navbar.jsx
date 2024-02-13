import {
  NavbarContainerStyledDivisor,
  NavbarInfoContainer,
  NavbarInfo,
  NavbarLineDivisor,
  NavbarContainerStyled,
  MenuContainerStyled,
  LinkLogo,
  LinkRouter,
  Cart,
  CartIcon,
  CartBubble,
  CartBubbleContainer,
  NavbarLogoBetweenMenuCart,
} from "./NavbarStyles";

// const imgUrl = new URL("./img/logo.png", import.meta.url).href;
// console.log(imgUrl);

import { FaUserAlt } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useState } from "react";
import cartIcon from "../../img/cartBag.png";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  function HandleBurger() {
    setClicked((prevClicked) => !prevClicked);
  }

  return (
    <NavbarContainerStyledDivisor>
      <BurgerMenu clicked={clicked ? 1 : 0} />
      <NavbarInfoContainer>
        <AiOutlineLeft />
        <NavbarInfo>
          <h2>Envios Gratis en compras superiores a $70.000</h2>
        </NavbarInfo>

        <AiOutlineRight />
      </NavbarInfoContainer>
      <NavbarLineDivisor />
      <NavbarLogoBetweenMenuCart>
        <NavbarContainerStyled>
          <LinkLogo>
            <Link to="/">
              <img
                src="https://th.bing.com/th/id/OIG.VeRpbC_1p8SYLKD0bOac?pid=ImgGn"
                style={{ width: "96px" }}
              />
            </Link>
          </LinkLogo>

          <LinkRouter>
            <Link to="/" onClick={HandleBurger}>
              Inicio
            </Link>
            <Link to="Productos">Productos</Link>
            <Link to="About">Conocenos</Link>
            <Link to="Contacto">Contacto</Link>
          </LinkRouter>
        </NavbarContainerStyled>

        <MenuContainerStyled>
          <AiOutlineMenu onClick={HandleBurger} />
        </MenuContainerStyled>
        <Cart>
          <CartBubbleContainer>
            <CartBubble>0</CartBubble>
          </CartBubbleContainer>

          <CartIcon>
            <img src={cartIcon} />
          </CartIcon>
        </Cart>
      </NavbarLogoBetweenMenuCart>
      <NavbarLineDivisor />
      <Outlet />
    </NavbarContainerStyledDivisor>
  );
}

export default Navbar;
