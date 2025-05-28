import "../styles/CalendarView.css"; 

  const days = [
    { date: 25, label: "Mon", times: ["10:00", "11:00", "12:00"] },
    { date: 26, label: "Tues", times: ["08:00", "09:00", "10:00"] },
    { date: 27, label: "Wed", times: ["12:00", "-", "13:00"] },
    { date: 28, label: "Thurs", times: ["10:00", "11:00", "-"] },
    { date: 29, label: "Fri", times: ["-", "14:00", "16:00"] },
    { date: 30, label: "Sat", times: ["12:00", "14:00", "15:00"] },
    { date: 31, label: "Sun", times: ["09:00", "10:00", "11:00"] },
  ];

  const CalendarView = () => {
    return (
      <>
        <div className="calendar-container">
          <div className="calendar-header">
            <h2>October 2021</h2>
            <div className="calendar-nav">
              <button>&lt;</button>
              <button>&gt;</button>
            </div>
          </div>
          <div className="calendar-grid">
            {days.map((day, index) => (
              <div key={index} className="day-column">
                <div className="day-header">
                  <span>{day.label}</span>
                  <br></br>
                  <br />
                  <strong>{day.date}</strong>
                </div>
                {day.times.map((time, idx) => (
                  <div
                    key={idx}
                    className={`time-slot ${
                      time === "09:00" && day.date === 26 ? "highlight" : ""
                    }`}
                  >
                    {time}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="appointment-card-container">
            <div className="appointCard dentist">
              <h3>
                Dentist <span className="icon">🦷</span>
              </h3>
              <p className="time">09:00–11:00</p>
              <p className="doctor">Dr. Cameron Williamson</p>
            </div>
            <div className="appointCard physiotherapy">
              <h3>
                Physiotherapy Appointment <span className="icon">💪</span>
              </h3>
              <p className="time">11:00–12:00</p>
              <p className="doctor">Dr. Kevin Djones</p>
            </div>
          </div>
        </div>
      </>
    );
  };

export default CalendarView;
