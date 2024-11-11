import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { defaultSystem } from "@chakra-ui/react"; 
import { Provider } from "@/components/ui/provider"; 
import { RouterProvider } from "react-router-dom";
import router from './app/router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider value={defaultSystem}> 
        <RouterProvider router={router} />
    </Provider >
  </StrictMode>
);