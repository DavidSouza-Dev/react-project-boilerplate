import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import ListingJobs from '../../Components/ListingJobs'

import { Context } from '../../provider/context'
import { TdataUser } from '../../types'
import * as S from './styles'

const Candidate = () => {
  const { createUser, user } = useContext(Context)
  const { register, handleSubmit } = useForm()
  const history = useNavigate()

  const handleData = (data: TdataUser) => {
    console.log(data)
    createUser(data)
    history('/Candidato')
  }

  if (user.logged)
    return (
      <S.Wrapper>
        <S.Title>Área do Candidato</S.Title>
        <S.Heading>Listagem de Vagas</S.Heading>
        <ListingJobs />
      </S.Wrapper>
    )

  return (
    <S.Wrapper className="register">
      <S.Title>Área do Candidato</S.Title>
      <S.Heading>Faça Seu Cadastro</S.Heading>
      <S.Form
        aria-label="Se cadastre no sistema"
        className="register--form"
        action="#"
        onSubmit={handleSubmit((data) => handleData(data))}
      >
        <input
          {...register('name')}
          placeholder="Seu Nome"
          aria-label="Insira aqui um Nome para se cadastrar"
        />
        <input
          {...register('email')}
          placeholder="Seu Email"
          aria-label="Insira aqui um E-mail para se cadastrar"
        />
        <input
          {...register('password')}
          type="password"
          placeholder="Digite a senha"
          aria-label="Insira aqui um password para se cadastrar"
        />
        <S.Button type="submit">Cadastrar</S.Button>
      </S.Form>
    </S.Wrapper>
  )
}

export default Candidate
