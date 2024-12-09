import React, { Children, Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
const Home = Loadable(
  lazy(() => import("../../components/HomePage/Home/Home"))
);
const Layout0 = Loadable(
  lazy(() => import("../../components/LayOut0/LayOut0"))
);
const CSR = Loadable(lazy(() => import("../../components/CSR/CSR")));
const CompanyMenu = Loadable(
  lazy(() => import("../../components/CompanyMenu/CompanyMenu/CompanyMenu"))
);
const NewsEvents = Loadable(
  lazy(() => import("../../components/NewsEvents/NewsPhotoTab"))
);
const ServicesMenu = Loadable(
  lazy(() => import("../../components/ServicesMenu/ServicesMenu"))
);
const Login = Loadable(lazy(() => import("../../components/Login/Login")));
const OurBusiness = Loadable(
  lazy(() => import("../../components/OurBusiness/OurBusiness"))
);
const Contact = Loadable(
  lazy(() => import("../../components/ContactDetails/Contact"))
);
import BusinessMenu from "../../components/BusinessMenu/BusinessMenu";
import CertificationDetails from "../../components/CertificationDetails/CertificationDetails";
import SpecificNews from "../../components/NewsEvents/Specificnews/SpecificNews";
import { Layout } from "../../components/Layout6/Layout";
import Layout7 from "../../components/Layout7/Layout7";
import LearnMore from "../../components/HomePage/LearnMore/LearnMore";
import LearnMore3 from "../../components/HomepageLearnMore3/LearnMore3";
import LearnMore4 from "../../components/HomepageLearnMore4/LearnMore4";
import LearnMore5 from "../../components/HomePageLearnMore5/LearnMore5";
import LearnMore6 from "../../components/HomePageLearnMore6/LearnMore6";
import { NotFoundPages } from "../../components/NotFoundComponent/NotFoundPages";
import Loadable from "../../Loader/Loadable";
import AchievementLink from "../../components/HomePage/AchievementLink/AchievementLink";
import ProductList from "../../components/Layout6/Products";
import Products from "../../components/Layout6/Products";
import SustainabilityCardDetails from "../../components/HomePage/Sustainability/SustainabilityCardDetails";
import ScrollToTop from "../../hooks/useScrollToTop";
import Signup from "../../components/Login/Signup";
import Auth from "../../components/Login/Auth";
import UpdatedCC from "../../components/CSR/UpdatedCC";
import TQM from "../../components/HomePage/CardSlider/CardLink/TQM";
import Victoria from "../../components/HomePage/CardSlider/CardLink/Victoria";
import HamsGarment from "../../components/HomePage/CardSlider/CardLink/HamsGarment";
import { ProductCategory } from "../../components/HomePage/LatestProducts/productCategory/ProductCategory";
import TabProductList from "../../components/Layout6/TabProduct/TabProductList";
import TabProduct from "../../components/Layout6/TabProduct";
import CategoryWiseProducts from "../../components/Layout6/CategoryWiseProducts";
import DhakaGarment from "../../components/HomePage/CardSlider/CardLink/DhakaGarment";
import HamsFasion from "../../components/HomePage/CardSlider/CardLink/HamsFasion";
import GarmentTShirt from "../../components/HomePage/CardSlider/CardLink/GarmentTShirt";
import UnderGarment from "../../components/HomePage/CardSlider/CardLink/UnderGarment";
import Knitting from "../../components/HomePage/CardSlider/CardLink/Knitting";
import Dyeing from "../../components/HomePage/CardSlider/CardLink/Dyeing";
import Shanta from "../../components/HomePage/CardSlider/CardLink/Shanta";
import DhakaGW from "../../components/HomePage/CardSlider/CardLink/DhakaGW";
import Cutting from "../../components/Layout6/DiscoverDetail/Cutting";
import DesignStudio from "../../components/Layout6/DiscoverDetail/DesignStudio";
import ProductsDevelopment from "../../components/Layout6/DiscoverDetail/ProductsDevelopment";
import Fabrication from "../../components/Layout6/DiscoverDetail/Fabrication";
import ChestPrint from "../../components/Layout6/DiscoverDetail/ChestPrint";
import Embroidery from "../../components/Layout6/DiscoverDetail/Embroidery";
import Garments from "../../components/Layout6/DiscoverDetail/Garments";
import Wash from "../../components/Layout6/DiscoverDetail/Wash";
import Accreditation from "../../components/Layout6/DiscoverDetail/Accreditation";
import UnderGarments from "../../components/Layout6/DiscoverDetail/UnderGarments";
import Discover from "../../components/Layout6/Discover";
import ElevatingSection from "../../components/LayOut0/ElevatingSection";
import Achievment from "../../components/Layout6/Achievment";
import QualitySection from "../../components/LayOut0/QualitySection";
import PhotoGallery from "../../components/NewsEvents/PhotoGallery";
import OurClients from "../../components/HomePage/OurClients/OurClients";

// =====================New route start =================
const OurBusin = Loadable(
  lazy(() => import("../../components/OurBusin/index"))
);

// =====================New route end ===================

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Main />
        <ScrollToTop />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/learn-more",
        element: <LearnMore />,
      },
      {
        path: "/about",
        element: <Layout0 />,
      },

      {
        path: "/product-details/:id",
        element: <Layout7 />,
      },
      {
        path: "/our-business",
        element: <OurBusiness />,
      },
      {
        path: "/employee-first",
        element: <CertificationDetails />,
      },
      {
        path: "/products",
        element: <Layout />,
      },
      {
        path: "/products/:id",
        element: <Layout />,
      },
      {
        path: "/impact-stories",
        element: <NewsEvents />,
      },
      {
        path: "/single-news",
        element: <SpecificNews />,
      },
      {
        path: "/learn-more-3",
        element: <LearnMore3 />,
      },
      {
        path: "/learn-more-4",
        element: <LearnMore4 />,
      },
      {
        path: "/learn-more-5",
        element: <LearnMore5 />,
      },
      {
        path: "/learn-more-6",
        element: <LearnMore6 />,
      },
      {
        path: "/compliance-csr",
        element: <UpdatedCC />,
      },
      {
        path: "/achieveLink",
        element: <AchievementLink />,
      },
      {
        path: "/productTab",
        element: <Products />,
      },
      {
        path: "/tabProduct",
        element: <TabProduct />,
      },
      {
        path: "/productCatagoryList/:id",
        element: <TabProductList />,
      },
      {
        path: "/product-list/:id",
        element: <CategoryWiseProducts></CategoryWiseProducts>,
      },
      {
        path: "/sustainability",
        element: <SustainabilityCardDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/tqm",
        element: <TQM />,
      },
      {
        path: "/victoriaIntimate",
        element: <Victoria />,
      },
      {
        path: "/hamsGarment",
        element: <HamsGarment />,
      },
      {
        path: "/dhakaGarment",
        element: <DhakaGarment />,
      },
      {
        path: "/hamsFasion",
        element: <HamsFasion />,
      },
      {
        path: "/garmentTShirt",
        element: <GarmentTShirt />,
      },
      {
        path: "/underGarment",
        element: <UnderGarment />,
      },
      {
        path: "/knitting",
        element: <Knitting />,
      },
      {
        path: "/dyeing",
        element: <Dyeing />,
      },
      {
        path: "/shanta",
        element: <Shanta />,
      },
      {
        path: "/DhakaGW",
        element: <DhakaGW />,
      },
      {
        path: "/discover",
        element: <Discover />,
      },
      {
        path: "/products",
        element: <ProductCategory />,
      },
      {
        path: "/designStudio",
        element: <DesignStudio />,
      },
      {
        path: "/productsdevelopment",
        element: <ProductsDevelopment />,
      },
      {
        path: "/fabrication",
        element: <Fabrication />,
      },
      {
        path: "/cutting",
        element: <Cutting />,
      },
      {
        path: "/chestprint",
        element: <ChestPrint></ChestPrint>,
      },
      {
        path: "/embroidery",
        element: <Embroidery />,
      },
      {
        path: "/garments",
        element: <Garments />,
      },
      {
        path: "/wash",
        element: <Wash />,
      },
      {
        path: "/accreditation",
        element: <Accreditation />,
      },
      {
        path: "/undergarments",
        element: <UnderGarments />,
      },
      {
        path: "/elevating",
        element: <ElevatingSection />,
      },
      {
        path: "/achievement",
        element: <Achievment />,
      },
      {
        path: "/buyer",
        element: <OurClients />,
      },
      // ================== new route path start ===============

      // == Our Business Route path start ==

      {
        path: "/our-business-route",
        element: <OurBusin />,
      },

      // == Our Business Route path end ==

      // ================== new route path end =================
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/*",
    element: <NotFoundPages />,
  },
]);

export default router;
