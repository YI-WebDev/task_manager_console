import { Outlet, Route, Routes } from "react-router-dom";
import usePath from "../../hooks/usePath";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import DashboardPage from "../pages/dashboard";
import AuthenticatedPage from "./AuthenticatedPage";
import UnAuthenticatedPage from "./UnAuthenticatedPage";

function AuthenticatedPageLayout() {
  return (
    <AuthenticatedPage>
      <Outlet />
    </AuthenticatedPage>
  );
}

function UnAuthenticatedPageLayout() {
  return (
    <UnAuthenticatedPage>
      <Outlet />
    </UnAuthenticatedPage>
  );
}

export default function RoutesProvider() {
  const path = usePath();
  return (
    <>
      <Routes>
        <Route element={<AuthenticatedPageLayout />}>
          <Route path={path.root()} element={<DashboardPage />} />
        </Route>
        <Route element={<UnAuthenticatedPageLayout />}>
          <Route path={path.login()} element={<LoginPage />} />
          <Route path={path.register()} element={<RegisterPage />} />
        </Route>
      </Routes>
    </>
  );
}
