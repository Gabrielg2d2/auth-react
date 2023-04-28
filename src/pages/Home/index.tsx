import { TemplateHome } from './template'
import { useEffect } from 'react';
import { useNavigationCustom } from '../../routes/useNavigationCustom';
import auth from '../../entities/Auth/auth';

export function PageHome() {
  const { handleLogout } = useNavigationCustom();

  function handleNavigationLogin() {
    handleLogout()
  }

  useEffect(() => {
    auth.logout()
  },[])

  return (<TemplateHome handleNavigationLogin={handleNavigationLogin} />)
}
