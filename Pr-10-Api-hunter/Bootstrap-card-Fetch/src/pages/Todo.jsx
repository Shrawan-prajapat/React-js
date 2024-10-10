import React, { useEffect, useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [expanded, setExpanded] = useState({}); // new state to track expanded state

  const getRecord = async () => {
    try {
      const response = await fetch('https://dummyjson.com/carts', {
        method: 'GET',
      });
      const data = await response.json(); // Parse the response as JSON
      setTodos(data.carts); // Set the carts data
    } catch (err) {
      console.log(err);
      setError('Failed to fetch data. Please try again.');
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
      
      <div className="row justify-content-center">
        {todos.map((cart) => (
          <div key={cart.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div>
                <img src={cart.thumbnail} alt="" />
            </div>
            <div className="card todo-card">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center">Cart ID: {cart.id}</h5>
                <p className="card-text text-truncate">Total Products: {cart.totalProducts}</p>
                <p className="card-text text-truncate">Total Price: ${cart.total}</p>
                <p className="card-text text-truncate">Discounted Total: ${cart.discountedTotal}</p>

                {expanded[cart.id] && (
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
                )}
                <button
                  className="btn btn-primary btn-block mt-auto"
                  onClick={() => handleExpand(cart.id)}
                >
                  {expanded[cart.id] ? 'View Less' : 'View More'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
