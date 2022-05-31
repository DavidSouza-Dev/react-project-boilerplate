import React, { useContext } from 'react'
import { Context } from '../../provider/context'
import { TjobAplications } from '../../types'
import * as S from './styles'

const JobApplicationList = () => {
  const { jobAplications } = useContext(Context)

  if (jobAplications == undefined) {
    return (
      <S.Container>
        <S.Heading>Aplicações nas Vagas</S.Heading>
        <S.Message data-testid="select-role">
          Selecione vagas para listá-las
        </S.Message>
      </S.Container>
    )
  }
  if (jobAplications.length == 0) {
    return (
      <S.Container data-testid="without-applications">
        <>
          <S.Heading>Aplicações nas Vagas</S.Heading>
          <S.Message>Não há aplicações nesta vaga</S.Message>
        </>
      </S.Container>
    )
  }
  return (
    <S.Container data-testid="job-applications">
      <S.Heading>Aplicações nas Vagas</S.Heading>
      {jobAplications.map(({ name, email }: TjobAplications, index: number) => (
        <div className="job-applications" key={index}>
          <p className="job-applications_name" data-testid="candidate-name">
            <b>Nome: </b>
            {name}
          </p>
          <p className="job-applications_email" data-testid="candidate-email">
            <b>E-mail de contato: </b>
            {email}
          </p>
        </div>
      ))}
    </S.Container>
  )
}

export default JobApplicationList
