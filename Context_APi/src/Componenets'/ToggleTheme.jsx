import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { ThemeContext } from "./ThemeContext.jsx";
import { useContext } from "react";
export const ToggleTheme = () => {
    const { theme, handleToggleTheme } = useContext(ThemeContext);
    return (
        <>
            <div className={`flex w-full justify-center items-center pt-20 flex-col gap-6 h-[100vh] 
                ${theme === 'dark'? 'bg-black text-white': 'bg-white text-black'}`}>
                <h1 className="text-[30px] font-bold">Theme</h1>
                <button onClick={handleToggleTheme}
                className="cursor-pointer text-[30px]">{theme === 'dark'? <IoMoonOutline /> : <IoSunnyOutline />}</button>
            </div>
        </>
    )
}