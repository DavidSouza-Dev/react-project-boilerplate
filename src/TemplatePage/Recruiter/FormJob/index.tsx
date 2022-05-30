import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Context } from '../../../provider/context'
import * as S from './styles'

const FormVaga = () => {
  const { createJob, getAllJobs } = useContext(Context)
  const { register, handleSubmit } = useForm()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleData = (data: any) => {
    createJob(data.jobTitle)
    getAllJobs()
  }

  return (
    <>
      <S.Form
        className="job-input"
        action="#"
        onSubmit={handleSubmit((data) => handleData(data))}
        aria-label="Insira um nome para Cadastro de Vagas"
      >
        <input
          id="input-vaga"
          type="text"
          placeholder="Nome da Vaga"
          aria-label="Insira aqui uma vaga para cadastrar"
          {...register('jobTitle')}
        />
        <S.Button className="form--button" type="submit">
          Cadastrar vaga
        </S.Button>
      </S.Form>
    </>
  )
}

export default FormVaga
