import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageHome } from '../pages/Home';
import { PageLogin } from '../pages/Login';
import { PageDashboard } from '../pages/Dashboard';
import { PageAbout } from '../pages/About';
import { Sidebar } from '../components/Sidebar';
import { domainPrivate, domainPublic, paths } from './paths';

export function AdapterReactRouterDom() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={domainPublic}>
          <Route index element={<PageHome />} />
          <Route path={paths.login} element={<PageLogin />} />
        </Route>

        <Route path={domainPrivate} element={<Sidebar />} >
          <Route path={paths.dashboard} element={<PageDashboard />} />
          <Route path={paths.about} element={<PageAbout />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
