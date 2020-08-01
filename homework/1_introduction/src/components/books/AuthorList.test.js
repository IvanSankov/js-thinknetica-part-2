import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import AuthorList from "./AuthorList";

const authors = [
  {
    "id": 1,
    "name": "AuthorName1",
    "avatar": "//upload.wikimedia.org/wikipedia/commons/thumb/1/18/Drew_Karpyshyn_-_Lucca_Comics_%26_Games_2014.JPG/200px-Drew_Karpyshyn_-_Lucca_Comics_%26_Games_2014.JPG",
    "email": "author.name1@hotmail.com",
    "bio": "AuthorBio1"
  },
  {
    "id": 2,
    "name": "AuthorName2",
    "avatar": "//upload.wikimedia.org/wikipedia/commons/thumb/7/7e/George_Orwell_press_photo.jpg/220px-George_Orwell_press_photo.jpg",
    "email": "author.name2@gmail.com",
    "bio": "AuthorBio2"
  },
  {
    "id": 3,
    "name": "AuthorName3",
    "avatar": "//upload.wikimedia.org/wikipedia/commons/thumb/5/56/Portrait_of_Alexander_Pushkin_%28Orest_Kiprensky%2C_1827%29.PNG/220px-Portrait_of_Alexander_Pushkin_%28Orest_Kiprensky%2C_1827%29.PNG",
    "email": "author.name3@gmail.com",
    "bio": "AuthorBio3"
  },
  {
    "id": 4,
    "name": "AuthorName4",
    "avatar": "//upload.wikimedia.org/wikipedia/commons/thumb/0/06/Alexander_Dumas_p%C3%A8re_par_Nadar_-_Google_Art_Project.jpg/220px-Alexander_Dumas_p%C3%A8re_par_Nadar_-_Google_Art_Project.jpg",
    "email": "author.name4@gmail.com",
    "bio": "AuthorBio4"
  }
];


test("render author list equal 1", () => {
  const { getByText, queryByText } = render(<AuthorList authors={authors.slice(0,1)}/>);

  expect(getByText(new RegExp(authors[0].name))).toBeInTheDocument();

  expect(queryByText("Show more...")).toBeNull();
});

test("render author list equal 3", () => {
  const { getByText, queryByText } = render(<AuthorList authors={authors.slice(0,3)}/>);

  expect(getByText(new RegExp(authors[0].name))).toBeInTheDocument();
  expect(getByText(new RegExp(authors[1].name))).toBeInTheDocument();
  expect(getByText(new RegExp(authors[2].name))).toBeInTheDocument();

  expect(queryByText("Show more...")).toBeNull();
});

test("render author list greeter than 3", () => {
  const { getByText, queryByText } = render(<AuthorList authors={authors}/>);

  expect(getByText(new RegExp(authors[0].name))).toBeInTheDocument();
  expect(getByText(new RegExp(authors[1].name))).toBeInTheDocument();
  expect(getByText(new RegExp(authors[2].name))).toBeInTheDocument();

  expect(queryByText(new RegExp(authors[3].name))).toBeNull();

  expect(getByText("Show more...")).toBeInTheDocument();
});

test("click on \"Show more...\"", () => {
  const { getByText, queryByText } = render(<AuthorList authors={authors}/>);

  expect(getByText(new RegExp(authors[0].name))).toBeInTheDocument();
  expect(getByText(new RegExp(authors[1].name))).toBeInTheDocument();
  expect(getByText(new RegExp(authors[2].name))).toBeInTheDocument();

  expect(queryByText(new RegExp(authors[3].name))).toBeNull();

  expect(getByText("Show more...")).toBeInTheDocument();

  /*
  * Все работает, но не понятно почему...
  * Тут мы жмем на клик, а если клик долго отрабатывает? то как подождать? в доке
  * https://testing-library.com/docs/react-testing-library/example-intro#act есть нечто
  *
  * await waitFor(() =>
  *   // getByRole throws an error if it cannot find an element
  *   screen.getByRole("heading")
  * )
  *
  * Но что-то я не понимаю, waitFor у нас же нет, значит ее надо определять, но если ее надо определять, как ей внутри
  * понять, что компонент уже перемонтировался и можно начинать искать в нем нужные вещи?
  *
  * */
  fireEvent.click(getByText("Show more..."));

  expect(queryByText(new RegExp(authors[3].name))).toBeInTheDocument();
});
