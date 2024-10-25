import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react';
import { app } from '../../firebase';
import './Add.css'

const Add = () => {
    const [name, setName] = useState("");
    const db = getFirestore(app);

    const handlesubmit = async (e) => {
        e.preventDefault();
        
        if (!name.trim()) {
            alert("Please enter a todo.");
            return;
        }

        try {
            await addDoc(collection(db, "users"), {
                name: name,
            });
            alert("Record added successfully");
            setName("");
        } catch (err) {
            console.log(err);
            alert("Error adding record");
        }
    };

    return (
        <div >
            <h2>Todo List</h2>
            <form onSubmit={handlesubmit}>
                <table>
                    <tr>
                        <td>
                            <input 
                                type="text" 
                                placeholder="Add a todo..."
                                onChange={(e) => setName(e.target.value)} 
                                value={name} 
                            />
                        </td>
                        <td><input type="submit" value="Submit" /></td>
                    </tr>
                </table>
            </form>
        </div>
    );
};



export default Add