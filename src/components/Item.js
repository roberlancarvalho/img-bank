import React from "react";
import Container from "./Container";

const Item = ({ searchTerm }) => {
  return (
    <div>
      <h2>{searchTerm} Imagens</h2>
      <Container searchTerm={searchTerm} />
    </div>
  );
};

export default Item;
