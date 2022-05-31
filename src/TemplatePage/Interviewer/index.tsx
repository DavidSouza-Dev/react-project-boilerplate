import React from 'react'
import JobApplicationList from '../../Components/JobApplicationList'
import ListingJobs from '../../Components/ListingJobs'

import * as S from './styles'

const Interviewer = () => {
  return (
    <S.Wrapper>
      <S.Title>Área do Entrevistador</S.Title>
      <ListingJobs />
      <JobApplicationList />
    </S.Wrapper>
  )
}

export default Interviewer
