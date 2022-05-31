import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import {
  nodeChildren,
  TapplyJob,
  Tcontext,
  TdataUser,
  TjobAplications
} from '../types'

export const Context = createContext({} as Tcontext)

const Provider = ({ children }: nodeChildren) => {
  const baseUrl = process.env.REACT_APP_BASEURL
  const version = process.env.REACT_APP_VERSION
  const [allJobs, setAllJobs] = useState()
  const [errorForm, setErrorForm] = useState<string[]>([''])
  const [user, setUser] = useState({
    userData: null,
    logged: false
  })
  const [jobAplications, setJobAplications] = useState<
    TjobAplications[] | undefined
  >(undefined)

  /**
   * @comentary Essa função faz leitura de todas as vagas
   * @returns
   */
  const getAllJobs = async () => {
    const data = await axios
      .get(`${baseUrl}/${version}/jobs/list-all-jobs`)
      .then(({ data }) => data)
      .catch((error) => {
        console.log('Error on getAll Jobs: ', error)
      })
    setAllJobs(data)
  }

  /**
   * @comentary Essa função faz cadastro de usuário
   * @returns
   */
  const createUser = async (user: TdataUser) => {
    const { data } = await axios
      .post(`${baseUrl}/${version}/accounts/create-account`, {
        name: user.name,
        email: user.email,
        password: user.password
      })
      .then((response) => response)
      .catch((error) => {
        setErrorForm(error.response.data.message)
        return error
      })

    setUser({
      userData: data.data,
      logged: true
    })
  }

  /**
   * @comentary Essa função faz  aplicação do usuário a uma vaga
   * @returns
   */
  const applyToJob = async (data: TapplyJob) => {
    await axios
      .post(`${baseUrl}/${version}/jobs/apply/${data.jobID}`, {
        accountId: data.id
      })
      .then((response) => response)
      .catch((error) => {
        alert('Operação não realizada, repita ação.')
        console.log('Error:', error)
      })

    getAllJobs()
  }

  /**
   * @comentary Essa função cria uma vaga nova
   * @returns
   */
  const createJob = async (jobTitle: string) => {
    await axios
      .post(`${baseUrl}/${version}/jobs/create-job`, {
        name: jobTitle
      })
      .then((response) => response)
      .catch((error) => {
        alert('Operação não realizada, repita ação.')
        console.log('Error:', error)
      })

    getAllJobs()
  }

  /**
   * @comentary Essa função publica a vaga
   * @returns
   */
  const publishJob = async (jobId: number) => {
    await axios
      .patch(`${baseUrl}/${version}/jobs/publish-job/${jobId}`)
      .then((response) => response)
      .catch((error) => {
        alert('Operação não realizada, repita ação.')
        console.log('Error:', error)
      })

    getAllJobs()
  }

  /**
   * @comentary Essa função leitura de todas as aplicações de uma vaga
   * @returns
   */
  const getJobApplications = async (jobId: number) => {
    setJobAplications([])
    const data = await axios
      .get(`${baseUrl}/${version}/jobs/view-applications/${jobId}`)
      .then(({ data }) => data)
      .catch((error) => {
        alert('Operação não realizada, repita ação.')
        console.log('Error:', error)
      })

    console.log('setJobAplications', data.data)

    setJobAplications(data.data)
  }

  useEffect(() => {
    getAllJobs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Context.Provider
      value={{
        errorForm,
        user,
        allJobs,
        jobAplications,
        getAllJobs,
        createUser,
        applyToJob,
        createJob,
        publishJob,
        getJobApplications
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Provider
