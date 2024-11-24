// import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { nodeChildren, Tcontext } from '../types'

export const Context = createContext({} as Tcontext)

const Provider = ({ children }: nodeChildren) => {
  // const baseUrl = process.env.REACT_APP_BASEURL
  // const version = process.env.REACT_APP_VERSION

  // Fetch user data from API or local storage
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    // Fetch user data from API or local storage
    const fetchData = async () => {
      try {
        const response = await fetch('/api/user-data')
        const data = await response.json()
        setUserData(data)
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }

    fetchData()
  }, [])

  const value = {
    userData
  }
  return (
    <Context.Provider
      value={{
        value
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Provider
