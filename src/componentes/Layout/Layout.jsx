import Navbar from "../Navbar/Navbar";
import { ContentContainerStyled, LayoutContainerStyled } from "./LayoutStyles";
import { children } from "react";
import Footer from "../../paginas/Footer/Footer";

function Layout() {
  return (
    <LayoutContainerStyled>
      <Navbar />
      <ContentContainerStyled>{children}</ContentContainerStyled>
      <Footer />
    </LayoutContainerStyled>
  );
}

export default Layout;
