import { createRoot } from 'react-dom/client';
import { HomePage } from '/pages/HomePage';
import '/global.css';

import { Footer } from '../Footer';
import './style.css';
import { Header } from '../Header';

export const Linda = () => {
  return (
    <main>
      <Header />
      <img
        className="autorka"
        src="./components/Linda/img/Linda.jpg"
        alt="Linda Hrdinová"
      />
      <p>
        Jmenuji se Linda Hrdinová a tvoření je tak trochu smysl mého života. Na
        střední škole jsem nemohla o hodně předmětech říct, že by mě bavily, ale
        informatika zrovna tenhle předmět takový byl. Front-end tyhle moje dva
        světy spojuje. A to je i důvod,proč jsem se na digitální akaemdii
        přihlásila.
      </p>
      <Footer />
    </main>
  );
};
