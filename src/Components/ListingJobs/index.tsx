import React, { useContext, useEffect } from 'react'
import { Context } from '../../provider/context'
import BtnHandle from '../BtnHandle'
import * as S from './styles'

const ListingJobs = () => {
  const { getAllJobs, allJobs } = useContext(Context)

  /*  useEffect(() => {
    getAllJobs()
  }, []) */

  const setStatus = (status: string) => {
    return status === 'draft' ? 'Pronto para Publicar' : 'Publicado'
  }

  if (!allJobs) return null

  return (
    <S.Wrapper>
      {allJobs.data.map(({ id, name, status }: any) => (
        <div className="jobbox" key={id}>
          <div>
            <div className="jobbox--title">{name}</div>
            <div className="jobbox--status">
              {`Status: ${setStatus(status)}`}
            </div>
            {status === 'draft' && <BtnHandle id={id} />}
          </div>
        </div>
      ))}
    </S.Wrapper>
  )
}

export default ListingJobs
