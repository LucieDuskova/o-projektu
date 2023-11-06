import { createRoot } from 'react-dom/client';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Linda } from '../../components/Linda';
import './style.css';

createRoot(document.querySelector('#app')).render(
  <>
    <Header />
    <Linda />
    <Footer />
  </>,
);
