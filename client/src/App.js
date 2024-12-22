import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Ecommerce from './pages/Ecommerce';
// Components
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="ecommerce" element={<Ecommerce />} />
      </Routes>
    </Layout>
    </BrowserRouter>

  );
}

export default App;
