import { Suspense, lazy, useContext } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("./pages/home/Home"));

import "./app.scss";
import { AuthContext } from "./context/authContex";

const Login = lazy(() => import("./pages/login/Login"));

export default function App() {
  const { currentUser } = useContext(AuthContext);
  const router = createBrowserRouter([
    {
      path: "/",
      element: currentUser ? (
        <Suspense
          fallback={
            <div className="load">
              <img src="/img/loading.gif" alt="" />
            </div>
          }
        >
          <Home />,
        </Suspense>
      ) : (
        <Suspense
          fallback={
            <div className="load">
              <img src="/img/loading.gif" alt="" />
            </div>
          }
        >
          <Login />,
        </Suspense>
      ),
    },
  
 
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
