import React, { useState } from 'react';
import { getDatabase, set, ref } from 'firebase/database';
import './Add.css';
import { app } from '../firebase';

const Add = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const db = getDatabase(app);
        let id = Math.floor(Math.random() * 100000);
        
        set(ref(db, `users/${id}`), {
            name: name,
            phone: phone,
            email: email,
            company: company,
            message: message
        })
        .then(() => {
            alert("Record added successfully");
            setName("");
            setPhone("");
            setEmail("");
            setCompany("");
            setMessage("");
        })
        .catch((error) => {
            console.error("Error adding record: ", error);
            alert("Failed to add record");
        });
    };

    return (
        <div align="center">
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                <table>
                    <div className="d-flex">
                    <tr>
                        <label>Name:</label>
                        <input 
                            type="text" 

                            onChange={(e) => setName(e.target.value)} 
                            value={name} 
                        />
                           
                       
                    </tr>
                    <tr>
                    <label>Company:</label>
                    <input 
                            type="text" 
                        
                            onChange={(e) => setCompany(e.target.value)} 
                            value={company} 
                        />
                    </tr>
                    </div>
                    <div className="d-flex">
                    <tr>
                        <label>Email:</label>
                        <input 
                            type="email" 
                         
                            onChange={(e) => setEmail(e.target.value)} 
                            value={email} 
                        />
                    </tr>
                    <tr>
                        <label>Phone:</label>
                        <input 
                            type="number" 
                         
                            onChange={(e) => setPhone(e.target.value)} 
                            value={phone} 
                        />
                    </tr>
                    </div>
                  
                    <tr>
                        <label>Message:</label>
                        <input 
                            type="text" className='med'
                         
                            onChange={(e) => setMessage(e.target.value)} 
                            value={message} 
                        />
                    </tr>
                </table>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Add;
