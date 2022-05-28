import React, { memo, useContext } from 'react'
import { Context } from '../../provider/context'
import FormVaga from './FormJob'
import ListingJobs from '../ListingJobs'
import * as S from './styles'

const Recruiter = () => {
  const { getAllJobs } = useContext(Context)

  return (
    <main className="new-job">
      <S.Wrapper>
        <S.Container>
          <div>
            <h2>Cadastrar Vaga</h2>
          </div>
          <div className="new-job--form">
            <FormVaga />
          </div>
        </S.Container>
        <ListingJobs />
      </S.Wrapper>
    </main>
  )
}

export default memo(Recruiter)
