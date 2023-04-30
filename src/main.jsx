import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Route';
import AuthProvider from './Provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <AuthProvider>
        <RouterProvider router={router}>
                    
        </RouterProvider>
    </AuthProvider>
    


)
