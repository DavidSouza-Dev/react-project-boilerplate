import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Candidato from './Components/Candidate'
import Entrevistador from './Components/Interviewer'
import Header from './Components/Header'
import Recrutador from './Components/Recruiter'
const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Candidato />} path="/Candidato" />
        <Route element={<Entrevistador />} path="/Entrevistador" />
        <Route element={<Recrutador />} path="/Recrutador" />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
