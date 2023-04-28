import { SidebarTemplate } from "./template";
import { useNavigationCustom } from "../../routes/useNavigationCustom";

export function Sidebar() {
    const { handleLogout, handleAbout, handleDashboard } = useNavigationCustom();
    
    return (
      <SidebarTemplate
        handleLogout={handleLogout}
        handleDashboard={handleDashboard}
        handleAbout={handleAbout}
      />
    )
  }
  