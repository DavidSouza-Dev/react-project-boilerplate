import React, { memo } from 'react'
import JobApplicationList from '../JobApplicationList'
import ListingJobs from '../ListingJobs'
// import { Context } from '../../provider/context'
import * as S from './styles'

const Entrevistador = () => {
  // const { getAllJobs } = useContext(Context)

  return (
    <S.Wrapper>
      <ListingJobs />
      <JobApplicationList />
    </S.Wrapper>
  )
}

export default memo(Entrevistador)
