import { useState } from "react";
import { ToggleButton } from "./Componenets/Projects/ToggleButton";
const App = () => {
   const [isOn, setIson] = useState(false);
    
    const handleSwitch = () => {
        setIson(!isOn);
    }
    const toggleTheme = isOn ? "dark" : "light"
  return (
    <div className={toggleTheme}> 
       <section  >
          <ToggleButton isOn = {isOn} setIson={setIson} handleSwitch={handleSwitch}/>
       </section>
    </div>
  )
}
export default App;