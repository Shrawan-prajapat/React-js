import React, { useState } from 'react';
import './Add.css';

const Add = () => {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [record, setRecord] = useState(JSON.parse(localStorage.getItem("users")) || []);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validation
        if (!name.trim() || !desc.trim()) {
            alert("Please fill in both fields.");
            return;
        }

        let obj = {
            userid: Math.floor(Math.random() * 100000),
            name: name,
            desc: desc,
            status: "deactive"
        };
        
        let newfield = [...record, obj];
        setRecord(newfield);
        localStorage.setItem("users", JSON.stringify(newfield));
        alert("Record Added");
        
        // Clear inputs
        setName("");
        setDesc("");
    };

    return (
      <div className='form' align="center">
       
        <form onSubmit={handleSubmit}>
          <table>
            <thead>
                <td>Name</td>
                <td>Des</td>
            </thead>
            <tbody>
              <tr>
               
                <td>
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc}
                  />
                </td>
                <td>
                  <input type="submit" value="Add Todo" />
                </td>
              </tr>
           
            </tbody>
          </table>
        </form>
      </div>
    );
};

export default Add;
