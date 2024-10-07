import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Add = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [date, setDate] = useState("")
     const [status, setStatus] = useState("")
    const [record, setRecord] = useState(JSON.parse(localStorage.getItem("users")) || [])
    const [course, setCourse] = useState([])



    const handleCourseChange = (checked, c) => {
        let all = [...course];
        if (checked) {
            all.push(c);
        } else {
            all = all.filter(val => val != c)
        }
        setCourse(all)
    }

    const handleSubmit = (e) => {
        if(!name|| !email || !password || !gender || !course || !status ){
            alert("all field are reqired")
        }
       else{
        e.preventDefault();
        let obj = {
            userid: Math.floor(Math.random() * 10000),
            name: name,
            email: email,
            password: password,
            gender: gender,
            course: course,
            date: date,
            status: status
        }



        let newfield = [...record, obj];
        setRecord(newfield);
        localStorage.setItem("users", JSON.stringify(newfield));
        alert("user add");
        setName("");
        setEmail("");
        setPassword("");
        setGender("");
        setDate("");
        setStatus("");
        setCourse([]);

       }

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
          
            <Link to={`/`}  className="btn btn-outline-light me-2">
View            </Link>
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
            <div className="container">
                <div className="row py-5 ">


                    <div className="form " onSubmit={handleSubmit}>
                        <form>
                        <div className="mb-4 p-2 d-flex rounded bg-secondary- h4  border-bottom  justify-content-center align-items-center shadow-sm  bg-body-tertiary rounded">
                               <label htmlFor="">Add User</label>
                             
                            </div>
                            <div className="mb-3 bg-dar">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" onChange={(e) => setName(e.target.value)}
                                    value={name} />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}
                                    value={email} />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)}
                                    value={password} />
                            </div>

                            <div>
                                <label htmlFor="exampleInputPassword1" className="form-label">Gender</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gender" id="male" value="Male" onChange={(e) => setGender(e.target.value)} />
                                    <label className="form-check-label" htmlFor="male">Male</label>
                                </div>

                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gender" id="female" value="Female" onChange={(e) => setGender(e.target.value)} />
                                    <label className="form-check-label" htmlFor="female">Female</label>
                                </div>

                            </div>
                            <div classname="course">
                                <label htmlFor="exampleInputPassword1" className="form-label mt-2">Course</label>
                                <div className="form-check">
                                    {
                                        ["html", "css", "bootstrap", "js", "react-js", "node-js", "php", "angular-js", "python", "laravel"].map((c) => {
                                            return (
                                                <label>
                                                    <input type="checkbox" className="mx-2" onChange={(e) => handleCourseChange(e.target.checked, c)} />{c}
                                                </label>
                                            )
                                        })
                                    }
                                </div>


                            </div>
                            <div className="mb-3">
                                <label htmlFor="date" className="form-label">Date</label>
                                <input type="date" className="form-control" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="status" className="form-label">Select Status</label>
                                <select
                                    className="form-select"
                                    id="status"
                                    onChange={(e) => setStatus(e.target.value)}
                                    value={status}
                                >
                                    <option value="">----Select status----</option>
                                    <option value="active">Active</option>
                                    <option value="deactive">Deactive</option>
                                </select>
                            </div>


                            <button type="submit" className="btn btn-primary">Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Add