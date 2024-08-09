import React, { Component } from 'react';
import './DataDisplay.css'; // Import CSS for styling

class DataDisplay extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="data-display-container">
        {data.map((item) => (
          <div key={item.grid} className="data-item" style={{backgroundImage:'url'}}>
            <h2>{item.name}</h2>
            <p><strong>Email:</strong> {item.email}</p>
            <p><strong>Password:</strong> {item.password}</p>
            <p><strong>Courses:</strong> {item.course.join(', ')}</p>
            <p><strong>City:</strong> {item.city}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default DataDisplay;
