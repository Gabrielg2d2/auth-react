import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageHome } from '../pages/Home';
import { PageLogin } from '../pages/Login';
import { PageDashboard } from '../pages/Dashboard';
import { PageAbout } from '../pages/About';
import { Sidebar } from '../components/Sidebar';


export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PageHome />} />
        <Route path="/login" element={<PageLogin />} />

        <Route path="/" element={<Sidebar />} >
          <Route path="dashboard" element={<PageDashboard />} />
          <Route path="about" element={<PageAbout />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
