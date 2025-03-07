import { Children } from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import {Header} from './components/ui/Header'
import { AppLayout } from './components/ui/AppLayout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
   children: [
    {
      path: "/",
      element: <Header />,
    },
   ]
  
}
]);










function App() {
  
  return <RouterProvider router={router}></RouterProvider>
  
}

export default App
