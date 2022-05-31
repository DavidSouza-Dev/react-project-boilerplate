import React, { useContext } from 'react'
import { Context } from '../../provider/context'
import { useLocation } from 'react-router-dom'

import * as S from './styles'
import BtnHandle from '../BtnHandle'
import { TallJobs } from '../../types'

const ListingJobs = () => {
  const { allJobs, user } = useContext(Context)
  const { pathname } = useLocation()
  const candidatePage = pathname.includes('Candidato')
  const interviewerPage = pathname.includes('Entrevistador')
  const recruiterPage = pathname.includes('Recrutador')

  const handleStatus = (status: string) => {
    return status === 'draft' ? 'Pronto para Publicar' : 'Publicado'
  }

  if (!allJobs) return null

  return (
    <S.Container>
      {allJobs.data.map(({ id, name, status, applications }: TallJobs) => {
        {
          /**
           * @comentary Renderiza a lista para área do candidato
           */
        }
        if (candidatePage && status !== 'draft')
          return (
            <div className="job-item" key={id}>
              <div>
                <div className="job-item--title">
                  <b> {name}</b>
                </div>
                <div className="job-item--status">
                  {`Status: ${handleStatus(status)}`}
                </div>
              </div>
              {applications.includes(Number(user?.userData?.id)) ? (
                <p>Já aplicado</p>
              ) : (
                <BtnHandle jobID={id} />
              )}
            </div>
          )
        {
          /**
           * @comentary Renderiza a lista para área do entrevistador
           */
        }
        if (interviewerPage && status !== 'draft')
          return (
            <div className="job-item" key={id}>
              <div>
                <div className="job-item--title">
                  <b> {name}</b>
                </div>
                <div className="job-item--status">
                  {`Status: ${handleStatus(status)}`}
                </div>
              </div>
              {<BtnHandle jobID={id} />}
            </div>
          )
        {
          /**
           * @comentary Renderiza a lista para área do recrutador
           */
        }
        if (recruiterPage)
          return (
            <div className="job-item" key={id}>
              <div>
                <div className="job-item--title">
                  <b> {name}</b>
                </div>
                <div className="job-item--status">
                  {`Status: ${handleStatus(status)}`}
                </div>
              </div>
              {status === 'draft' && <BtnHandle jobID={id} />}
            </div>
          )
      })}
    </S.Container>
  )
}

export default ListingJobs
