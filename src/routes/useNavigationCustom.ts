import { useNavigate } from "react-router-dom";
import { paths } from "./paths";

export function useNavigationCustom() {
    const navigation = useNavigate();

    function handleHome() {
      navigation(paths.home);
    }

    function handleLogout() {
      navigation(paths.login);
    }

    function handleDashboard() {
      navigation(paths.dashboard);
    }

    function handleAbout() {
      navigation(paths.about);
    }

    return { handleLogout, handleDashboard, handleAbout, handleHome };
}