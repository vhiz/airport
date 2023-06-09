import { useContext } from "react";
import "./navbar.scss";
import { AuthContext } from "../../context/authContex";

export default function Navbar() {
  const { logout, currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="left">
        <h1>Dashboard</h1>
        <span>by mgbeahurike victor</span>
      </div>
      <div className="right">
        <img src={`https://airport-p17a.onrender.com${currentUser.img}`} alt="" />
        <button onClick={() => logout()}>Logout</button>
      </div>
    </div>
  );
}
