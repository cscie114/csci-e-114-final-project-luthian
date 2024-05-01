import * as React from 'react';
import { render, screen } from '@testing-library/react';
import IndexPage from '../src/pages/index';

describe('Test Home Page', () => {
  it('Has a title', () => {
    const { getByTestId } = render(<IndexPage />)
    const node = getByTestId('appetizer-tray-image')

    expect(node.src).toBe('http://localhost/images/IMG_0738.jpg')
    expect(node.attributes.layout.value).toBe('constrained')
    expect(node.attributes.placeholder.value).toBe('BLURRED')
  })
  it('Contains an image', () => {
    const { getByTestId } = render(<IndexPage />)
    const node = getByTestId('page-title')

    expect(node.tagName).toBe('H1')
    expect(node.innerHTML).toBe('Home Page')
  })
})