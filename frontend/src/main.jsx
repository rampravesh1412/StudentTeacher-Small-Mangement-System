import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Signup from './component/Signup/Signup.jsx';
import Signin from './component/Signin/Signin.jsx';
import DashboardStudent from './component/Dashboard/DashboardStudent.jsx';
import DashboardTeacher from './component/Dashboard/DashboardTeacher.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/:role/signup" element={< Signup/>} />
      <Route path="/:role/signin" element={< Signin/>} />
      <Route path="/:role/signup" element={< Signup/>} />
      <Route path="/:role/signin" element={< Signin/>} />
      <Route path="/student/dashboard" element={< DashboardStudent/>} />
      <Route path='/teacher/dashboard' element={<DashboardTeacher/>}/>

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
