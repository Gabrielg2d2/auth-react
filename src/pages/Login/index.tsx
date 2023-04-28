
import { FormEvent, useEffect } from 'react'
import { TemplateLogin } from './template'
import { useNavigationCustom } from '../../routes/useNavigationCustom';
import { Login } from '../../domain/Login';

type LoginType = {
  email: string
  password: string
}

export function PageLogin() {
  const login = new Login();
  const { handleDashboard } = useNavigationCustom();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData.entries())
    const response = await login.login(data as LoginType)
    if (response) handleDashboard()
  }

  useEffect(() => {
    const email = document.querySelector('.email') as HTMLInputElement
    const password = document.querySelector('.password') as HTMLInputElement

    email.value = "usertest@gmail.com"
    password.value = "123456"

  }, [])


  return (<TemplateLogin handleSubmit={handleSubmit}/>)
}
