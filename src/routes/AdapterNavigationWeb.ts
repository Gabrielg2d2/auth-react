import { useNavigate } from "react-router-dom";

export function useAdapterNavigationWeb() {
    const navigation = useNavigate();

    function navigationHome(path: string) {
      navigation(path);
    }

    function navigationLogout(path: string) {
      navigation(path);
    }

    function navigationDashboard(path: string) {
      navigation(path);
    }

    function navigationAbout(path: string) {
      navigation(path);
    }

    return { navigationLogout, navigationDashboard, navigationAbout, navigationHome };
 
}