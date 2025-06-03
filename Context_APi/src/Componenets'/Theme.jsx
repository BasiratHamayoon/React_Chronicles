import { Children, useState } from "react";
import { ThemeContext } from "./ThemeContext.jsx";


export const ThemeProvider = ({ children }) => {
    const [ theme, setTheme ] = useState('dark');
    const handleToggleTheme = () => {
        return setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    }
    return <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
        {children}
    </ThemeContext.Provider>
}
