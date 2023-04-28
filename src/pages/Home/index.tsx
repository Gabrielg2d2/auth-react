import { TemplateHome } from './template'
import { useEffect } from 'react';
import auth from '../../routes/Auth';
import { useNavigationCustom } from '../../routes/useNavigationCustom';

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
