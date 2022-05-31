import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'

import Provider from '../../provider/context'
import Candidate from '../../TemplatePage/Candidate'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

describe('renders Candidate Form Register', () => {
  it('should render app', () => {
    const { container } = render(
      <BrowserRouter>
        <Provider>
          <Candidate />
        </Provider>
      </BrowserRouter>
    )

    expect(container).toBeInTheDocument()
    expect(screen.getByTestId('form-register')).toBeVisible()
  })
})

describe('renders Candidate Form Register and fill inputs', () => {
  it('should render app', async () => {
    const { container, getByPlaceholderText, getByText } = render(
      <BrowserRouter>
        <Provider>
          <Candidate />
        </Provider>
      </BrowserRouter>
    )
    expect(container).toBeInTheDocument()

    const inputName = getByPlaceholderText('Seu Nome')
    const inputEmail = getByPlaceholderText('Seu Email')
    const inputPassword = getByPlaceholderText('Digite a senha')
    const addButton = getByText('Cadastrar')

    userEvent.type(inputName, 'jest user')
    userEvent.type(inputEmail, 'teste@testejest.com')
    userEvent.type(inputPassword, 'teste@1234567!')
    userEvent.click(addButton)

    await waitFor(() => {
      setTimeout(
        () => expect(getByText('Listagem de Vagas')).toBeInTheDocument(),
        1000
      )
    })
    expect(container).toBeInTheDocument()
  })
})

describe('renders Candidate Form Register and fill some inputs', () => {
  it('should render app', async () => {
    const { container, getByPlaceholderText, getByText, getByTestId } = render(
      <BrowserRouter>
        <Provider>
          <Candidate />
        </Provider>
      </BrowserRouter>
    )
    expect(container).toBeInTheDocument()

    const inputEmail = getByPlaceholderText('Seu Email')
    const inputPassword = getByPlaceholderText('Digite a senha')
    const addButton = getByText('Cadastrar')

    userEvent.type(inputEmail, 'teste@testejest.com')
    userEvent.type(inputPassword, 'teste@1234567!')
    userEvent.click(addButton)

    await waitFor(() => {
      setTimeout(
        () => expect(getByTestId('form-register')).toBeInTheDocument(),
        1000
      )
    })
    expect(container).toBeInTheDocument()
  })
})
