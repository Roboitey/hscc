import ReactDOM from 'react-dom/client'
import './index.css'
import App from'./App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import LoginPage from './pages/LoginPage.tsx'
import RegistrationPage from './pages/RegistrationPage.tsx'
import'bootstrap/dist/css/bootstrap.min.css'
import MainPage from './pages/MainPage.tsx'
import Fruit from './componets/Fruit.tsx'
import Vegetables from './componets/Vegetables.tsx'
import Pokemon from './componets/Pokemon.tsx'
import PokemonID from './componets/PokemonID.tsx'

const router= createBrowserRouter([{
  path:"/",
  element:<HomePage></HomePage>,
  errorElement:<div>404 error</div>
  
},{
  path:"/register",
  element:<RegistrationPage></RegistrationPage>
  
},{
  path:"/login",
  element:<LoginPage></LoginPage>


},{
  path:"/main", 
  element: <MainPage></MainPage>,
  children: [
    {
      path:"fruit",
      element:<Fruit></Fruit>
    },{
      path:"vegetables",
      element:<Vegetables></Vegetables>
    }
  ]
},{
    path: '/pokemon/',
    element:<Pokemon></Pokemon>,
    children: [
      {
      path: ":id",
      element: <PokemonID></PokemonID>,
    }],
  }]);

ReactDOM.createRoot(document.getElementById('root')!).render(

  <RouterProvider router={router}>
  
  </RouterProvider>

)