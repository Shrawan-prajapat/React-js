import React, { useEffect, useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState({}); // state to track expanded rows

  const getRecord = async () => {
    try {
      const response = await fetch('https://dummyjson.com/carts', {
        method: 'GET',
      });
      const data = await response.json(); // Parse the response as JSON
      setTodos(data.carts); // Set the carts data
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecord();
  }, []);

  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  const handleExpand = (id) => {
    setExpanded((prevExpanded) => ({ ...prevExpanded, [id]: !prevExpanded[id] }));
  };

  return (
    <div className="container my-5">
      <h2 align="center" className="mb-4">Carts Data</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Cart ID</th>
            <th scope="col">Total Products</th>
            <th scope="col">Total Price</th>
            <th scope="col">Discounted Total</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
  {todos.map((cart) => (
    <React.Fragment key={cart.id}>
      <tr>
        <td data-label="Cart ID">{cart.id}</td>
        <td data-label="Total Products">{cart.totalProducts}</td>
        <td data-label="Total Price">${cart.total}</td>
        <td data-label="Discounted Total">${cart.discountedTotal}</td>
        <td data-label="Action">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => handleExpand(cart.id)}
          >
            {expanded[cart.id] ? 'View Less' : 'View More'}
          </button>
        </td>
      </tr>
      {expanded[cart.id] && (
        <tr>
          <td colSpan="5">
            <div className="expanded-cart">
              <h6>Products in Cart:</h6>
              <ul>
                {cart.products.map((product) => (
                  <li key={product.id}>
                    {product.title} - Quantity: {product.quantity} - Price: ${product.price}
                  </li>
                ))}
              </ul>
            </div>
          </td>
        </tr>
      )}
    </React.Fragment>
  ))}
</tbody>
      </table>
    </div>
  );
};

export default Todo;
