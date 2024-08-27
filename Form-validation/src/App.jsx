import React, { useState } from 'react';
import './index.css';

function App() {
  return (
    <div className="container">
      <div className="form p-5 mt-5  rounded-3">
        <h2>Form-Validation</h2>
        <div className="row mt-3">
          <form>
            <div className="mb-3">
              <label>Name:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
