import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../Components/Header'
import Candidate from '../TemplatePage/Candidate'
import Initial from '../TemplatePage/Initial'
import Interviewer from '../TemplatePage/Interviewer'
import Recruiter from '../TemplatePage/Recruiter'
const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Initial />} path="/" />
        <Route element={<Candidate />} path="/Candidato" />
        <Route element={<Interviewer />} path="/Entrevistador" />
        <Route element={<Recruiter />} path="/Recrutador" />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
