import React from "react";

function EmptySearchResults(props) {
  return <p>No hay resultados para {props.searchText}</p>;
}

export { EmptySearchResults };
