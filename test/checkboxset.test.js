import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CheckboxSet from '../src/components/CheckboxSet';
import { all } from 'micromatch';

const allCategories = [
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
].map(category => ({
  value: category.categoryId,
  description: category.description,
  label: category.name,
}));

const allTags = [
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
].map(tag => ({
  value: tag.tagId,
  description: tag.description,
  label: tag.name,
}));

const setIngredientsFilter = jest.fn();
const setTypeFilter = jest.fn();

describe('Test Checkbox Set Componment', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Creates the title properly', () => {
    const { getByTestId } = render(<CheckboxSet checkboxes={allCategories} callback={setTypeFilter} title={'Types'} />);
    const node = getByTestId('title');

    expect(node).toHaveTextContent('Types');
  });
  it('Contains the proper number of checkboxes', () => {
    const { getByTestId } = render(<CheckboxSet checkboxes={allCategories} callback={setTypeFilter} title={'Types'} />);
    const node = getByTestId('checkboxset');

    const sections = node.querySelectorAll('input[type="checkbox"]');
    expect(sections.length).toBe(allCategories.length);
  });
  it('Verify clicking a checkbox calls the callback event', () => {
    render(<CheckboxSet checkboxes={allCategories} callback={setTypeFilter} title={'Types'} />);
    // Called on component render
    expect(setTypeFilter).toHaveBeenCalledTimes(1);
    expect(setTypeFilter.mock.calls[0][0]).toStrictEqual([]);

    // Click holiday checkbox
    fireEvent.click(screen.getByText('Holiday'));

    expect(setTypeFilter).toHaveBeenCalledTimes(2);
    const expected = [allCategories.find(category => category.label === 'Holiday').value];
    expect(setTypeFilter.mock.calls[1][0]).toStrictEqual(expected);

  });
  it('Verify clicking a checkbox calls the callback event', () => {
    render(<CheckboxSet checkboxes={allTags} callback={setIngredientsFilter} title={'Ingredients'} />);
    // Called on component render
    expect(setIngredientsFilter).toHaveBeenCalledTimes(1);
    expect(setIngredientsFilter.mock.calls[0][0]).toStrictEqual([]);

    // Click Pickles checkbox
    fireEvent.click(screen.getByText('Pickles'));

    expect(setIngredientsFilter).toHaveBeenCalledTimes(2);
    const expected = [allTags.find(tag => tag.label === 'Pickles').value];
    expect(setIngredientsFilter.mock.calls[1][0]).toStrictEqual(expected);
  });
});
