import { Navigate, Outlet } from 'react-router-dom';
import Auth from './routes/Auth';

export function PrivateRoute() {
  return Auth.isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
}

