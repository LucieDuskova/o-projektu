import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Projekt } from '../../components/Projekt';
import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <Projekt />
      <Footer />
    </div>
  );
};
