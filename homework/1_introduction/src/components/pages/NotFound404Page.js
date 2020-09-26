import React from "react";
import {Helmet} from "react-helmet";

export default function NotFound404Page(props) {
  return (
    <>
      <Helmet>
        <title>404</title>
      </Helmet>
      <div>Not found 404</div>
    </>
  );
}