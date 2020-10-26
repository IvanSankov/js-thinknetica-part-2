import React from "react";
import {Switch, Route } from "react-router-dom";
import IndexPage from "./IndexPage";
import BookPage from "./BookPage";
import NotFound404Page from "./NotFound404Page";
import { indexPage, bookPage, createBookPage } from "../../helpers/url-hepler"
import CreateBookPage from "./CreateBookPage";

export default function PageList(props) {
  return (
    <Switch>

      <Route path={indexPage()} exact>
        <IndexPage />
      </Route>

      <Route path={createBookPage()} exact strict>
        <CreateBookPage />
      </Route>

      <Route path={bookPage()} exact strict>
        <BookPage />
      </Route>

      <Route>
        <NotFound404Page />
      </Route>

    </Switch>
  );
}