import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Roadmap from "../pages/Roadmap";

const route=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'/roadmap',
        element:<Roadmap/>
      }
    ]
  }
])

export default route