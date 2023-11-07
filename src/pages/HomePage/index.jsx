import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Projekt } from '../../components/Projekt';

export const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <Projekt />
      <Footer />
    </div>
  );
};
