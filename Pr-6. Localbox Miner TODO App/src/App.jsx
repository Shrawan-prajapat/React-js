import React, { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [record, setRecord] = useState(JSON.parse(localStorage.getItem('users')) || []);
  const [editTaskId, setEditTaskId] = useState(null); // For storing the task being edited

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !date) {
      alert("All fields are required");
      return;
    }

    if (editTaskId !== null) {
      // Update the task if we are in edit mode
      const updatedRecord = record.map((task) =>
        task.userid === editTaskId ? { ...task, name, date } : task
      );
      setRecord(updatedRecord);
      localStorage.setItem('users', JSON.stringify(updatedRecord));
      alert("Task updated");
      setEditTaskId(null);
    } else {
      // Add a new task if not in edit mode
      let obj = {
        userid: Math.floor(Math.random() * 10000),
        name: name,
        date: date
      };
      let newRecord = [...record, obj];
      setRecord(newRecord);
      localStorage.setItem('users', JSON.stringify(newRecord));
      alert("User added");
    }

    setName("");
    setDate("");
  };

  const handleDelete = (userid) => {
    const updatedRecord = record.filter((user) => user.userid !== userid);
    setRecord(updatedRecord);
    localStorage.setItem('users', JSON.stringify(updatedRecord));
  };

  const handleEdit = (task) => {
    setName(task.name);
    setDate(task.date);
    setEditTaskId(task.userid);
  };

  return (
    <div align="">
      <div className="form-bg">
        <h2>TODO App</h2>
        <form onSubmit={handleSubmit}>
          <table>
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
                    placeholder="Add date"
                    value={date}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="submit" value={editTaskId ? "Update Task" : "Add Task"} align="center" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <br />
        <br />
        <table>
          <tbody>
            {record.map((val) => {
              const { userid, name, date } = val;
              return (
                
                <div key={userid} className="bg-result">
                  <table>
                    <tr>{name}</tr>
                    <tr>{date}</tr>
                    <tr>
                      <button className='edit' onClick={() => handleEdit(val)}>
                        <i className="fa-solid fa-edit"></i> 
                      </button>
                      <button className='delete' onClick={() => handleDelete(userid)}>
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
  );
}

export default App;
