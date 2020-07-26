import React from 'react';
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import Book from "./Book";
import book from '../db/data.json';

test('render book', () => {

  const { getByText } = render(<Book book={book} />);

  expect(getByText(`<b>Title</b>: ${book.title}`)).toBeInTheDocument();
  expect(getByText(`<b>Short description</b>: ${book.shortDescription}`)).toBeInTheDocument();
  expect(getByText(`<b>Pages</b>: ${book.pages}`)).toBeInTheDocument();
  expect(getByText(`<b>Language</b>: ${book.language}`)).toBeInTheDocument();
  expect(getByText(`<b>Progress</b>: ${book.progress}%`)).toBeInTheDocument();
  expect(getByText(`<b>Min price</b>: ${book.minPrice}$`)).toBeInTheDocument();
  expect(getByText(`<b>Desired price</b>: ${book.desiredPrice}$`)).toBeInTheDocument();
  expect(getByText(`<b>Current sum</b>: ${book.currentSum}$`)).toBeInTheDocument();
  expect(getByText(`<b>Expected sum</b>: ${book.expectedSum}$`)).toBeInTheDocument();
});

test('empty author', () => {
  const { getByText } = render(<Book/>);

  expect(getByText('Unknown')).toBeInTheDocument();
});