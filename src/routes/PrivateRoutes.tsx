import { Navigate, Outlet } from 'react-router-dom';
import { paths } from './paths';
import { PersistAuth } from '../entities/PersistAuth';

const isAuth = new PersistAuth().getPersist();

export function PrivateRoutes() {
  return isAuth ? <Outlet /> : <Navigate to={paths.home} />;
}
