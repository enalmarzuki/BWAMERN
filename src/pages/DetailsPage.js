import React, { Component } from "react";

import Header from "parts/Header";
import PageDetailsTitle from "parts/PageDetailsTitle";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }

  render() {
    return <div></div>;
  }
}
