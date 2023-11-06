import './style.css';
import '../Linda/index.jsx';

export const Header = () => {
  return (
    <header>
      <div>
        <h1>Patchwork</h1>
        <nav>
          <a href="./index.html">Domů</a>
          <a href="../../components/Linda/index.html">Linda Hrdinová</a>
          <a href="../../components/Lucka/index.html">Lucie Dušková</a>
        </nav>
      </div>
    </header>
  );
};
