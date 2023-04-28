import { useNavigate } from "react-router-dom";
import { SidebarTemplate } from "./template";

export function Sidebar() {
    const navigation = useNavigate();

    function handleLogout() {
      navigation('/login');
    }

    function handleDashboard() {
      navigation('/dashboard');
    }

    function handleAbout() {
      navigation('/about');
    }
    
    return (
      <SidebarTemplate
        handleLogout={handleLogout}
        handleDashboard={handleDashboard}
        handleAbout={handleAbout}
      />
    )
  }
  