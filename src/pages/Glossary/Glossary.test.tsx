import { Glossary } from '@pages'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'
import { AuthContext } from '@services'
import { MemoryRouter } from 'react-router-dom'
import { render, screen, renderHook, fireEvent } from '@testing-library/react'
import { useGlossary } from './Glossary.hooks'
import { GlossaryEntryProps } from '@components'

describe('Glossary page tests', () => {
  const mockGlossaryEntryProps: GlossaryEntryProps[] = [
    { term: 'term1', definition: 'definition1', sources: 'source1', tags: ['TaG1'], fundamental: true },
    { term: 'term2', definition: 'definition2', sources: 'source2', tags: ['tag11', 'tag12'], fundamental: false },
    { term: 'TeRm3', definition: 'dEfIniTioN3', sources: 'SoUrcE3', tags: [], fundamental: false }
  ]

  const mockSetExpandedList = jest.fn()

  it('renders glossary page', () => {
    const { queryByText, queryAllByText } = render(<Glossary />)
    expect(queryByText('pages.glossary.title')).toBeInTheDocument()
    expect(queryAllByText('pages.glossary.search').length).toBeGreaterThan(0)
    expect(queryAllByText('pages.glossary.filter').length).toBeGreaterThan(0)
    expect(queryByText('pages.glossary.collapseAll')).toBeInTheDocument()
    expect(queryByText('pages.glossary.expandAll')).toBeInTheDocument()
  })

  // pres buttpms
  test('collapseAll button functionality', () => {
    const { getByText } = render(<Glossary />)
    const collapseAllButton = getByText('pages.glossary.collapseAll')
    expect(collapseAllButton).toBeInTheDocument()
    fireEvent.click(collapseAllButton)
  })

  test('expandAll button functionality', () => {
    const { getByText } = render(<Glossary />)
    const expandAllButton = getByText('pages.glossary.expandAll')
    expect(expandAllButton).toBeInTheDocument()
    fireEvent.click(expandAllButton)
  })

  test('general functionality of hook', () => {
    const { result } = renderHook(() => useGlossary())

    expect(result.current).toMatchObject({
      collapseAll: expect.any(Function),
      expandAll: expect.any(Function)
    })

    result.current.collapseAll(mockSetExpandedList)
    expect(mockSetExpandedList).toBeCalled

    result.current.expandAll(mockSetExpandedList, mockGlossaryEntryProps)
    expect(mockSetExpandedList).toBeCalled
  })
})
