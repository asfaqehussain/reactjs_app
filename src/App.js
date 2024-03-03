import logo from "./logo.svg";
import "./App.scss";
import CustomNavbar from "./shared/components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Page1 from "./pages/Page1/Page1";
import Page2 from "./pages/Page2/Page2";
import Page3 from "./pages/Page4/Page3";
import WhatWeDo from "./pages/WhatWeDo/WhatWeDo";
import OurProduct from "./pages/OurProduct/OurProduct";
import AllDairyProduct from "./pages/AllDairyProducts/AllDairyProduct";
import OurRecipes from "./pages/OurRecipes/OurRecipes";
import Footer from "./shared/components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/our-product" element={<OurProduct />} />
          <Route path="/all-dairy-product" element={<AllDairyProduct />} />
          <Route path="/our-recipes" element={<OurRecipes />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
