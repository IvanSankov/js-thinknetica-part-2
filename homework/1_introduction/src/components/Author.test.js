import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Author from './Author';

const author = {
  "id": 1,
  "name": "AuthorName",
  "avatar": "//upload.wikimedia.org/wikipedia/commons/thumb/1/18/Drew_Karpyshyn_-_Lucca_Comics_%26_Games_2014.JPG/200px-Drew_Karpyshyn_-_Lucca_Comics_%26_Games_2014.JPG",
  "email": "author.email@hotmail.com",
  "bio": "AuthorBio"
};

test('render author', () => {
  const { getByText, getByAltText } = render(<Author author={author}/>);

  /* тестируем аватарку */
  expect(getByAltText(author.name)).toBeInTheDocument();
  expect(getByAltText(author.name)).toHaveAttribute('src', author.avatar);

  /* тестируем отображение имени */
  expect(getByText(/AuthorName/)).toBeInTheDocument();

  /* тестируем отображение email */
  expect(getByText(/author.email@hotmail.com/)).toBeInTheDocument();

  /* тестируем отображение bio */
  expect(getByText(/AuthorBio/)).toBeInTheDocument();
});

test('empty author', () => {
  const { getByText } = render(<Author/>);

  expect(getByText('Unknown')).toBeInTheDocument();
});