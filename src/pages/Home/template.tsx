import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './Login.css'

type TemplateHomeType = {
  handleNavigationLogin: () => void
}

export function TemplateHome(props: TemplateHomeType) {
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
        <h1>Home</h1>
        <button className="link" onClick={props.handleNavigationLogin}>
          Login to access the dashboard
        </button>
      </main>
    </>
  )
}
