import React from "react";
import useFetch from "../hooks/useFetch";

function Test() {
  const { data, isLoading } = useFetch("http://localhost:3000/read");
  console.log(data, isLoading);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data && data.length > 0 ? (
        data.map((product) => (
          <div key={product.id}>
            <h1>{product.Ptype}</h1>
            {product.idType && <div>ID Type: {product.idType}</div>}
            {product.Ptype && <div>P Type: {product.Ptype}</div>}
          </div>
        ))
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
}

export default Test;
