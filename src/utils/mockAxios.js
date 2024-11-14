import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

export const createMockAxios = ({ mockAdapterOptions } = {}) => {
  const mockAxios = new MockAdapter(axios, mockAdapterOptions)

  mockAxios.onGet().reply(200, [])

  return mockAxios
}
