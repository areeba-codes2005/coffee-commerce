import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ChooseUs from "./components/ChooseUs/ChooseUs";
import Navbar from "./components/Navbar/Navbar";
import logo from "./assets/logo.png";
import { menuItems, socialIcons } from "./components/data/navitems";
import HomePage from "./components/HomePage/HomePage";
import ShopCategory from "./components/ShopCategory/ShopCategory";
import { RiCupFill } from "react-icons/ri";
import Product from "./components/Product/product";
import {
  NewProduct,
  NewArrivalProduct,
  ProducsNewProduct,
} from "./components/data/ProductData";
import Achievements from "./components/Achievements/Achievements";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQs from "./components/FAQs/FAQs";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import DropBlog from "./components/DropBlog/DropBlog";
import DropFAQs from "./components/DropFAQs/DropFAQs";
import DropContact from "./components/DropContact/DropContact";
import { leftdata, rightdata } from "./components/data/DropBlogData";
import { infoCards, faqCards } from "./components/data/DropFAQsData";
import Banner from "./components/Banner/Banner";
import NewArrival from "./components/NewArrival/NewArrival";
import NewFlavors from "./components/NewFlavors/NewFlavors";
import { defaultImage, coffeeData } from "./components/data/new-flav";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <Navbar
        menuItems={menuItems}
        brandLogo={logo}
        socialIcons={socialIcons}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <ShopCategory />
              <NewArrival />
              <Product data={NewArrivalProduct} />
              <ChooseUs />
              <Product
                icon={RiCupFill}
                subtitle="PRODUCTS"
                title="Discover What's New Product"
                data={NewProduct}
              />
              <Achievements />
              <Testimonials />
              <NewFlavors
                defaultImage={defaultImage}
                coffeeData={coffeeData}
                heading="New Flavors You Must Try"
              />
              <FAQs />
              <Blog />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Banner title="About Us" />
              <ChooseUs />
              <Achievements />
              <Testimonials />
              <FAQs />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <Banner title="Product Archive" />
              <ShopCategory />
              <NewArrival />
              <Product data={NewArrivalProduct} />
              <Product
                icon={RiCupFill}
                subtitle="PRODUCTS"
                title="Discover What's New Product"
                data={ProducsNewProduct}
              />
              <NewFlavors
                defaultImage={defaultImage}
                coffeeData={coffeeData}
                heading="New Flavors You Must Try"
              />
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
              <Banner title="Blog" />
              <DropBlog leftdata={leftdata} rightdata={rightdata} />
            </>
          }
        />
        <Route
          path="/faq"
          element={
            <>
              <Banner title="Faq" />
              <DropFAQs infoCards={infoCards} faqCards={faqCards} />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Banner title="Contact Us" />
              <DropContact />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
