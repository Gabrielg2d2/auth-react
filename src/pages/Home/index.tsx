import { useNavigate } from 'react-router-dom'

import { TemplateHome } from './template'

export function PageHome() {
  const navigate = useNavigate();

  function handleNavigationLogin() {
    navigate('/login')
  }

  return (<TemplateHome handleNavigationLogin={handleNavigationLogin} />)
}
