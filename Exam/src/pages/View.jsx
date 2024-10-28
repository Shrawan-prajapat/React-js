import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './View.css';

const View = () => {
  const navigate = useNavigate();
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [filter, setFilter] = useState([]);
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
    <div className="task-container">
      <h2>React CRUD</h2>

      <input
        type="text"
        placeholder="Search by name..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="search-input"
      />

      <select onChange={(e) => setSort(e.target.value)} value={sort}>
        <option value="">Sort by Name</option>
        <option value="asc">Ascending</option>
        <option value="dsc">Descending</option>
      </select>

      {filter.length > 0 || record.length > 0 ? (
        <table className="task-table">
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
                  <td>{index + 1}</td>
                  <td className="task-title">{name}</td>
                  <td className="task-description">{desc}</td>
                  <td>
                    <button
                      onClick={() => statusChange(status, userid)}
                      style={{ color: status === "active" ? "green" : "red" }}
                    >
                      {status}
                    </button>
                  </td>
                  <td>
                    <button
                      className="button button-complete"
                      onClick={() => navigate(`/edit`, { state: val })}
                    >
                      Edit
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
    </div>
  );
};

export default View;
