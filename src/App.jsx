import "./App.css";
import Navbar from "./componentes/Navbar/Navbar";
import Hero from "./componentes/Hero/Hero";
// import Categorias from "./componentes/Categorias/Categorias";
import Layout from "./componentes/Layout/Layout";
import Productos from "./componentes/Productos/Productos";
import Footer from "./componentes/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Hero />
        {/* <Categorias /> */}
        <Productos />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
