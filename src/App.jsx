import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './App.css'
import WebLayout from './Layout/WebLayout'


import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'





function App() {
  const ThemeRoute = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<WebLayout />}>
       

          <Route index element={<Home/>} />
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/contact-us' element={<ContactUs/>}/>
        
        </Route>


      </>


    )

  )


  return (
    <>
      <RouterProvider router={ThemeRoute} />

    </>
  )
}

export default App
