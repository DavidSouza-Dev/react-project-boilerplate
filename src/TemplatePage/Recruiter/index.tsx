import React, { memo } from 'react'
import ListingJobs from '../../Components/ListingJobs'
import FormVaga from './FormJob'
import * as S from './styles'

const Recruiter = () => {
  return (
    <main className="new-job">
      <S.Wrapper>
        <S.Title>Área do Recrutador</S.Title>

        <S.Container>
          <div>
            <h3>Cadastrar Vaga</h3>
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
