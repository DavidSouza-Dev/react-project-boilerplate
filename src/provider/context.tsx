import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { nodeChildren } from '../types'

export const Context = createContext({} as any)

const Provider = ({ children }: nodeChildren) => {
  const baseUrl = process.env.REACT_APP_BASEURL
  const version = process.env.REACT_APP_VERSION
  const [allJobs, setAllJobs] = useState()
  const [userData, setUser] = useState({
    userData: null,
    logged: false
  })
  const [jobAplications, setJobAplications] = useState()

  const getAllJobs = async () => {
    console.log(`${baseUrl}/${version}/jobs/list-all-jobs`)
    const data = await axios
      .get(`${baseUrl}/${version}/jobs/list-all-jobs`)
      .then(({ data }) => data)
      .catch((error) => {
        console.log('Error: ', error)
      })
    setAllJobs(data)
  }

  //cadastro de usuário { name: any; email: any; password: any }
  const createUser = async (user: any) => {
    const { data: data } = await axios
      .post(`${baseUrl}/${version}/accounts/create-account`, {
        name: user.name,
        email: user.email,
        password: user.password
      })
      .then((res) => res)
      .catch((error) => error.res)

    setUser({
      userData: data,
      logged: false
    })
  }

  // aplicação do usuário a uma vaga
  const applyToJob = async (data: any) => {
    await axios
      .post(`${baseUrl}/${version}/jobs/apply/${data.jobId}`, {
        accountId: data.id
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error.res))

    getAllJobs()
  }

  // cria uma vaga nova
  const createJob = async (jobTitle: any) => {
    await axios
      .post(`${baseUrl}/${version}/jobs/create-job`, {
        name: jobTitle
      })
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log('Error: ', error)
      })

    getAllJobs()
  }

  // publica a vaga
  const publishJob = async (jobId: any) => {
    await axios
      .patch(`${baseUrl}/${version}/jobs/publish-job/${jobId}`)
      .then((res) => res)
      .catch((error) => {
        console.log('Error: ', error)
      })

    getAllJobs()
  }

  // consome todas as aplicações de uma vaga
  const getJobApplications = async (jobId: any) => {
    const data = await axios
      .get(`${baseUrl}/${version}/jobs/view-applications/${jobId}`)
      .then(({ data }) => data)
      .catch((error) => {
        console.log('Error: ', error)
      })

    setJobAplications(data.data)
  }

  useEffect(() => {
    console.log('allJobs', allJobs)
  }, [allJobs])

  return (
    <Context.Provider
      value={{
        userData,
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
