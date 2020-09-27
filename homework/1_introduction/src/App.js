import React from 'react';

import "./styles.css";

import Layout from "./components/layouts/Layout";
import PageList from "./components/pages/PageList";

export default class App extends React.Component {
  render() {
    return (
      <Layout>
        <PageList />
      </Layout>
    )
  }
}

