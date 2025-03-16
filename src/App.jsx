import { Children ,useEffect } from 'react'
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


  useEffect(() => {
    console.log('Rendering App component');
    const itemquantity = document.querySelector('.quantity');
    if (itemquantity) {
      const cardElement = itemquantity.querySelector('.cardapi');
      console.log('Card Element:', cardElement); // Check if the card element is found
      console.log('ID:', id); // Check the value of id
  
      if (cardElement) {
        cardElement.setAttribute("id", `card${id}`);
        itemquantity.addEventListener('click', (event) => {
          togglequantity(event, id, stock);
        });
      } else {
        console.error('No element with class cardapi found');
      }
    } else {
      console.error('No element with class quantity found');
    }
  }, []);
  
  return <RouterProvider router={router}></RouterProvider>
  
}

export default App
