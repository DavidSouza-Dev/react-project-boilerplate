import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Context } from '../../../provider/context'
import * as S from './styles'

const FormVaga = () => {
  const { register, handleSubmit } = useForm()
  const { createJob, getAllJobs } = useContext(Context)

  const handleData = (data: any) => {
    createJob(data.jobTitle)
    getAllJobs()
  }

  return (
    <>
      <S.Form
        className="user_payment"
        action="#"
        onSubmit={handleSubmit((data) => handleData(data))}
      >
        <input
          id="input-vaga"
          type="text"
          placeholder="Nome da Vaga"
          {...register('jobTitle')}
        />
        <S.Button className="form--button" type="submit">
          Enviar
        </S.Button>
      </S.Form>
    </>
  )
}

export default FormVaga
