export type nodeChildren = {
  children: React.ReactNode
}

export type TdataUser = {
  id?: number
  email?: string
  name?: string
  password?: string
}
export type TjobAplications = {
  email: string
  id?: number
  name: string
  password?: string
}
export type TallJobs = {
  id: number
  name: string
  status: string
  applications: number[]
}
export type TapplyJob = {
  jobID: number
  id: number | undefined
}
export type TResAllJobs = {
  data: TallJobs[]
}

export type Tcontext = {
  errorForm: string[]
  user: {
    userData: TdataUser | null
    logged: boolean
  }
  allJobs: TResAllJobs | undefined
  jobAplications: TjobAplications[] | undefined
  getAllJobs: () => void
  createUser: (arg: TdataUser) => void
  applyToJob: (arg: TapplyJob) => void
  createJob: (arg: string) => void
  publishJob: (arg: number) => void
  getJobApplications: (arg: number) => void
}
