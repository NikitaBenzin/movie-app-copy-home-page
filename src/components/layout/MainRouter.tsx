import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import HomePage from "../../HomePage"
import { PUBLIC_PAGE } from "../../config/pages/public-page.config"

export function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path={PUBLIC_PAGE.HOME} element={<HomePage />} />
        <Route path={PUBLIC_PAGE.MOVIES} element={<HomePage />} />
        <Route path={PUBLIC_PAGE.SERIES} element={<HomePage />} />
        <Route path={PUBLIC_PAGE.KIDS} element={<HomePage />} />
      </Routes>
    </Router>
  )
}
