import React, { useContext } from 'react'
import { render, screen, waitFor } from '@testing-library/react'

import { Context } from '../../provider/context'
import JobApplicationList from '../../Components/JobApplicationList'

describe('renders JobApplicationList Option without definitions', () => {
  it('should render app', () => {
    const { container } = render(<JobApplicationList />)
    expect(container).toBeInTheDocument()
    expect(screen.getByTestId('select-role')).toBeVisible()
    expect(screen.getByTestId('select-role')).toHaveTextContent(
      'Selecione vagas para listá-las'
    )
  })
})

describe('renders JobApplicationList Option with definitions', () => {
  it('should render app', async () => {
    const TestComponent = () => {
      const { getJobApplications } = useContext(Context)

      /*
       * Usado Para disparar o consumulo de Aplicações na camada de dados
       */
      setTimeout(() => getJobApplications(1), 0)

      return <h1>test</h1>
    }
    const { container } = render(
      <>
        <TestComponent />
        <JobApplicationList />
      </>
    )

    expect(container).toBeInTheDocument()

    await waitFor(() => {
      setTimeout(() => {
        expect(screen.getByTestId('job-applications')).toBeVisible()
        expect(screen.getByTestId('candidate-name')).toBeVisible()
        expect(screen.getByTestId('candidate-email')).toBeVisible()
      }, 1000)
    })
  })
})

describe('renders JobApplicationList Option with definitions and no Applications', () => {
  it('should render app', async () => {
    const TestComponent = () => {
      const { getJobApplications } = useContext(Context)

      /*
       * Usado Para disparar o consumulo de Aplicações na camada de dados
       */
      setTimeout(() => getJobApplications(6), 0)

      return <h1>test</h1>
    }
    const { container } = render(
      <>
        <TestComponent />
        <JobApplicationList />
      </>
    )

    expect(container).toBeInTheDocument()
    setTimeout(
      () => expect(screen.getByTestId('without-applications')).toBeVisible(),
      1000
    )
  })
})
