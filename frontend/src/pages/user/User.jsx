import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/user")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user: ", error));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:3000/api/user.remove/" + id);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      <h2>List of User</h2>
      <Link className="btn btn-success" to={"/createUser"}>
        Create User
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>
                <Link
                  className="btn btn-warning me-2"
                  to={`/updateUser/${user.id}`}
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default User;
