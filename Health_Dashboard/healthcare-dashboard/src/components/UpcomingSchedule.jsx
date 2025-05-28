import "../styles/UpcomingSchedule.css";

const schedule = {
  Thursday: [
    { title: "Health checkup complete", time: "11:00 AM", icon: "💉" },
    { title: "Ophthalmologist", time: "14:00 PM", icon: "👁️" },
  ],
  Saturday: [
    { title: "Cardiologist", time: "12:00 AM", icon: "❤️" },
    { title: "Neurologist", time: "16:00 PM", icon: "🧑‍⚕️" },
  ],
};



const UpcomingSchedule = () => {
  return (
    <div className="schedule-container">
      <h2 className="heading">The Upcoming Schedule</h2>
      {Object.entries(schedule).map(([day, appointments]) => (
        <div key={day} className="day-section">
          <h3 className="day-title">On {day}</h3>
          <div className="appointments">
            {appointments.map((item, idx) => (
              <div className="appointment-card" key={idx}>
                <div className="appointment-header">
                  <span className="appointment-title">{item.title}</span>
                  <span className="appointment-icon">{item.icon}</span>
                </div>
                <div className="appointment-time">{item.time}</div>
              </div>
            ))} 
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;