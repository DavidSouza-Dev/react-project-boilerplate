import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../provider/context'
import { useLocation } from 'react-router-dom'
import * as S from './styles'

const BtnHandle = ({ jobID }: { jobID: number }) => {
  const { user, applyToJob, publishJob, getJobApplications } =
    useContext(Context)
  const [recruiterPage, SetRecruiterPage] = useState(false)
  const [candidatePage, SetCandidatePage] = useState(false)
  const [interviewerPage, SetInterviewerPage] = useState(false)
  const { pathname } = useLocation()

  /**
   * @comentary Função faz o uso de um object literal para renderizar uma condição a partir do pathname
   * @returns string
   */
  const handleLabel = (label: string) => {
    return {
      Recrutador: 'Enviar',
      Candidato: 'Aplicar',
      Entrevistador: 'Ver Aplicações'
    }[label]
  }

  useEffect(() => {
    SetRecruiterPage(pathname.includes('Recrutador'))
    SetCandidatePage(pathname.includes('Candidato'))
    SetInterviewerPage(pathname.includes('Entrevistador'))
  }, [pathname])

  /**
   * @comentary Função realiza uma ação conforme o perfil de página a partir do pathname
   */
  const handleBtnJob = () => {
    if (recruiterPage) publishJob(jobID)
    if (candidatePage) applyToJob({ jobID, id: user?.userData?.id })
    if (interviewerPage) getJobApplications(jobID)
  }

  return (
    <S.Button
      onClick={() => handleBtnJob()}
      aria-label={`Botão que tem ação de ${handleLabel(
        pathname.replace('/', '')
      )}`}
    >
      {handleLabel(pathname.replace('/', ''))}
    </S.Button>
  )
}

export default BtnHandle
