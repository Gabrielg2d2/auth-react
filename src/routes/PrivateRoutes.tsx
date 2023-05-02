import { Navigate, Outlet } from 'react-router-dom';
import { paths } from './paths';
import { PersistAuth } from '../entities/PersistAuth';

export function PrivateRoutes() {
  const isAuth = new PersistAuth().getPersist();
  return isAuth ? <Outlet /> : <Navigate to={paths.home} />;
}
