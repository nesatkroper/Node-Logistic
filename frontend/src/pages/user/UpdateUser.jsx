import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function UpdateUser() {
  const navigate = useNavigate();
  const id = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/user.show/" + id)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user: ", error));
  }, [id]);

  const [value, setValue] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const handlechange = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/user.create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      if (response.ok) {
        navigate("/user");
        console.log("Data saved successfully");
      } else {
        console.log("Error saving data");
      }
    } catch (error) {
      console.error("error", error);
    }
  };
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="card col-6">
          <div className="card-header">
            <h3>Create User</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handlesubmit}>
              <div className="form-group">
                <label htmlFor="">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  className="form-control"
                  onChange={handlechange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  className="form-control"
                  onChange={handlechange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Username:</label>
                <input
                  type="text"
                  name="username"
                  value={user.username}
                  className="form-control"
                  onChange={handlechange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Password:</label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  className="form-control"
                  onChange={handlechange}
                />
              </div>
              <button type="submiit" name="" id="" className="btn btn-primary">
                Add User
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UpdateUser;
