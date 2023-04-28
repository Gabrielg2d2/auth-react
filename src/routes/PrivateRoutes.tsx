import { Navigate, Outlet } from 'react-router-dom';
import { paths } from './paths';
import auth from '../entities/Auth/auth';

export function PrivateRoutes() {
  return auth.isAuthenticated() ? <Outlet /> : <Navigate to={paths.home} />;
}
