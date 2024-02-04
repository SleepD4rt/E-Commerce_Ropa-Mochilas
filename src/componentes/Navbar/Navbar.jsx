import {
  NavbarContainerStyledDivisor,
  NavbarInfoContainer,
  NavbarInfo,
  LinkContainerStyled,
  NavbarLineDivisor,
  LinksContainerStyled,
  NavbarContainerStyled,
  UserNavStyled,
  UserContainerStyled,
  SpanStyled,
  MenuContainerStyled,
  HomeContainerStyled,
} from "./NavbarStyles";

// const imgUrl = new URL("./img/logo.png", import.meta.url).href;
// console.log(imgUrl);

import { FaUserAlt } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <NavbarContainerStyledDivisor>
      <NavbarInfoContainer>
        <AiOutlineLeft />
        <NavbarInfo>
          <h2>Envios Gratis en compras superiores a $70.000</h2>
        </NavbarInfo>
        <AiOutlineRight />
      </NavbarInfoContainer>
      <NavbarLineDivisor />
      <NavbarContainerStyled>
        <Link to="/">
          <img
            src="https://th.bing.com/th/id/OIG.VeRpbC_1p8SYLKD0bOac?pid=ImgGn"
            style={{ width: "96px" }}
          />
        </Link>
        <Link to="/">Home</Link>
        <Link to="Productos">Productos</Link>

        <LinksContainerStyled>
          {/* <HomeContainerStyled>
            <a href="#">
              <LinkContainerStyled>
                <HiHome />
              </LinkContainerStyled>
              Home
            </a>
          </HomeContainerStyled> */}

          <UserNavStyled>
            <UserContainerStyled>
              <SpanStyled>Iniciar Sesión</SpanStyled>
              <FaUserAlt />
            </UserContainerStyled>
          </UserNavStyled>
          <MenuContainerStyled>
            <AiOutlineMenu />
          </MenuContainerStyled>
        </LinksContainerStyled>
      </NavbarContainerStyled>
      <Outlet />
    </NavbarContainerStyledDivisor>
  );
}

export default Navbar;
