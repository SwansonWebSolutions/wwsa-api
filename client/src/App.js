import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';

// Components
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />

      </Routes>
    </Layout>
    </BrowserRouter>

  );
}

export default App;
