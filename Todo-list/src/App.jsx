import React, { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [record, setRecord] = useState(JSON.parse(localStorage.getItem('users')) || []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !date) {
      alert("All fields are required");
      return;
    }

    let obj = {
      userid: Math.floor(Math.random() * 10000),
      name: name,
      date: date
    };
    let newRecord = [...record, obj];
    setRecord(newRecord);
    localStorage.setItem('users', JSON.stringify(newRecord));
    alert("User added");
    setName("");
    setDate("");
  };

  const handleDelete = (userid) => {
    const updatedRecord = record.filter((user) => user.userid !== userid);
    setRecord(updatedRecord);
    localStorage.setItem('users', JSON.stringify(updatedRecord));
  };

  return (
   <body>
    
    <div align="" >
     <div className="form-bg">
     <h2>TODO App</h2>
      <form onSubmit={handleSubmit}>
        <table >
          <tbody>
            <tr>
              
              <td>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Add New Task"
                  value={name}
                />
              </td>
            </tr>
            <tr>
           
              <td>
                <input
                  type="date"
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="Add date " 
                  value={date}
                />
              </td>
            </tr>
            <tr>
             
              <td>
                <input type="submit" align="center" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <br />
      <br />
      <table>
       
        <tbody>
          {record.map((val, index) => {
            const { userid, name, date } = val;
            return (
              <div className="bg-result">
                <table key={userid}>
                
                <tr>{name}</tr>
                <tr>{date}</tr>
                <tr>
                  <button onClick={() => handleDelete(userid)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </tr>
                </table>
              </div>
              
            );
          })}
        </tbody>
      </table>
     </div>
    </div>
   </body>
  );
}

export default App;
