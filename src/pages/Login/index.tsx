
import { FormEvent, useEffect } from 'react'
import { TemplateLogin } from './template'
import auth from '../../routes/Auth';
import { sigInFake } from '../../service/sigInFake';
import { useNavigate } from 'react-router-dom';

type LoginType = {
  email: string
  password: string
}

export function PageLogin() {

  const navigation  = useNavigate()

  async function postSigIn(data: LoginType){
    if(!data) return alert('Email or password invalid')
    const response = await sigInFake()
    auth.setAuth(response.data)
    navigation('/dashboard')
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
  }, [])


  return (<TemplateLogin handleSubmit={handleSubmit}/>)
}
