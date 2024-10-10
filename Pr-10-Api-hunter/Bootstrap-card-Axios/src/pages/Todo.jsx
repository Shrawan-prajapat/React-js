import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState({}); // new state to track expanded state

  const getRecord = async () => {
    try {
      let { data } = await axios.get('https://dummyjson.com/recipes');
      setTodos(data.recipes);
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
    return (
      <div className="loading-spinner">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  const handleExpand = (id) => {
    setExpanded((prevExpanded) => ({ ...prevExpanded, [id]: !prevExpanded[id] }));
  };

  return (
    <div className="container my-5">
      <h2 align="center" className="mb-4">API Calling with Axios Method</h2>
      
      <div className="row justify-content-center">
        {todos.map((val) => (
          <div key={val.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card todo-card">
              <img
                src={val.image}
                className="card-img-top todo-card-img"
                alt={val.name}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center">{val.name}</h5>
                <p className="card-text text-truncate">
                  {val.instructions.length > 100
                    ? `${val.instructions.substring(0, 100)}...`
                    : val.instructions}
                </p>
                 {expanded[val.id] && (
                  <div className="expanded-recipe">
                    <p>{val.instructions}</p>
                  </div>
                )}
                <button
                  className="btn btn-primary btn-block mt-auto"
                  onClick={() => handleExpand(val.id)}
                >
                  {expanded[val.id] ? 'View Less' : 'View More'}
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