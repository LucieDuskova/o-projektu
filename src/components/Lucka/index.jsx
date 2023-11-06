import { createRoot } from 'react-dom/client';
import { HomePage } from '/pages/HomePage';
import '/global.css';

import { Footer } from '../Footer';
import './style.css';
import { Header } from '../Header';

createRoot(document.querySelector('#app')).render(
  <>
    <Header />
    <img src="./img/Lucie_Duskova.jpeg" alt="Lucie Dušková" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ullam non
      rerum ipsa voluptatum exercitationem assumenda odit expedita molestiae
      porro, reiciendis nostrum, doloribus ea impedit officiis? Repellendus a
      magnam quia!
    </p>
    <Footer />
  </>,
);
