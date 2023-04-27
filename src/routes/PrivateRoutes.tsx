import { Navigate, Outlet } from 'react-router-dom';
import Auth from './Auth';

export function PrivateRoutes() {
  return Auth.isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
}
