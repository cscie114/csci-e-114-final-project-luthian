import * as React from 'react';
import { render, screen } from '@testing-library/react';
import * as Gatsby from 'gatsby';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')
const mockUseStaticQuery = {
  site: {
    siteMetadata: {
      title: 'CSCI E-114 Appetizer Tray Blog',
      description: 'A blog about appetizer Trays',
      course: 'CSCI E-114 Web Application Development with Jamstack',
    }
  },
}

import Header from '../src/components/Header';

describe('Test Header Component', () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('contains the title passed in', () => {
    const { getByTestId } = render(<Header title={'Page Title'} />)
    const node = getByTestId('title')

    expect(node).toHaveTextContent('Page Title - CSCI E-114 Appetizer Tray Blog')
  }),
  it('has the correct meta description and keywords', () => {
    const { getByTestId } = render(<Header pageTitle={'Page Title'} />)
    const metaDescription = document.querySelector('meta[name="description"]')
    const metaKeywords = document.querySelector('meta[name="keywords"]')

    expect(metaDescription).toHaveAttribute('content', 'A blog about appetizer Trays')
    expect(metaKeywords).toHaveAttribute('content', 'gatsby, appetizer, food, Harvard Extension School, HES, CSCI E-114 Web Application Development with Jamstack')
  })
})