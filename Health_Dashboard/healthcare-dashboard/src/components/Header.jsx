import "../styles/App.css";
import "../styles/Header.css";
import { Search, Bell } from "lucide-react";

const Header = () => {
  return (
    <div className="topbar">
      <div className="logo">
        <span className="logo-txt">Health</span>care.
      </div>

      <div className="search-container">
        <Search />
        <input type="text" placeholder="Search" className="search-input" />
        <Bell />
      </div>

      <div className="icons">
        <img src="src/data/Avatar.png" alt="Profile" className="avatar" />
        <button className="add-button">+</button>
      </div>
    </div>
  );
};

export default Header;
