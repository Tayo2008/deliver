import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/nav/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import StoreProvider from "./Store/provider";
import Drink from "./components/drink/Drink";
import Contact from "./components/contact/Contact";
import ViewProduct from "./components/product/ViewProduct";
import About from "./components/about/About";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drink" element={<Drink />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/view" element={<ViewProduct />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
