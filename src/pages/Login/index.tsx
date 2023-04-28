
import { FormEvent, useEffect } from 'react'
import { TemplateLogin } from './template'
import auth from '../../routes/Auth';
import { sigInFake } from '../../service/sigInFake';
import { useNavigationCustom } from '../../routes/useNavigationCustom';

type LoginType = {
  email: string
  password: string
}

export function PageLogin() {
  const { handleDashboard } = useNavigationCustom();

  async function postSigIn(data: LoginType){
    if(!data) return alert('Email or password invalid')
    const response = await sigInFake()
    auth.setAuth(response.data)
    handleDashboard()
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData.entries())
    await postSigIn(data as LoginType)
  }

  useEffect(() => {
    const email = document.querySelector('.email') as HTMLInputElement
    const password = document.querySelector('.password') as HTMLInputElement

    email.value = "usertest@gmail.com"
    password.value = "123456"

    auth.logout()
  }, [])


  return (<TemplateLogin handleSubmit={handleSubmit}/>)
}
