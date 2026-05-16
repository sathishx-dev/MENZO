import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Home from './pages/Home';
import About from './pages/About';
import Accessories from './pages/Accessories';
import Bag from './pages/Bag';
import Bestseller from './pages/Bestseller';
import Casual from './pages/Casual';
import Clearance from './pages/Clearance';
import Collection from './pages/Collection';
import Contact from './pages/Contact';
import Formal from './pages/Formal';
import Login from './pages/Login';
import Myaccount from './pages/Myaccount';
import Newarrial from './pages/Newarrial';
import Ongoingoffer from './pages/Ongoingoffer';
import Order from './pages/Order';
import Reg from './pages/Reg';
import Streetwear from './pages/Streetwear';
import Whishlist from './pages/Whishlist';

import useGlobalScript from './useGlobalScript';

function App() {
  useGlobalScript(); 

  return (
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/bestseller" element={<Bestseller />} />
        <Route path="/casual" element={<Casual />} />
        <Route path="/clearance" element={<Clearance />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/formal" element={<Formal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myaccount" element={<Myaccount />} />
        <Route path="/newarrial" element={<Newarrial />} />
        <Route path="/ongoingoffer" element={<Ongoingoffer />} />
        <Route path="/order" element={<Order />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/streetwear" element={<Streetwear />} />
        <Route path="/whishlist" element={<Whishlist />} />
      </Routes>
  );
}

export default App;
