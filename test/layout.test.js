import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../src/components/Layout';

describe('Test Layout Component', () => {
  it('Has proper DOM structure', () => {
    const { getByTestId } = render(<Layout pageTitle="Title Page"/>)
    const node = getByTestId('layout')

    expect(node.querySelectorAll('header')).toHaveLength(1)
    expect(node.querySelectorAll('nav')).toHaveLength(1)
    expect(node.querySelectorAll('footer')).toHaveLength(1)
  })
  it('Sets the header H1 to be the desired value', async () => {
    const { getByTestId } = render(<Layout pageTitle="Title Page"/>)
    const node = getByTestId('layout')

    await screen.findByRole('heading')

    expect(node.querySelectorAll('header')).toHaveLength(1)
    expect(node.querySelectorAll('header h1')).toHaveLength(1)

    expect(screen.getByRole('heading')).toHaveTextContent('Title Page')
  })
})