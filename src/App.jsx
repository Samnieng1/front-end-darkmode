import React from 'react'
import Hero from './components/Hero'
import Highlight from './components/Highlight';


function App() {
// const [theme, setTheme] = useState(null);
// useEffect(() =>{
//   if(window.matchMedia('prefers-color-scheme: dark)').
//   matches){
//     setTheme('dark');
//   }else{
//     setTheme('light');
//   }
// }, []);

// useEffect(() =>{
//   if(theme === 'dark'){
//     document.documentElement.classList.add('dark');
//   }else{
//     document.documentElement.classList.remove('dark');
//   }
// }, [theme]);
// //if theme is already dark, make it light, otherwise 'dark'
// const handleThemeSwitch = () =>{
//   setTheme(theme === 'dark'? 'light' : 'dark');
// }

  return (
//     <>
//     <button type='button'
//     onClick={handleThemeSwitch}
//     className='fixed z-10 right-2 top-2 bg-red-600 text-lg p-1 rounded-md'>
// {theme === 'dark' ? '🌙' : '🌞'}
//     </button>
    <div className=' flex flex-col
     md:flex-col gap-4 '>
     
      <Hero />
      <Highlight/>
    </div>
    //</>
  )
}

export default App
