import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import "./assets/styles/main.scss"

import { createBrowserRouter , RouterProvider } from 'react-router-dom'; 
import Home from './routes/home';
import LoginDashboard from './routes/loginDashboard';
import Dashboard from './routes/dashboard';
import DashboardMatriculados from './components/dashboard/dashboardMatriculados';
import DashboardTutorias from './components/dashboard/dashboardTutorias';
import DashboardTutoriasAño from './components/dashboard/dashboardTutoriasAño';
import DashboardNucleo from './components/dashboard/dashboardNucleo';
import DashboardAdmins from './components/dashboard/dashboardAdmins';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <LoginDashboard/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
    children:[
      {
        path:"alumnos_matriculados",
        element:<DashboardMatriculados/>
      },
      {
        path:"tutorias",
        element: <DashboardTutorias/>,
      },
      {
        path:"tutorias_año", //Aquí irá una cosa para poder tomar la id que buscamos
        element: <DashboardTutoriasAño/>
      },
      {
        path:"nucleo_academico",
        element: <DashboardNucleo/>
      },
      {
        path:"admins",
        element: <DashboardAdmins/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
