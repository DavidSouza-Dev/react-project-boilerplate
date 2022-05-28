import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../provider/context'
import { useLocation } from 'react-router-dom'
// import * as S from './styles'

const BtnHandle = ({ id }: any) => {
  const { createJob, getAllJobs, allJobs, publishJob } = useContext(Context)
  const [recruiterPage, SetRecruiterPage] = useState(false)
  const [candidatePage, SetCandidatePage] = useState(false)
  const [interviewerPage, SetInterviewerPage] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => {
    SetRecruiterPage(pathname.includes('Candidato'))
    SetCandidatePage(pathname.includes('Entrevistador'))
    SetInterviewerPage(pathname.includes('Recrutador'))
  }, [])

  const handleBtnJob = () => {
    if (recruiterPage) publishJob(id)
  }

  return <button onClick={() => handleBtnJob()}>Enviar</button>
}

export default BtnHandle
