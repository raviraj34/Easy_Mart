import { Children, useEffect } from 'react'
import { About } from './pages/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import { Header } from './components/ui/Header'
import { AppLayout } from './components/ui/AppLayout';
import { Home } from './pages/Home';
import Postapi from './api/Postapi';
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

// function idcheck() {
//   useEffect(() => {
//     console.log('Rendering App component')
//     const itemquantity = document.querySelector('.quantity');
//     console.log("raviraj");

    
//     const cardElement = document.querySelector(".cardapi");
//     cardElement.setAttribute("id", `card${id}`);
//       console.log('Card Element:', cardElement); // Check if the card element is found
//       console.log('ID:', id); // Check the value of id

     
//         console.log("rikkik");

//         itemquantity.addEventListener('click', (event) => {
//           togglequantity(event, id, stock);
//         });
      
    
//   }, []);
// }




function App() 
{
  const cards = [title,price,id]; // Replace with your actual card data

  useEffect(() => {
      cards.forEach((card, index) => {
          const cardElement = document.querySelector(`.cardapi[data-index="${index}"]`);
          if (cardElement) {
              cardElement.setAttribute("id", `card${index + 1}`); // Unique ID for each card
          } else {
              console.error(`Card element not found for index ${index}`);
          }
      });

      const itemquantity = document.querySelector('.quantity');
      if (itemquantity) {
          itemquantity.addEventListener('click', (event) => {
              togglequantity(event, id, stock);
          });
      } else {
          console.error('Item quantity element not found');
      }
  }, [cards]); // Dependency on cards array

  return (
      <div>
          {cards.map((card, index) => (
              <div key={index} className="cardapi" data-index={index}>
                  {/* Render your card content here */}
              </div>
          ))}
          <RouterProvider router={router}></RouterProvider>
      </div>
  );
}

export default App;
