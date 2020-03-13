import React from 'react';

function ProductList(props) {

  const renderProducts = () =>
    props.data.map((productItem) => (
      <div key={productItem.id}>
        <div>
          <h3>{productItem.name}</h3>
          <p>{productItem.content}</p>          
        </div>
      </div>
    ));
  return (
    <div>
      <h1>Lista produktów</h1>
      {renderProducts()}
    </div>
  )
}

export default ProductList;