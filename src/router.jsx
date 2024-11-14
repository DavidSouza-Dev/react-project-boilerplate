import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Components/Main'

const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
