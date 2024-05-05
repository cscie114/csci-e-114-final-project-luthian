import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import Post from '../src/components/Post';

const post = {
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
  localImages: [
    {
      childImageSharp: {
        gatsbyImageData: {
          layout: 'constrained',
          backgroundColor: '#483828',
          images: {
            fallback: {
              src: '/static/185f1782e16867338ad0abc1f84baafb/70fde/IMG_1572-scaled.jpg',
              srcSet:
                '/static/185f1782e16867338ad0abc1f84baafb/c8beb/IMG_1572-scaled.jpg 480w,\n/static/185f1782e16867338ad0abc1f84baafb/c1100/IMG_1572-scaled.jpg 960w,\n/static/185f1782e16867338ad0abc1f84baafb/70fde/IMG_1572-scaled.jpg 1920w',
              sizes: '(min-width: 1920px) 1920px, 100vw',
            },
            sources: [
              {
                srcSet:
                  '/static/185f1782e16867338ad0abc1f84baafb/b46c9/IMG_1572-scaled.webp 480w,\n/static/185f1782e16867338ad0abc1f84baafb/ff0ed/IMG_1572-scaled.webp 960w,\n/static/185f1782e16867338ad0abc1f84baafb/31d0c/IMG_1572-scaled.webp 1920w',
                type: 'image/webp',
                sizes: '(min-width: 1920px) 1920px, 100vw',
              },
            ],
          },
          width: 1920,
          height: 2560,
        },
      },
    },
  ],
  images: [
    {
      altText: 'An appetizer tray in the shape of a Christmas tree',
      caption: '<p>An appetizer tray in the shape of a Christmas tree</p>\n',
      url: 'https://appetizertray.art/wp-content/uploads/2024/04/IMG_1572-scaled.jpg',
    },
  ],
};

const tags = [
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
];
const categories = [
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
];

describe('Test Post Component', () => {
  // reset the mock call count
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Has the post title', () => {
    const { getByTestId } = render(<Post post={post} tags={tags} categories={categories} />);
    const node = getByTestId('title');

    expect(node).toHaveTextContent('Christmas Tray');
    expect(node.className).toBe('text-xl font-semibold');
  });
  it('Contains an image', () => {
    const { getByTestId } = render(<Post post={post} tags={tags} categories={categories} />);
    const node = getByTestId('image');
    console.log(node);
    expect(GatsbyImage).toBeCalledTimes(1);
    expect(node['alt']).toBe('An appetizer tray in the shape of a Christmas tree');

    const caption = getByTestId('caption');
    expect(caption.tagName).toBe('SPAN');
    expect(caption).toHaveTextContent('An appetizer tray in the shape of a Christmas tree');
  });
  it('Has an excerpt', () => {
    const { getByTestId } = render(<Post post={post} tags={tags} categories={categories} />);
    const node = getByTestId('excerpt');

    expect(node).toHaveTextContent(
      'A tray for our family Christmas celebration. The skeuomorphic trays are fun but are more work and, eventually, get repetitive.'
    );
  });
  it('Has the right list of tags', () => {
    const { getByTestId } = render(<Post post={post} tags={tags} categories={categories} />);
    const node = getByTestId('tags');

    expect(node).toHaveTextContent('Ingredients: Celery, Cukes, Olives, Pickles, Tomatoes');
  });
  it('Has the right type', () => {
    const { getByTestId } = render(<Post post={post} tags={tags} categories={categories} />);
    const node = getByTestId('categories');

    expect(node).toHaveTextContent('Type: Holiday');
  });
  it('Has the right date', () => {
    const { getByTestId } = render(<Post post={post} tags={tags} categories={categories} />);
    const node = getByTestId('date');

    expect(node).toHaveTextContent('Date: December 24, 2012 7:12 PM');
  });
});
