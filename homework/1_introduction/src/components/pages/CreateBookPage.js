import React from "react";
import Helmet from "react-helmet";
import CreateBookForm from "../forms/book/CreateBookForm";

export default function CreateBookPage(props) {
  return (
    <>
      <Helmet>
        <title>Create book</title>
      </Helmet>

      <CreateBookForm />
    </>
  );
}