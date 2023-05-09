import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./views/home/Home";
import Navbar from "./views/global/Navbar"
import Footer from "./views/global/Footer"
import Checkout from "./views/checkout/Checkout";
import Confirmation from "./views/checkout/Confirmation";
import ItemDetails from "./views/itemDetails/itemDetails";
import CartMenu from "./views/global/CartMenu";


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
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />
        </Routes>
        <CartMenu />
        <Footer />
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;