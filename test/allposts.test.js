import * as React from 'react';
import * as Gatsby from 'gatsby';
import { render, fireEvent, screen } from '@testing-library/react';
import AllPostsPage from '../src/pages/allposts';

const graphql = jest.spyOn(Gatsby, 'graphql');
const mockGraphQL = {
  allPosts: {
    nodes: [
      {
        author: 1,
        categories: [12],
        id: '9fa1e701-6aa7-5b91-bacf-bef4379f3727',
        tags: [10, 4, 5, 3, 6],
        title: {
          rendered: 'Christmas Tray',
        },
        excerpt: {
          rendered:
            '<p>A tray for our family Christmas celebration. The skeuomorphic trays are fun but are more work and, eventually, get repetitive.</p>\n',
        },
        date: 'December 24, 2012 7:12 PM',
        postId: 16,
        images: [
          {
            altText: 'An appetizer tray in the shape of a Christmas tree',
            caption: '<p>An appetizer tray in the shape of a Christmas tree</p>\n',
            url: 'https://appetizertray.art/wp-content/uploads/2024/04/IMG_1572-scaled.jpg',
          },
        ],
      },
      {
        author: 1,
        categories: [11],
        id: '12ea0e59-ce83-5834-898d-c2312224849a',
        tags: [9, 8, 6],
        title: {
          rendered: 'An Ikea Caprese tray',
        },
        excerpt: {
          rendered:
            '<p>Some assembly required! It&#8217;s a nice change of pace from the assembled trays, though.</p>\n',
        },
        date: 'September 20, 2020 5:09 PM',
        postId: 19,
        images: [
          {
            altText: 'A caprese salad',
            caption: '<p>Some assembly required</p>\n',
            url: 'https://appetizertray.art/wp-content/uploads/2024/04/IMG_8224-scaled.jpeg',
          },
        ],
      },
      {
        author: 1,
        categories: [1],
        id: '1269e3d3-dd8f-5b33-92f6-36f4b9e183c2',
        tags: [3, 6],
        title: {
          rendered: 'A twisted tray',
        },
        excerpt: {
          rendered:
            '<p>A simple star tray, slightly twisted, to use up some veggies. Note that there are no cukes here as we were out of them.</p>\n',
        },
        date: 'January 14, 2021 5:01 PM',
        postId: 27,
        images: [
          {
            altText: 'an appetizer tray in the shape of a twisted star',
            caption: '',
            url: 'https://appetizertray.art/wp-content/uploads/2024/04/IMG_8497-scaled.jpeg',
          },
        ],
      },
    ],
    totalCount: 3,
  },
  allCategories: {
    nodes: [
      {
        categoryId: 11,
        id: '0ea91562-54d2-5fda-b7e2-04869d480744',
        name: 'Caprese Salad',
        description: 'Summer, or mostly summer, caprese salad trays',
      },
      {
        categoryId: 12,
        id: '5dfe6ea5-fc22-53ef-b2b1-4538d7379594',
        name: 'Holiday',
        description: 'Holiday themed trays',
      },
      {
        categoryId: 1,
        id: 'fb26cf25-e020-5a50-b58b-1baefa675aeb',
        name: 'Regular',
        description: '',
      },
      {
        categoryId: 13,
        id: '1e076d94-4074-5158-ab57-2df814231f1f',
        name: 'Special Occasion',
        description: 'Special Occasions like birthdays and such',
      },
    ],
  },
  allTags: {
    nodes: [
      {
        tagId: 9,
        id: 'e9cae07f-fadd-566e-9072-6db86efb061e',
        description: 'For Caprese salads',
        name: 'Basil',
      },
      {
        tagId: 10,
        id: '47fdd245-6304-5830-a582-5098901b9bed',
        description: 'Sliced celery stalks ',
        name: 'Celery',
      },
      {
        tagId: 4,
        id: '27e1fbe5-0b55-5a66-a306-7e5b50553bc7',
        description: 'Sliced Cucumbers',
        name: 'Cukes',
      },
      {
        tagId: 8,
        id: '6b6107f6-7e68-5222-98be-5292d9fbe795',
        description: 'For Caprese Salads ',
        name: 'Mozzarella',
      },
      {
        tagId: 5,
        id: '0cbdab88-13b6-51c1-861d-590ba944233a',
        description: 'Pitted Olives',
        name: 'Olives',
      },
      {
        tagId: 7,
        id: '610b6fa8-e9f0-5eee-bc04-5c8a6c1b734d',
        description: 'Slices sweet peppers, usually not green',
        name: 'Peppers',
      },
      {
        tagId: 3,
        id: 'f64ab230-5b18-5eef-bd64-7afcf0a8fdeb',
        description: 'Dill Pickles',
        name: 'Pickles',
      },
      {
        tagId: 16,
        id: '10a03a99-c04c-5afb-a3a1-0e56aad27b60',
        description: 'Cooked Shrimp',
        name: 'Shrimp',
      },
      {
        tagId: 6,
        id: '6c119ef0-da72-5f00-b8d0-07be0a4f2a90',
        description: 'Usually cherry or grape tomatoes',
        name: 'Tomatoes',
      },
    ],
  },
};

beforeEach(() => {
  graphql.mockImplementation(() => mockGraphQL);
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('Test AllPosts Page', () => {
  it('Has the post subtitle', () => {
    const { getByTestId } = render(<AllPostsPage data={mockGraphQL} />);
    const node = getByTestId('subtitle');

    expect(node).toHaveTextContent(`${mockGraphQL.allPosts.totalCount} Posts match your filters`);
    expect(node.className).toBe('mb-3 text-xl w-full text-center');
  });
  it('Contains the proper number of posts', () => {
    const { getByTestId } = render(<AllPostsPage data={mockGraphQL} />);
    const node = getByTestId('posts');

    const sections = node.querySelectorAll('section');
    expect(sections.length).toBe(mockGraphQL.allPosts.totalCount);
  });
  it('Contains the proper number of images in the post', () => {
    const { getByTestId } = render(<AllPostsPage data={mockGraphQL} />);
    const node = getByTestId('posts');

    const firstUL = node.querySelector('section ul');
    const li = firstUL.querySelectorAll('section ul li');
    expect(li.length).toBe(1);
  });
  it('The post contains a figure', () => {
    const { getByTestId } = render(<AllPostsPage data={mockGraphQL} />);
    const node = getByTestId('posts');

    const firstLI = node.querySelector('section ul li');
    const figure = firstLI.querySelectorAll('figure');
    expect(figure.length).toBe(1);
  });
  it('Clicking the Holiday checkbox results in one post being found', () => {
    const { getByTestId } = render(<AllPostsPage data={mockGraphQL} />);
    // Click holiday checkbox
    fireEvent.click(screen.getByText('Holiday'));

    const node = getByTestId('subtitle');
    expect(node).toHaveTextContent('1 Post matches your filters');

  });
});
