import React from "react";
import SingleItem from "../components/SingleItem";

const item = props => {
  return (
    <div>
      <SingleItem id={props.query.id} />
    </div>
  );
};

export default item;
