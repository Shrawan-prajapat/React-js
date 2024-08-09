import React, { Component } from 'react';
import DataDisplay from './DataDisplay ';

class ParentComponent extends Component {
  render() {
    const data = [
      {
        grid: 1,
        name: 'Kishan',
        email: 'kishan@gmail.com',
        password: 'kishan@123',
        course: ["html", "css", "bootstrap", "js"],
        city: "surat"
      },
      {
        grid: 2,
        name: 'Jay',
        email: 'jay@gmail.com',
        password: 'kishan@123',
        course: ["photosho", "figma", "illustrator", "adobe xd"],
        city: "rajkot"
      },
      {
        grid: 3,
        name: 'Ajay',
        email: 'ajay@gmail.com',
        password: 'ajay@123',
        course: ["html", "css", "bootstrap", "nodejs"],
        city: "amareli"
      },
      {
        grid: 4,
        name: 'Nisha',
        email: 'nisha@gmail.com',
        password: 'nisha@123',
        course: ["html", "css", "bootstrap", "python"],
        city: "vadodara",
       
      }
    ];

    return (
      <div className="parent-container">
        <h1 align="center">Data List</h1>
        <DataDisplay data={data} />
      </div>
    );
  }
}

export default ParentComponent;
