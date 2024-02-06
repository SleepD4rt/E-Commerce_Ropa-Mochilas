import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home/Home";
import NoPage from "./paginas/NoPage/NoPage";
import Layout from "./componentes/Layout/Layout";
import Productos from "./paginas/Productos/Productos";
import About from "./paginas/About/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Productos" element={<Productos />} />
            <Route path="About" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
