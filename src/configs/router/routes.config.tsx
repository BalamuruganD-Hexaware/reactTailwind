import { Navigate, RouteObject } from 'react-router-dom';
import NotAuthenticated from '@/common/pages/NotAuthenticated';
import NotFound from '@/common/pages/NotFound';
import RedirectHere from '@/common/pages/RedirectHere';
import UnAuthorized from '@/common/pages/UnAuthorized';
import homeRoutes from '@/views/home/home.routes';
import brokerRoutes from '@/views/broker/broker.routes';
import MultiAuthProvider from '../auth/MultiAuthProvider';
import Layout from '@/theme/pages/Layout';

const routes = () => {
  const all_routes: RouteObject[] = [
    { path: '/redirect-here', element: <RedirectHere /> },
    { path: '/401', element: <NotAuthenticated /> },
    { path: '/403', element: <UnAuthorized /> },
    { path: '/404', element: <NotFound /> },
    { path: '*', element: <Navigate to="/404" /> },
    { path: '/login/*', element: <MultiAuthProvider /> },
    {
      element: <Layout />,
      children: [...homeRoutes, ...brokerRoutes],
    },
  ];
  return all_routes;
};

export default routes;
