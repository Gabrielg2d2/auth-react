import { SidebarTemplate } from "./template";
import { useNavigationCustom } from "../../routes/useNavigationCustom";

export function Sidebar() {
    const { handleHome, handleAbout, handleDashboard } = useNavigationCustom();
    
    return (
      <SidebarTemplate
        handleLogout={handleHome}
        handleDashboard={handleDashboard}
        handleAbout={handleAbout}
      />
    )
  }
  