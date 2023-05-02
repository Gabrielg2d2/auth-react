import { useAdapterNavigationWeb } from "./AdapterNavigationWeb";
import { paths } from "./paths";

export function useNavigationCustom() {
    const {navigationAbout, navigationDashboard, navigationHome, navigationLogout} = useAdapterNavigationWeb();

    function handleHome() {
      navigationHome(paths.home);
    }

    function handleLogout() {
      navigationLogout(paths.login);
    }

    function handleDashboard() {
      navigationDashboard(paths.dashboard);
    }

    function handleAbout() {
      navigationAbout(paths.about);
    }

    return { handleLogout, handleDashboard, handleAbout, handleHome };
}