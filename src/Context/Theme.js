import React from 'react'
import { useContext } from 'react'


export const ThemeContext=React.createContext({
    ThemeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
})

export const ThemeProvider=ThemeContext.Provider


function Theme() {
  return useContext(ThemeContext)
}

export default Theme

