import { Navigate, Outlet } from 'react-router-dom';
import { paths } from './paths';
import { Login } from '../domain/Login';


export function PrivateRoutes() {
  const isAuth = new Login().persistLogin();
  return isAuth ? <Outlet /> : <Navigate to={paths.home} />;
}
