import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { PAGE_NAMES } from "shared/config";

const MainPage = lazy(() => import("./main-page"));
const NotFoundPage = lazy(() => import("./not-found"));
const NotAuthPage = lazy(() => import("./not-auth"));

export const Routing = () => {
  return (
    <Routes>
      <Route path={PAGE_NAMES.HOME} element={<MainPage />} />
      <Route path={PAGE_NAMES.NOT_AUTH} element={<NotAuthPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

{
  /* <Routes>
{user.isAuth &&
  authRoutes.map(({ path, element }) => (
    <Route exact key={path} path={path} element={element} />
  ))}
{publicRoutes.map(({ path, element }) => (
  <Route exact key={path} path={path} element={element} />
))}
</Routes> */
}
