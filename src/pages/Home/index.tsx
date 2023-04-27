import { useNavigate } from 'react-router-dom'

import { TemplateHome } from './template'
import { useEffect } from 'react';
import auth from '../../routes/Auth';

export function PageHome() {
  const navigate = useNavigate();

  function handleNavigationLogin() {
    navigate('/login')
  }

  useEffect(() => {
    auth.logout()
  },[])

  return (<TemplateHome handleNavigationLogin={handleNavigationLogin} />)
}
