import React from 'react';
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import Author from "./Author";

test('render author', () => {
  const author = {
    name: 'Drew Karpyshyn',
    avatar: '//upload.wikimedia.org/wikipedia/commons/thumb/1/18/Drew_Karpyshyn_-_Lucca_Comics_%26_Games_2014.JPG/200px-Drew_Karpyshyn_-_Lucca_Comics_%26_Games_2014.JPG',
    email: 'drew.karpyshyn@hotmail.com',
    bio: 'Drew Karpyshyn (born July 28, 1971) is a Canadian video game scenario writer, scriptwriter and ' +
      'novelist. He served as a senior writer for BioWare\'s Star Wars: Knights of the Old Republic and ' +
      'lead writer for the first two Mass Effect video games. He left BioWare in 2012 to focus on his Chaos ' +
      'Born novels, and returned to it three years later in 2015. On March 9, 2018, he announced he was once ' +
      'again leaving BioWare to focus on his independent work.',
  };

  const { getByText, getByAltText } = render(<Author author={author}/>);

  expect(getByAltText(author.name)).toBeInTheDocument();
  expect(getByAltText(author.name)).toHaveAttribute('src', author.avatar);

  expect(getByText(`<b>Name</b>: ${author.name}`)).toBeInTheDocument();
  expect(getByText(`<b>Email</b>: ${author.email}`)).toBeInTheDocument();
  expect(getByText(/BioWare/)).toBeInTheDocument();
});

test('empty author', () => {
  const { getByText } = render(<Author/>);

  expect(getByText('Unknown')).toBeInTheDocument();
});