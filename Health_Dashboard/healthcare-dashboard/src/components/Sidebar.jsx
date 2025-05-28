import { LayoutDashboard, CalendarDays, SquarePlus, FileChartLine, MessageCircleMore, Phone, Settings, ArrowUpDown, Settings2 } from "lucide-react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <h3 className="section-title">General</h3>
        <ul className="nav-list">
          <li className="nav-item active">
            <div className="icons">
              <LayoutDashboard />
            </div>
            <span >Dashboard</span>
          </li>
          <li className="nav-item">
            <div className="icons">
              <ArrowUpDown />
            </div>
            <span className="text">History</span>
          </li>
          <li className="nav-item">
            <div className="icons">
              <CalendarDays />
            </div>
            <span className="text">Calendar</span>
          </li>
          <li className="nav-item">
            <div className="icons">
              <SquarePlus />
            </div>
            <span className="text">Appointments</span>
          </li>
          <li className="nav-item">
            <div className="icons">
              <FileChartLine />
            </div>
            <span className="text">Statistics</span>
          </li>
          <br /> <br />
          <h3 className="section-title">Tools</h3>
          <li className="nav-item">
            <div className="icons">
              <MessageCircleMore />
            </div>
            <span className="text">Chat</span>
          </li>
          <li className="nav-item">
            <div className="icons">
              <Phone />
            </div>
            <span className="text">Support</span>
          </li>
        </ul>
        <br />
        <br />
        <ul className="setting">
          <li className="nav-item">
            <div className="icons"><Settings /></div>
            <span className="text">Settings</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
