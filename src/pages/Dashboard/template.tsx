import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'


export function TemplateDashboard() {
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
        <h1>Dashboard</h1>
      </main>
    </>
  )
}
