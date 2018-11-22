import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "./styles/Form";
import formatMoney from "../lib/formatMoney";

class CreateItems extends Component {
  state = {
    title: "Red dead redemption",
    description: "I love black ops 4",
    image: "noah.jpg",
    largeImage: "large-noah.jpg",
    price: 175
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  render() {
    return (
      <Form
        onSubmit={e => {
          e.preventDefault();
          console.log(this.state);
        }}
      >
        <fieldset>
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              name="title"
              placeholder="title"
              required
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="price">
            Price
            <input
              type="number"
              id="price"
              name="price"
              placeholder="price"
              required
              value={this.state.price}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="description">
            Description
            <textarea
              id="description"
              name="description"
              placeholder="Enter a description"
              required
              value={this.state.description}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </fieldset>
      </Form>
    );
  }
}

export default CreateItems;
