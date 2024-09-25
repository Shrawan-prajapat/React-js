import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const View = () => {
  const [sort, setSort] = useState('');
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');

  const [filter, setFilter] = useState([]);

  const navigate = useNavigate();

  const [record, setRecord] = useState(
    JSON.parse(localStorage.getItem('users')) || []
  );

  useEffect(() => {
    let updatedRecords = [...record];

    
    if (search !== '') {
      updatedRecords = updatedRecords.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    
    if (sort === 'asc') {
      updatedRecords.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === 'dsc') {
      updatedRecords.sort((a, b) => b.name.localeCompare(a.name));
    }

   
    if (status === 'active') {
      updatedRecords = updatedRecords.filter((item) => item.status === 'active');
    } else if (status === 'deactive') {
      updatedRecords = updatedRecords.filter((item) => item.status === 'deactive');
    }

    setFilter(updatedRecords);
  }, [sort, search, status, record]);

  const statusChange = (st, id) => {
    let up = record.map((val) => {
      if (val.userid === id) {
        val.status = st === 'deactive' ? 'active' : 'deactive';
      }
      return val;
    });
    localStorage.setItem('users', JSON.stringify(up));
    setRecord(up);
  };

  const del= (userid) =>{
    const updatedRecords = record.filter(user => user.userid !== userid);
    setRecord(updatedRecords);
    localStorage.setItem("users", JSON.stringify(updatedRecords));
  }

  return (
   <div>
    
    <header>
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
          
            <Link  className="btn btn-outline-light me-2">
              Home
            </Link>
            <Link  className="btn btn-outline-light me-2">
              About
            </Link>
            <Link  className="btn btn-outline-light">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

     <div className="container py-5">
        
        <div className="form-2 ">
        <div className="row mb-4">
          
          <div className="col-md-4">
            <select
              className="form-select"
              onChange={(e) => setSort(e.target.value)}
              value={sort}
            >
              <option value="">---Select Sorting---</option>
              <option value="asc">A-Z</option>
              <option value="dsc">Z-A</option>
            </select>
          </div>
  
          <div className="col-md-4">
            <input
              className="form-control"
              type="text"
              placeholder="Search here"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
  
          <div className="col-md-4">
            <select
              className="form-select"
              onChange={(e) => setStatus(e.target.value)}
              value={status}
            >
              <option value="">---Select Status---</option>
              <option value="active">Active</option>
              <option value="deactive">Deactive</option>
            </select>
          </div>
        </div>
  
        <table className="table ">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Gender</th>
              <th>Date</th>
              <th>Course</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {(filter.length === 0 ? record : filter).map((val) => {
              const { userid, name, email, password, gender, course, date, status } = val;
              return (
                <tr key={userid}>
                  <td>{userid}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{password}</td>
                  <td>{gender}</td>
                  <td>{date}</td>
                  <td>{course.join(', ')}</td>
                  <td
                    className={`text-${status === 'active' ? 'success' : 'danger'}`}
                    onClick={() => statusChange(status, userid)}
                    style={{ cursor: 'pointer' }}
                  >
                    {status}
                  </td>
                  <td>
                      <div className="d-flex justify-content-between">
                      <button className="btn btn-danger" onClick={() => del(userid)}>Delete</button>
                    <button
                      className="btn btn-warning"
                      onClick={() => navigate(`/edit`, { state: val })}
                    >
                     <Link to="/add">Edit</Link>
                    </button>
                      </div>
                  
                    
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
  
        <div className="d-flex justify-content-end">
          <Link to="/add" className="btn btn-primary">
            Add
          </Link>
        </div>
        </div>
      </div>
   </div>
  );
};

export default View;
