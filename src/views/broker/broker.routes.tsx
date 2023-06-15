import { RouteObject } from 'react-router-dom';
import Brokers from './pages/Brokers';

const brokerRoutes: RouteObject[] = [
  {
    path: '/brokers',
    element: <Brokers />,
  },
];

export default brokerRoutes;
