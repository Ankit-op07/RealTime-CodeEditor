import {
  RouterProvider,
} from "react-router-dom";
import routes from "./Routes";


export default function App() {

  return (
    <RouterProvider router={routes} />
  )
}


