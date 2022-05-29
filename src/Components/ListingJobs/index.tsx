import React, { useContext } from 'react'
import { Context } from '../../provider/context'
import { useLocation } from 'react-router-dom'

import * as S from './styles'
import BtnHandle from '../BtnHandle'

const ListingJobs = () => {
  const { allJobs } = useContext(Context)
  const { pathname } = useLocation()
  const renderAll =
    pathname.includes('Entrevistador') || pathname.includes('Candidato')
  const recruiterPage = pathname.includes('Recrutador')

  const setStatus = (status: string) => {
    return status === 'draft' ? 'Pronto para Publicar' : 'Publicado'
  }

  if (!allJobs) return null

  return (
    <S.Container>
      {allJobs.data.map(({ id, name, status }: any) => {
        if (renderAll && status !== 'draft')
          return (
            <div className="job-item" key={id}>
              <div>
                <div className="job-item--title">
                  <b> {name}</b>
                </div>
                <div className="job-item--status">
                  {`Status: ${setStatus(status)}`}
                </div>
              </div>
              {<BtnHandle jobID={id} />}
            </div>
          )
        if (recruiterPage)
          return (
            <div className="job-item" key={id}>
              <div>
                <div className="job-item--title">
                  <b> {name}</b>
                </div>
                <div className="job-item--status">
                  {`Status: ${setStatus(status)}`}
                </div>
              </div>
              {status === 'draft' && <BtnHandle jobId={id} />}
            </div>
          )
      })}
    </S.Container>
  )
}

export default ListingJobs
