import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "./styles/Form";
import formatMoney from "../lib/formatMoney";

class CreateItems extends Component {
  render() {
    return (
      <Form>
        <h2>Sell an Item</h2>
      </Form>
    );
  }
}

export default CreateItems;
