import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage, AboutPage, CarePage } from './pages/Home';
import { ShopPage } from './pages/Shop';
import { ProductPage, CartPage } from './pages/Product';
import { DashboardPage } from './pages/Dashboard';
import { WorkshopsPage, ContactPage } from './pages/ContentPages';
import { SearchPage } from './pages/Search';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/care" element={<CarePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/workshops" element={<WorkshopsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;