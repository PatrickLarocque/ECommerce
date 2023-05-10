import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./views/home/Home";
import Navbar from "./views/global/Navbar"
import Footer from "./views/global/Footer"
import Checkout from "./views/checkout/Checkout";
import Confirmation from "./views/checkout/Confirmation";
import ItemDetails from "./views/itemDetails/ItemDetails";
import CartMenu from "./views/global/CartMenu";
import Customizer from "./views/customizer/Customizer";
import Canvas from "./canvas"
import Landing from './views/customizer/Landing';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


function App() {

  return (
    <>
    <div className={`app ${location.pathname === '/customizer' ? "customizer" : "app"}`}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          } />
          <Route path="item/:itemId" element={
            <>
              <Navbar />
              <ItemDetails />
              <Footer />
            </>
          } />
          <Route path="checkout" element={
            <>
              <Navbar />
              <Checkout />
              <Footer />
            </>

          } />
          <Route path="checkout/success" element={
            <>
              <Navbar />
              <Confirmation />
              <Footer />
            </>
            
          } />

          <Route path="customizer" element={
            <>
              <Landing />
              <Canvas />
              <Customizer />
            </> 
          } />

        </Routes>
        <CartMenu />
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;