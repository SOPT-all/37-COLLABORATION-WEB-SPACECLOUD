import { RouterProvider } from 'react-router-dom';
import router from "../routes/Router.tsx";

const AppRouterProvider = () => {
  return <RouterProvider router={router} />;
};

export default AppRouterProvider;
