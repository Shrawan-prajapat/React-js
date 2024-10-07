import { useDispatch, useSelector } from "react-redux";

import { DeleteUser } from "../action/crudAction";

const View = () => {

    const users = useSelector(state => state.crud.users);
    const dispatch = useDispatch();

    const deleteUser = (id) => {
        dispatch(DeleteUser(id));
        alert("record delete");
    }


    return (
        <div align="center">
          
            <table>
               
                <tbody>
                    {
                        users.map((u, i) => {
                            return (
                              <div className="d-flex">
                                 <div className="box">
                                 <tr key={++i}>
                                   
                                   <td>{u.name}</td>
                                   
                               
                               </tr>
                               <tr>
                               <td>{u.phone}</td>
                               </tr>
                               <tr><td>
                               <button onClick={() => deleteUser(u.id)}><i class="fa-solid fa-trash"></i></button> &nbsp;
                          
                           </td></tr>
                               </div>
                              </div>
                            )
                        })
                    }
                </tbody>
            </table>
            
        </div>
    )
}
export default View;