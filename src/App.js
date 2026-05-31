import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import CasesPage from "./pages/Case";
import CPUsPage from "./pages/CPU";
import MobosPage from "./pages/Mobo";
import GPUsPage from "./pages/GPU";
import RAMsPage from "./pages/RAM";
import StoragesPage from "./pages/Storage";
import PSUsPage from "./pages/PSU";
import CoolingPage from "./pages/Cooling";
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer';
import CartPage from './pages/CartPage';
import SignUp from './pages/SignUp';
import About from './pages/About';
import ProductDetail from "./pages/ProductURL";

function App() {
  return (
    <div className="App">
      <HashRouter>
      <CartProvider>
      <NavBar />
      <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductsPage" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/Case" element={<CasesPage />} />
        <Route path="/CPU" element={<CPUsPage />} />
        <Route path="/Mobo" element={<MobosPage />} />
        <Route path="/GPU" element={<GPUsPage />} />
        <Route path="/RAM" element={<RAMsPage />} />
        <Route path="/Storage" element={<StoragesPage />} />
        <Route path="/PSU" element={<PSUsPage />} />
        <Route path="/Cooling" element={<CoolingPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/About" element={<About />} />
      </Routes>
      </main>
      <Footer />
     </CartProvider>
    </HashRouter>
    </div>
  );
}

export default App;
