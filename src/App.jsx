import { Children } from 'react'
import { About } from './pages/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import {Header} from './components/ui/Header'
import { AppLayout } from './components/ui/AppLayout';
import { Home } from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
   children: [
    {
      path: "/About",
      element: <About />,
      
    },
    {
      path: "/",
      element: <Home />,
    }
   ]
  
}
]);










function App() {
  
  return <RouterProvider router={router}></RouterProvider>
  
}

export default App
