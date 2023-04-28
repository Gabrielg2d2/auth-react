import { useNavigate } from "react-router-dom";

export function useNavigationCustom() {
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

    return { handleLogout, handleDashboard, handleAbout };
}