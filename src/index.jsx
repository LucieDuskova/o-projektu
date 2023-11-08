import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Projekt } from './pages/HomePage';
import { Lucka } from './pages/Lucka';
import { Linda } from './pages/Linda';
import './global.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Projekt /> },
      {
        path: '/linda',
        element: <Linda />,
      },
      {
        path: '/lucka',
        element: <Lucka />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
