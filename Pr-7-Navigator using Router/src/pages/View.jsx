import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const View = () => {
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [filter, setFilter] = useState([]);
  const navigate = useNavigate();

  const [record, setRecord] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  useEffect(() => {
    let updatedRecords = [...record];

    if (search !== "") {
      updatedRecords = updatedRecords.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    
    if (sort === "asc") {
      updatedRecords.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "dsc") {
      updatedRecords.sort((a, b) => b.name.localeCompare(a.name));
    }

    if (status === "active") {
      updatedRecords = updatedRecords.filter((item) => item.status === "active");
    } else if (status === "deactive") {
      updatedRecords = updatedRecords.filter((item) => item.status === "deactive");
    }

    
    setFilter(updatedRecords);
  }, [sort, search, status, record]);

  const statusChange = (st, id) => {
    const updatedRecords = record.map((val) => {
      if (val.userid === id) {
        return { ...val, status: st === "deactive" ? "active" : "deactive" };
      }
      return val;
    });
    
    localStorage.setItem("users", JSON.stringify(updatedRecords));
    setRecord(updatedRecords);
  };

  return (
  <body>
      <div className='form' align="center">
      <h2>React Crud</h2>

 
     
      <select onChange={(e) => setStatus(e.target.value)} value={status}>
        <option value="">Select Status</option>
        <option value="active">Active</option>
        <option value="deactive">Deactive</option>
      </select>
      <br />
      <br />

      {filter.length > 0 || record.length > 0 ? (
        <table border={1}>
          <thead>
            <tr>
              <th>Srno</th>
              <th>Title</th>
              <th>Description</th>
            
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {(filter.length > 0 ? filter : record).map((val, index) => {
              const { userid, name, desc, status } = val;
              return (
                <tr key={userid}>
                  {/* // <td>{index + 1}</td> {} */}
                  <td>{name}</td>
                  <td>{desc}</td>
                 
                  <td
                    onClick={() => statusChange(status, userid)}
                    style={{ color: status === "active" ? "green" : "red" }}
                  >
                    {status}
                  </td>
                  <td>
                    <button onClick={() => navigate(`/edit`, { state: val })}>
                    <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>No records found</p>
      )}

      <Link className='add button' to={`/add`}>Add</Link>
    </div>
  </body>
  );
};

export default View;
