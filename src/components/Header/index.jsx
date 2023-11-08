import { Link } from 'react-router-dom';
import './style.css';

export const Header = () => {
  return (
    <header>
      <div>
        <h1>Patchwork</h1>
      </div>
      <nav>
        <Link to="/">Homepage</Link>
        <Link to="/linda">Linda</Link>
        <Link to="/lucka">Lucka</Link>
      </nav>
    </header>
  );
};
