import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Sign from './Components/sign/Sign';
import "./steller.css"
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import EditProfile from './Components/EditProfile/EditProfile';
import Booking from './Components/Booking/Booking';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

// let routes=createBrowserRouter([
//   {path:"/",element:<Home/>},
//   {path:"sign",element:<Sign/>},
//   {path:"profile",element:<Profile/>},
//   {path:"editprofile",element:<EditProfile/>},
// ])
let routes=createBrowserRouter([
  {path:"/",element:<Home/>},
  {path:"sign",element:<Sign/>},
  {path:"profile",element:<Profile/>},
  {path:"profile/edit",element:<EditProfile/>},
  {path:"booking",element:<Booking/>},
  
  
  
])




function App() {
  return (
    <>
    <RouterProvider router={routes}/>
    {/* <Profile/> */}
    <Outlet></Outlet>

    </>
  );
}

export default App;
