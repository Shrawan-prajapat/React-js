import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddUser } from "../action/crudAction";


const Add = () => {
    
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !phone) {
            alert("all filed is required");
            return false;
        }

        let obj = {
            id: Math.floor(Math.random() * 100000),
            name: name,
            phone: phone
        }

        dispatch(AddUser(obj))
        alert("record add")
      
    }

    return (
        <div align="center">
          
            <form onSubmit={handleSubmit} className="box">
                <table>
                    <tr>
                        
                        <td><input type="text" placeholder="Title" onChange={(e) => setName(e.target.value)} value={name} /></td>
                    </tr>
                    <tr>
                      
                        <td><input type="text" placeholder="Write a note..." onChange={(e) => setPhone(e.target.value)} value={phone} /></td>
                    </tr>
                    <tr>
                        <td></td>
                      
                        <td><input className="add" value="+" type="submit" /></td>
                    </tr>
                </table>
            </form>
        </div>
    )
}

export default Add;