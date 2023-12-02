import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from "./pages/home";
import Settings from "./pages/settings"
import Analysis from './pages/analysis.jsx';
import Security from './pages/sheild.jsx';
import SignUpPage from './pages/sign-up.jsx';
import { ClerkProvider } from '@clerk/clerk-react';
import SignInPage from './pages/sign-in.jsx';


const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

const router=createBrowserRouter([
  {
    element:<App />,
    children:[
     {
      path:'/',
      element:<Home />
     },
     {
      path:'/settings',
      element:<Settings/>
     },
     {
      path:'/security',
      element:<Security/>
     },
     {
      path:'/analysis',
      element:<Analysis/>
     }
     
    ],
  },
  {
    element:<SignUpPage/>,
    path:'/sign-up'
  },
  {
    element:<SignInPage/>,
    path:'/sign-in'
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>

      <RouterProvider router={router} />
    </ClerkProvider>
    
  </React.StrictMode>,
)
