
import React, { useState } from 'react';

function ProductComponent({ product }) {
  const [added, setAdded] = useState(false);

  return (
    <div>
      <h4>{product.name}</h4>
      <button onClick={() => setAdded(true)}>Add to Cart</button>
      {added && <p>Added to Cart!</p>}
    </div>
  );
}

export default ProductComponent;