import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/header/Header.jsx'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import AboutUs from './components/AboutUs.jsx'
import ChiBreeds from './components/ChiBreeds.jsx'
import ContactUs from './components/ContactUs.jsx'

const Layout = () => {

  const [theme, setTheme] = useState(null);
useEffect(() =>{
  if(window.matchMedia('prefers-color-scheme: dark)').
  matches){
    setTheme('dark');
  }else{
    setTheme('light');
  }
}, []);

useEffect(() =>{
  if(theme === 'dark'){
    document.documentElement.classList.add('dark');
  }else{
    document.documentElement.classList.remove('dark');
  }
}, [theme]);
//if theme is already dark, make it light, otherwise 'dark'
const handleThemeSwitch = () =>{
  setTheme(theme === 'dark'? 'light' : 'dark');
}

  return(
    <>
    <button type='button'
    onClick={handleThemeSwitch}
    className='fixed z-10 right-2 top-4 md:top-3 bg-red-600 
    text-xl  md:text-xl lg:text-2xl xl:text-4xl notebook15i:text-3xl  desktop:text-3xl 7xl:text-6xl
    p-1 rounded-sm'>
{theme === 'dark' ? '🌙' : '🌞'}
    </button>
    <div>
      <Header/>
      <div className='bg-cyan-50 dark:bg-slate-900 dark:text-blue-500'>
      <Outlet/>
      </div>
    </div>
    </>
  );
};

const router = createBrowserRouter([{
  path:'/',
  element:<Layout/>,
  children: [
    {
      path: '/',
      element: <App/>,
    },
    {
      path:'/aboutus',
      element:<AboutUs/>,
    },
    {
      path:'/chibreeds',
      element:<ChiBreeds/>,
    },
    {
      path:'/contactus',
      element:<ContactUs/>
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>,
)
