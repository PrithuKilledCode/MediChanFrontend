

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import './index.css'
import HomeScreen from './screens/HomeScreen'
import LandingScreen from "./screens/LandingScreen";
import BlogEditor from "./screens/WritingScreen";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen/>,
    },
    {
      path:'/landingPage',
      element:<LandingScreen/>
    },
    {
      path:'/BlogEditor',
      element:<BlogEditor/>
    }
  ]);
  return (
  <RouterProvider router={router}/>
  );
}

export default App
