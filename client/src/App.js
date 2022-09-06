import { Routes, Route } from "react-router-dom";
import "./App.css";
import Body from "./components/Body/Body";
import HomePage from "./components/Home/HomePage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import UserProfile from "./components/User/UserProfile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/dashboard" element={<Body />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/user" element={<UserProfile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
