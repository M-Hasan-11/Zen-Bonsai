import React, { useEffect, Suspense } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import { Layout } from './components/Layout';

// Lazy load page components
const HomePage = React.lazy(() => import('./pages/Home').then(module => ({ default: module.HomePage })));
const AboutPage = React.lazy(() => import('./pages/Home').then(module => ({ default: module.AboutPage })));
const CarePage = React.lazy(() => import('./pages/Home').then(module => ({ default: module.CarePage })));

const ShopPage = React.lazy(() => import('./pages/Shop').then(module => ({ default: module.ShopPage })));

const ProductPage = React.lazy(() => import('./pages/Product').then(module => ({ default: module.ProductPage })));
const CartPage = React.lazy(() => import('./pages/Cart').then(module => ({ default: module.CartPage })));

const DashboardPage = React.lazy(() => import('./pages/Dashboard').then(module => ({ default: module.DashboardPage })));

const WorkshopsPage = React.lazy(() => import('./pages/ContentPages').then(module => ({ default: module.WorkshopsPage })));
const ContactPage = React.lazy(() => import('./pages/ContentPages').then(module => ({ default: module.ContactPage })));

const SearchPage = React.lazy(() => import('./pages/Search').then(module => ({ default: module.SearchPage })));
const AuthPage = React.lazy(() => import('./pages/Auth').then(module => ({ default: module.AuthPage })));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const LoadingFallback = () => (
  <div className="min-h-screen bg-background-dark flex items-center justify-center text-white">
    Loading...
  </div>
);

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <AuthProvider>
        <CartProvider>
          <ToastProvider>

            <Layout>
              <Suspense fallback={<LoadingFallback />}>
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
                  <Route path="/auth" element={<AuthPage />} />
                </Routes>
              </Suspense>
            </Layout>
          </ToastProvider>
        </CartProvider>
      </AuthProvider>
    </HashRouter>
  );
};

export default App;
