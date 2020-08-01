import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Book from "./Book";
import withMarkup from "../../test/helpers/withMarkup";

const book = {
  "title": "BookTitle",
  "shortDescription": "BookShortDescription",
  "pages": 389,
  "subscribers": 1000,
  "language": "BookLanguage",
  "progress": 1,
  "cover": "//upload.wikimedia.org/wikipedia/en/thumb/9/92/Star_Wars_-_Darth_Bane_-_Path_of_Destruction_cover.jpg/220px-Star_Wars_-_Darth_Bane_-_Path_of_Destruction_cover.jpg",
  "authors": [
    {
      "id": 1,
      "name": "Drew Karpyshyn",
      "avatar": "//upload.wikimedia.org/wikipedia/commons/thumb/1/18/Drew_Karpyshyn_-_Lucca_Comics_%26_Games_2014.JPG/200px-Drew_Karpyshyn_-_Lucca_Comics_%26_Games_2014.JPG",
      "email": "drew.karpyshyn@hotmail.com",
      "bio": "Drew Karpyshyn (born July 28, 1971) is a Canadian video game scenario writer, scriptwriter and novelist. He served as a senior writer for BioWare's Star Wars: Knights of the Old Republic and lead writer for the first two Mass Effect video games. He left BioWare in 2012 to focus on his Chaos Born novels, and returned to it three years later in 2015. On March 9, 2018, he announced he was once again leaving BioWare to focus on his independent work."
    },
  ],
  "minPrice": 100,
  "desiredPrice": 500,
  "currentSum": 1,
  "expectedSum": 50
};

const modalRoot = document.createElement("div");
modalRoot.setAttribute("id", "modal-root");
document.body.appendChild(modalRoot);

test("render book", () => {
  const { getByText } = render(<Book book={book} />);
  const getByTextWithMarkup = withMarkup(getByText);

  expect(getByTextWithMarkup(`Title: ${book.title}`)).toBeInTheDocument();
  expect(getByTextWithMarkup(`Short description: ${book.shortDescription}`)).toBeInTheDocument();
  expect(getByTextWithMarkup(`Pages: ${book.pages}`)).toBeInTheDocument();
  expect(getByTextWithMarkup(`Language: ${book.language}`)).toBeInTheDocument();
  expect(getByTextWithMarkup(`Progress: ${book.progress}%`)).toBeInTheDocument();
  expect(getByTextWithMarkup(`Min price: ${book.minPrice}$`)).toBeInTheDocument();
  expect(getByTextWithMarkup(`Desired price: ${book.desiredPrice}$`)).toBeInTheDocument();
  expect(getByTextWithMarkup(`Current sum: ${book.currentSum}$`)).toBeInTheDocument();
  expect(getByTextWithMarkup(`Expected sum: ${book.expectedSum}$`)).toBeInTheDocument();
});

test("render label", () => {
  const book = {
    "subscribers": 1000,
    "authors": []
  }
  const { getByText } = render(<Book book={book} />);
  expect(getByText("Popular")).toBeInTheDocument();
});

test("Do not render label", () => {
  const book = {
    "subscribers": 100,
    "authors": []
  }
  const { queryByText } = render(<Book book={book} />);
  expect(queryByText("Popular")).toBeNull();
});

/**
 * У этого теста, какое-то странное поведение, по идеи он должен сломаться на строке 82, т.к. мы закрываем попап, а он
 * не ломается.
 */
test("display modal", () => {
  const { getByText, queryByText } = render(<Book book={book} />);
  expect(getByText("Subscription condition")).toBeInTheDocument();

  fireEvent.click(getByText("Subscription condition"));

  expect(getByText("Modal body text goes here.")).toBeInTheDocument();
  expect(getByText("Modal body text goes here.")).toBeVisible();

  fireEvent.click(getByText("I agree"));

  expect(queryByText("Modal body text goes here.")).toBeVisible();

  fireEvent.click(getByText("Subscription condition"));

  expect(getByText("Modal body text goes here.")).toBeInTheDocument();

  fireEvent.click(getByText("Close"));

  expect(queryByText("Modal body text goes here.")).toBeInTheDocument();
});

test("empty author", () => {
  const { getByText } = render(<Book/>);

  expect(getByText("Unknown")).toBeInTheDocument();
});