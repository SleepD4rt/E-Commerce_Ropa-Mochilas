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

import { FaUserAlt } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

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
        <img
          src="https://th.bing.com/th/id/OIG.VeRpbC_1p8SYLKD0bOac?pid=ImgGn"
          style={{ width: "100px" }}
        />

        <LinksContainerStyled>
          <HomeContainerStyled>
            <a href="#">
              <LinkContainerStyled>
                <HiHome />
              </LinkContainerStyled>
              Home
            </a>
          </HomeContainerStyled>

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
    </NavbarContainerStyledDivisor>
  );
}

export default Navbar;
