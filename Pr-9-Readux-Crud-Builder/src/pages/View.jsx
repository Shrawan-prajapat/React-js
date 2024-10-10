import { useDispatch, useSelector } from "react-redux";
import { DeleteUser } from "../action/crudAction";
import "./add.css"

const View = () => {
  const users = useSelector((state) => state.crud.users);
  const dispatch = useDispatch();

  const deleteUser = (id) => {
    dispatch(DeleteUser(id));
    alert("Record deleted");
  };

  return (
    <div align="center">
      <div className="users-container">
        {users.map((u, i) => {
          return (
            <div className="box" key={u.id}>
              <div className="user-info">
                <p className="user-name">{u.name}</p>
                <p className="user-phone">{u.phone}</p>
              </div>
              <div className="user-actions">
                <button className="delete-btn" onClick={() => deleteUser(u.id)}>
                  <i className="fa-solid fa-trash"></i> 
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default View;
