import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'


type TemplateLoginType = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export function TemplateLogin(props: TemplateLoginType) {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Auth</h1>
      <main className="main">
        <form className='form' onSubmit={props.handleSubmit}>
          <input className='email' name="email" type='email'/>
          <input className='password' name="password" type='password'/>
          <button className="submit">Submit</button>
        </form>
      </main>
    </>
  )
}
