import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import Homepage from "pages/homepage";
import ProductCatalog from "pages/product-catalog";
import ProductDetailPage from "pages/product-detail-page";
import NotFound from "pages/NotFound";
import About from "pages/about";
import ContactUs from 'pages/ContactUs.jsx'

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/product-catalog" element={<ProductCatalog />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;