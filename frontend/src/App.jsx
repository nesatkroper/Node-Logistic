import { Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import User from "./pages/user/User";
import UpdateUser from "./pages/user/UpdateUser";
import CreateUser from "./pages/user/CreateUser";

function App() {
  const location = useLocation();
  return (
    <Routes key={location.pathname} location={location}>
      <Route path="/user" element={<User />} />
      <Route path="/createUser" element={<CreateUser />} />
      <Route path="/updateUser" element={<UpdateUser />} />
    </Routes>
  );
}

export default App;
