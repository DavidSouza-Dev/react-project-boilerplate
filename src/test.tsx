/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, screen } from '@testing-library/react'

import Main from './Components/Main'

describe('renders learn react link', () => {
  it('should render app', () => {
    const { container } = render(<Main />)
    const linkElement = screen.getByText(/learn react/i)
    console.log('test', container)
    expect(linkElement).toBeInTheDocument()
  })
})
