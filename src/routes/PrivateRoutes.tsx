import { Navigate, Outlet } from 'react-router-dom';
import Auth from './Auth';
import { paths } from './paths';

export function PrivateRoutes() {
  return Auth.isAuthenticated() ? <Outlet /> : <Navigate to={paths.login} />;
}
