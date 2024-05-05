import * as React from 'react';
import * as Gatsby from 'gatsby';
import { render, fireEvent, screen } from '@testing-library/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import AllPostsPage from '../src/pages/allposts';

const graphql = jest.spyOn(Gatsby, 'graphql');
const mockGraphQL = {
  allPosts: {
    nodes: [
      {
        author: 1,
        categories: [13],
        id: '7df6b321-ca3a-5651-8680-5be5c33dea65',
        tags: [10, 4, 5, 16, 6],
        title: {
          rendered: 'An older tray with a bit of everything!',
        },
        excerpt: {
          rendered:
            '<p>This is an older tray I made for a party; since a wide selection of people would be there, I threw in some cooked shrimp in addition all the veggies.</p>\n',
        },
        date: 'April 07, 2010 10:04 AM',
        postId: 55,
        localImages: [
          {
            childImageSharp: {
              gatsbyImageData: {
                layout: 'constrained',
                backgroundColor: '#887848',
                images: {
                  fallback: {
                    src: '/static/b486540d82fd9a76f5b6083245ead9d3/77859/IMG_0415-rotated.jpg',
                    srcSet:
                      '/static/b486540d82fd9a76f5b6083245ead9d3/9f4ec/IMG_0415-rotated.jpg 384w,\n/static/b486540d82fd9a76f5b6083245ead9d3/3b4fe/IMG_0415-rotated.jpg 768w,\n/static/b486540d82fd9a76f5b6083245ead9d3/77859/IMG_0415-rotated.jpg 1536w',
                    sizes: '(min-width: 1536px) 1536px, 100vw',
                  },
                  sources: [
                    {
                      srcSet:
                        '/static/b486540d82fd9a76f5b6083245ead9d3/56bb2/IMG_0415-rotated.webp 384w,\n/static/b486540d82fd9a76f5b6083245ead9d3/9f5d6/IMG_0415-rotated.webp 768w,\n/static/b486540d82fd9a76f5b6083245ead9d3/e4a40/IMG_0415-rotated.webp 1536w',
                      type: 'image/webp',
                      sizes: '(min-width: 1536px) 1536px, 100vw',
                    },
                  ],
                },
                width: 1536,
                height: 2048,
              },
            },
          },
        ],
        images: [
          {
            altText: '',
            caption: '',
            url: 'https://appetizertray.art/wp-content/uploads/2024/05/IMG_0415-rotated.jpg',
          },
        ],
      },
      {
        author: 1,
        categories: [13],
        id: '20feb65c-8704-5111-86c1-95255a85b9cc',
        tags: [10, 4, 5, 3, 6],
        title: {
          rendered: 'I can&#8217;t drive 55!',
        },
        excerpt: {
          rendered:
            '<p>When I was first dating my partner, she had a birthday; she was turning the double nickel, as they used to say. So I made this skeuomorphic tray to celebrate.</p>\n',
        },
        date: 'December 19, 2010 10:12 AM',
        postId: 58,
        localImages: [
          {
            childImageSharp: {
              gatsbyImageData: {
                layout: 'constrained',
                backgroundColor: '#f8d888',
                images: {
                  fallback: {
                    src: '/static/d716a017e047a9a839d2b7ba1079ecf4/64799/IMG_1152-scaled.jpg',
                    srcSet:
                      '/static/d716a017e047a9a839d2b7ba1079ecf4/54f08/IMG_1152-scaled.jpg 478w,\n/static/d716a017e047a9a839d2b7ba1079ecf4/38ada/IMG_1152-scaled.jpg 956w,\n/static/d716a017e047a9a839d2b7ba1079ecf4/64799/IMG_1152-scaled.jpg 1912w',
                    sizes: '(min-width: 1912px) 1912px, 100vw',
                  },
                  sources: [
                    {
                      srcSet:
                        '/static/d716a017e047a9a839d2b7ba1079ecf4/99ee0/IMG_1152-scaled.webp 478w,\n/static/d716a017e047a9a839d2b7ba1079ecf4/9f070/IMG_1152-scaled.webp 956w,\n/static/d716a017e047a9a839d2b7ba1079ecf4/cb8ea/IMG_1152-scaled.webp 1912w',
                      type: 'image/webp',
                      sizes: '(min-width: 1912px) 1912px, 100vw',
                    },
                  ],
                },
                width: 1912,
                height: 2560,
              },
            },
          },
        ],
        images: [
          {
            altText: '',
            caption: '',
            url: 'https://appetizertray.art/wp-content/uploads/2024/05/IMG_1152-scaled.jpg',
          },
        ],
      },
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
        localImages: [
          {
            childImageSharp: {
              gatsbyImageData: {
                layout: 'constrained',
                backgroundColor: '#d8c8b8',
                images: {
                  fallback: {
                    src: '/static/550de6b896c46d37d6e397b152cd1815/70fde/IMG_8224-scaled.jpg',
                    srcSet:
                      '/static/550de6b896c46d37d6e397b152cd1815/c8beb/IMG_8224-scaled.jpg 480w,\n/static/550de6b896c46d37d6e397b152cd1815/c1100/IMG_8224-scaled.jpg 960w,\n/static/550de6b896c46d37d6e397b152cd1815/70fde/IMG_8224-scaled.jpg 1920w',
                    sizes: '(min-width: 1920px) 1920px, 100vw',
                  },
                  sources: [
                    {
                      srcSet:
                        '/static/550de6b896c46d37d6e397b152cd1815/b46c9/IMG_8224-scaled.webp 480w,\n/static/550de6b896c46d37d6e397b152cd1815/ff0ed/IMG_8224-scaled.webp 960w,\n/static/550de6b896c46d37d6e397b152cd1815/31d0c/IMG_8224-scaled.webp 1920w',
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
        localImages: [
          {
            childImageSharp: {
              gatsbyImageData: {
                layout: 'constrained',
                backgroundColor: '#989898',
                images: {
                  fallback: {
                    src: '/static/4d003f778662a9581b027a4e726332de/70fde/IMG_8497-scaled.jpg',
                    srcSet:
                      '/static/4d003f778662a9581b027a4e726332de/c8beb/IMG_8497-scaled.jpg 480w,\n/static/4d003f778662a9581b027a4e726332de/c1100/IMG_8497-scaled.jpg 960w,\n/static/4d003f778662a9581b027a4e726332de/70fde/IMG_8497-scaled.jpg 1920w',
                    sizes: '(min-width: 1920px) 1920px, 100vw',
                  },
                  sources: [
                    {
                      srcSet:
                        '/static/4d003f778662a9581b027a4e726332de/b46c9/IMG_8497-scaled.webp 480w,\n/static/4d003f778662a9581b027a4e726332de/ff0ed/IMG_8497-scaled.webp 960w,\n/static/4d003f778662a9581b027a4e726332de/31d0c/IMG_8497-scaled.webp 1920w',
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
            altText: 'an appetizer tray in the shape of a twisted star',
            caption: '',
            url: 'https://appetizertray.art/wp-content/uploads/2024/04/IMG_8497-scaled.jpeg',
          },
        ],
      },
      {
        author: 1,
        categories: [1],
        id: '21484e0a-d948-5a23-9f11-ab64c7265838',
        tags: [9, 8, 6],
        title: {
          rendered: 'A simple caprese tray',
        },
        excerpt: {
          rendered:
            '<p>It&#8217;s way too early for our own fresh basil so I sprinkled dried basil on the tray. It&#8217;s okay but just not the same!</p>\n',
        },
        date: 'May 03, 2024 6:05 PM',
        postId: 52,
        localImages: [
          {
            childImageSharp: {
              gatsbyImageData: {
                layout: 'constrained',
                backgroundColor: '#888888',
                images: {
                  fallback: {
                    src: '/static/ef0053e398700b83bb83e78d6b21b9c2/70fde/IMG_1828-scaled.jpg',
                    srcSet:
                      '/static/ef0053e398700b83bb83e78d6b21b9c2/c8beb/IMG_1828-scaled.jpg 480w,\n/static/ef0053e398700b83bb83e78d6b21b9c2/c1100/IMG_1828-scaled.jpg 960w,\n/static/ef0053e398700b83bb83e78d6b21b9c2/70fde/IMG_1828-scaled.jpg 1920w',
                    sizes: '(min-width: 1920px) 1920px, 100vw',
                  },
                  sources: [
                    {
                      srcSet:
                        '/static/ef0053e398700b83bb83e78d6b21b9c2/b46c9/IMG_1828-scaled.webp 480w,\n/static/ef0053e398700b83bb83e78d6b21b9c2/ff0ed/IMG_1828-scaled.webp 960w,\n/static/ef0053e398700b83bb83e78d6b21b9c2/31d0c/IMG_1828-scaled.webp 1920w',
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
            altText: '',
            caption: '',
            url: 'https://appetizertray.art/wp-content/uploads/2024/05/IMG_1828-scaled.jpeg',
          },
        ],
      },
    ],
    totalCount: 6,
  },
  allCategories: {
    nodes: [
      {
        id: '0ea91562-54d2-5fda-b7e2-04869d480744',
        name: 'Caprese Salad',
        description: 'Summer, or mostly summer, caprese salad trays',
        categoryId: 11,
      },
      {
        id: '5dfe6ea5-fc22-53ef-b2b1-4538d7379594',
        name: 'Holiday',
        description: 'Holiday themed trays',
        categoryId: 12,
      },
      {
        id: 'fb26cf25-e020-5a50-b58b-1baefa675aeb',
        name: 'Regular',
        description: '',
        categoryId: 1,
      },
      {
        id: '1e076d94-4074-5158-ab57-2df814231f1f',
        name: 'Special Occasion',
        description: 'Special Occasions like birthdays and such',
        categoryId: 13,
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
