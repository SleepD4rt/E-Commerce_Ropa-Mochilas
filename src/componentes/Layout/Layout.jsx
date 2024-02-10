import Navbar from "../Navbar/Navbar";
import { ContentContainerStyled, LayoutContainerStyled } from "./LayoutStyles";
import { children } from "react";
function Layout(open, setOpen) {
  return (
    <LayoutContainerStyled>
      <Navbar />

      <ContentContainerStyled>{children}</ContentContainerStyled>
    </LayoutContainerStyled>
  );
}

export default Layout;
