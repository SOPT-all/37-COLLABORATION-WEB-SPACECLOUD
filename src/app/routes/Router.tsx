import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout.tsx";
import { ExamplePage } from "../../pages/example/ui/ExamplePage.tsx";
import NotFoundPage from "../../pages/common/ui/NotFoundPage.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <ExamplePage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
