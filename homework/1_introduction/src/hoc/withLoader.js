import React from "react";

import Loader from "../components/helpers/Loader";

const withLoader = ExtensibleComponent => (
  function ComponentWithLoader(props) {
    return props.book ? <ExtensibleComponent {...props} /> : <Loader />;
  }
)


export default withLoader;