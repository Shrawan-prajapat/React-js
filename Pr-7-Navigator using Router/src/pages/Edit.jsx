import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Edit = () => {
 const navigate = useNavigate();
 const location = useLocation();

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
 const [record, setRecord] = useState(
   JSON.parse(localStorage.getItem("users")) || []
 );

  useEffect(()=>{
     setName(location?.state?.name)
     setDesc(location?.state?.desc);
  },[location?.state])

  const handleSubmit = (e) => {
    e.preventDefault();

    let up = record.map((val)=>{
      if(val.userid == location?.state?.userid){
         val.name = name;
         val.desc = desc;
      }
      return val;
    });
    localStorage.setItem('users',JSON.stringify(up));
    alert("record update");
    navigate('/');
  };

  return (
    <div className="form-container">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit} className="edit-form">
        <table className="form-table">
          <tr>
            <td>Name: </td>
            <td>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </td>
          </tr>
          <tr>
            <td>Description: </td>
            <td>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="submit" value="Edit" className="submit-btn" />
            </td>
          </tr>
        </table>
      </form>
      <Link to={`/`} className="link-btn">View</Link>
    </div>
  );
};

export default Edit;
