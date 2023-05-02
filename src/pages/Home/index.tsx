import { TemplateHome } from './template'
import { useEffect } from 'react';
import { useNavigationCustom } from '../../routes/useNavigationCustom';
import { Login } from '../../domain/Login';

export function PageHome() {
  const { handleLogout } = useNavigationCustom();

  function handleNavigationLogin() {
    handleLogout()
  }

  useEffect(() => {
    const login = new Login()
    login.signOut()
  },[])

  return (<TemplateHome handleNavigationLogin={handleNavigationLogin} />)
}
