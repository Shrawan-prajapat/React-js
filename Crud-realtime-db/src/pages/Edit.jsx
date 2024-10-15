import { getDatabase, ref, update } from "firebase/database";
import { app } from "../../firebase.js";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Edit() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [editId, setEditId] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setEditId(location.state[0]);
        setName(location.state[1]?.name || "");
        setPhone(location.state[1]?.phone || "");
    }, [location?.state]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const db = getDatabase(app);
        const users = ref(db, `users/${editId}`);

        update(users, {
            name: name,
            phone: phone
        })
        .then(() => {
            alert("Record Updated");
            navigate(`/`); // Correct navigation
        })
        .catch((error) => {
            console.error("Error updating record:", error);
        });
    };

    return (
        <div align="center">
            <h2>Edit Record</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label><br />
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} /><br /><br />
                <label htmlFor="phone">Phone Number:</label><br />
                <input type="number" onChange={(e) => setPhone(e.target.value)} value={phone} /><br /><br />
                <input type="submit" value="Submit" />
            </form>
            <Link to={`/`}>View</Link>
        </div>
    );
}

export default Edit;
