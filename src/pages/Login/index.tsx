import { FormEvent, useEffect } from 'react'
import { TemplateLogin } from './template'
import { useNavigationCustom } from '../../routes/useNavigationCustom';
import { Login } from '../../domain/Login';

type LoginType = {
  email: string
  password: string
}

const login = new Login();

export function PageLogin() {
  const { handleDashboard } = useNavigationCustom();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData.entries())
  
    const response = await login.signIn(data as LoginType)
    if (response) handleDashboard()
  }

  useEffect(() => { 
    (async () => {
      const email = document.querySelector('.email') as HTMLInputElement
      const password = document.querySelector('.password') as HTMLInputElement
      email.value = "usertest@gmail.com"
      password.value = "123456"
  
      await login.signOut()
    })()
   }, [])

  return (<TemplateLogin handleSubmit={handleSubmit}/>)
}