import { RouteObject } from 'react-router-dom';
import Home from './pages/Home';

const homeRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
];

export default homeRoutes;
