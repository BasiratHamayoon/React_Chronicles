import './App.css'
import { ThemeProvider } from './Componenets\'/theme';
import { ToggleTheme } from './Componenets\'/ToggleTheme';

function App() {

  return (
    <>
       <ThemeProvider>
         <ToggleTheme />
       </ThemeProvider>
    </>
  )
}

export default App
