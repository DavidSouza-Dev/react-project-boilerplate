import React, { memo, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { Context } from '../../provider/context'
import ListingJobs from '../ListingJobs'
import * as S from './styles'

const Candidato = () => {
  const { createUser, user } = useContext(Context)
  const { register, handleSubmit } = useForm()
  const history = useNavigate()

  const handleData = (data: any) => {
    console.log(data)
    createUser(data)
    history('/Candidato')
    // getAllJobs()
  }

  if (user.logged)
    return (
      <S.Wrapper>
        <S.Heading>Listagem de Vagas</S.Heading>
        <ListingJobs />
      </S.Wrapper>
    )

  return (
    <S.Wrapper className="register">
      <S.Heading>Faça Seu Cadastro</S.Heading>
      <S.Form
        className="register--form"
        action="#"
        onSubmit={handleSubmit((data) => handleData(data))}
      >
        <input {...register('name')} placeholder="Seu Nome" />
        <input {...register('email')} placeholder="Seu Email" />
        <input
          {...register('password')}
          type="password"
          placeholder="Digite a senha"
        />
        <S.Button>Cadastrar</S.Button>
      </S.Form>
    </S.Wrapper>
  )
}

export default memo(Candidato)
