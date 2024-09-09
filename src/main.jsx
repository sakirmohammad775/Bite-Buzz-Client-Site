import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import { HelmetProvider } from 'react-helmet-async'
import AuthContext from './Providers/AuthProvider';

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <AuthContext>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthContext>
  </StrictMode>,

)
