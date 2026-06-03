import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './App.css'
import WebLayout from './Layout/WebLayout'


import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import Services from './Pages/Services'
import Projects from './Pages/Projects'
import ProjectDetails from './Pages/Projects/ProjectDetails'
import { ToastContainer } from 'react-toastify'





function App() {
  const ThemeRoute = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<WebLayout />}>
       

          <Route index element={<Home/>} />
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/contact-us' element={<ContactUs/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path="/projects/:slug" element={<ProjectDetails />} />
        
        </Route>


      </>


    )

  )


  return (
    <>
     <ToastContainer position="top-right" autoClose={2000} />
      <RouterProvider router={ThemeRoute} />

    </>
  )
}

export default App
