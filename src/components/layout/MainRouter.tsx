import { AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import HomePage from "../../HomePage"
import { PUBLIC_PAGE } from "../../config/pages/public-page.config"
import { NetflixPreloader } from "../ui/NetflixPreloader"

export function MainRouter() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Имитируем загрузку данных (например, 3 секунды)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <NetflixPreloader key="loader" />
        ) : (
          <Routes>
            <Route path={PUBLIC_PAGE.HOME} element={<HomePage />} />
            <Route path={PUBLIC_PAGE.MOVIES} element={<HomePage />} />
            <Route path={PUBLIC_PAGE.SERIES} element={<HomePage />} />
            <Route path={PUBLIC_PAGE.KIDS} element={<HomePage />} />
          </Routes>
        )}
      </AnimatePresence>
    </Router>
  )
}
