import { createRoot } from 'react-dom/client';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Lucka } from '../../components/Lucka';
import './style.css';

createRoot(document.querySelector('#app')).render(
  <>
    <Header />
    <Lucka />
    <Footer />
  </>,
);
