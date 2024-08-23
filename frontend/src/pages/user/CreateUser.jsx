import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const navigate = useNavigate();
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
                  id=""
                  className="form-control"
                  onChange={handlechange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Email:</label>
                <input
                  type="email"
                  name="email"
                  id=""
                  className="form-control"
                  onChange={handlechange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Username:</label>
                <input
                  type="text"
                  name="username"
                  id=""
                  className="form-control"
                  onChange={handlechange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Password:</label>
                <input
                  type="password"
                  name="password"
                  id=""
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

export default CreateUser;
