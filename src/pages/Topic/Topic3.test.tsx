import { mockReactFlow } from '__mocks__/ResizeObserver'
import { act, render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { AuthContext } from '@services'
import * as services from '@services'
import '@testing-library/jest-dom'
import Topic from './Topic'

jest.useFakeTimers()
jest.spyOn(global, 'setTimeout')

describe('Topic tests', () => {
  beforeEach(() => {
    jest.clearAllTimers()
    mockReactFlow()
    jest.spyOn(services, 'getUser').mockImplementation(() => {
      return Promise.resolve({
        id: 1,
        lmsUserId: 1,
        name: 'Theodor Tester',
        role: 'Tester',
        roleId: 1,
        settings: {
          id: 1,
          userId: 1,
          pswd: 'test',
          theme: 'test'
        },
        university: 'test'
      })
    })
  })

  test('getLearningPath fails', () => {
    const history = createMemoryHistory({ initialEntries: ['/home', '/course', '/2'] })
    jest.spyOn(services, 'getLearningPath').mockImplementation(() => {
      return Promise.reject(new Error('getLearningPath failed'))
    })

    jest.spyOn(services, 'getLearningPath').withImplementation(
      () => {
        throw new Error('getLearningPath failed')
      },
      () =>
        act(() => {
          render(
            <Router location={history.location} navigator={history}>
              <AuthContext.Provider value={{ isAuth: true, setExpire: jest.fn(), logout: jest.fn() }}>
                <Topic />
              </AuthContext.Provider>
            </Router>
          )
        })
    )
  })
})
