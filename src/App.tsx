import type { Router as RemixRouter } from '@remix-run/router';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { FirstScreenRoutes } from './modules/firstScreen/routes';
import { loginRoutes } from './modules/login/routes';
import { ProductScreens } from './modules/product/routes';
import { verifyLoggedIn } from './shared/functions/connection/auth';
import { useGlobalContext } from './shared/hooks/useGlobalContext';
import { useNotification } from './shared/hooks/useNotification';

function App() {
  const { contextHolder } = useNotification();

  const { user, setUser } = useGlobalContext();

  const routes: RouteObject[] = [...loginRoutes];
  const routesLoggedIn: RouteObject[] = [...ProductScreens, ...FirstScreenRoutes].map((route) => ({
    ...route,
    loader: () => verifyLoggedIn(setUser, user),
  }));

  const router: RemixRouter = createBrowserRouter([...routes, ...routesLoggedIn]);

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}
export default App;
