import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from '../Home'
const Router = () => {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </HashRouter>
  )
}

export default Router
