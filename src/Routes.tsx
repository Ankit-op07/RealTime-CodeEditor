import {
    createBrowserRouter
  } from "react-router-dom";
import Login from "@/pages/Login"
import Dashboard from "@/pages/Dashboard";



const routes = createBrowserRouter([
    {
        path:"/",
        element: <Login/>,
    },
    {path:"/dashboard/:roomId", element: <Dashboard/>},
    {path:"*", element:<h1>404 not found</h1>}
]);

export default routes;
