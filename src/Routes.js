import React from "react";
import { Routes } from "react-router-dom";
import RouteHandler from "./components/RouteHandler";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from './pages/NotFound';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AdPage from "./pages/AdPage";
import AddAd from "./pages/AddAd";
import Ads from "./pages/Ads";

const Rotas = () => {
  return (
    <Routes>
      <RouteHandler path="/" element={<Home />} />
      <RouteHandler path="/about" element={<About />} />
      <RouteHandler path="/signin" element={<SignIn />} />
      <RouteHandler path="/signup" element={<SignUp />} />
      <RouteHandler path="/ad/:id" element={<AdPage />} />
      <RouteHandler path="/ads" element={<Ads />} />
      <RouteHandler private path="/post-an-ad" element={<AddAd />} />
      <RouteHandler element={<NotFound />} />
    </Routes>
  );
};

export default Rotas;
