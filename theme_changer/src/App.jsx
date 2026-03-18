import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  // // Actual theme change

  useEffect(() => {
    const html = document.documentElement

    if (themeMode === "dark") {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }
  }, [themeMode])
  return (
    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* Theme button */}
              {<ThemeBtn />}
            </div>

            <div className="w-full max-w-sm mx-auto">
              <h1>hello</h1>
              {/* Card  */}
              {<Card />}
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
