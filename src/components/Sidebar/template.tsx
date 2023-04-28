import { PrivateRoutes } from "../../routes/PrivateRoutes";

type SidebarType = {
    handleLogout: () => void;
    handleDashboard: () => void;
    handleAbout: () => void;
}

export function SidebarTemplate(props: SidebarType) {
    
    return (
      <div className="container">
        <nav className="sidebar">
          <h1 className="title-sidebar">Sidebar</h1>
  
          <ul className="list-sidebar">
            <li>
             <button onClick={props.handleDashboard}>Dashboard</button>
            </li>
            <li>
             <button onClick={props.handleAbout}>About</button>
            </li>
            <li>
             <button onClick={props.handleLogout}>SignOut</button>
            </li>
          </ul>
        </nav>
        <PrivateRoutes />
      </div>
    )
  }
  