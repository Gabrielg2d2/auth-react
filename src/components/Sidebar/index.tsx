import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "../../routes/PrivateRoutes";

export function Sidebar() {
    const navigation = useNavigate();
    
    return (
      <div className="container">
        <nav className="sidebar">
          <h1 className="title-sidebar">Sidebar</h1>
  
          <ul className="list-sidebar">
            <li>
             <button onClick={() => navigation('/dashboard')}>Dashboard</button>
            </li>
            <li>
             <button onClick={() => navigation('/about')}>About</button>
            </li>
            <li>
             <button onClick={() => navigation('/login')}>SignOut</button>
            </li>
          </ul>
        </nav>
        <PrivateRoutes />
      </div>
    )
  }
  