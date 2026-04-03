import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Contact } from './pages/Contact';

function App() {
  return (
    <>
      <Toaster position="top-right" 
               toastOptions={{ 
                 duration: 4000, 
                 style: { background: '#333', color: '#fff', padding: '16px', borderRadius: '8px', fontSize: '15px' },
                 success: { iconTheme: { primary: '#f5821f', secondary: '#fff'} }
               }} 
      />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:slug" element={<ServiceDetail />} />
          <Route path="/contact-us" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
