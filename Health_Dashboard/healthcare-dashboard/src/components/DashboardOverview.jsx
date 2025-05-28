import ActivityFeed from "./ActivityFeed";
import AnatomySection from "./AnatomySection";
import CalendarView from "./CalendarView";
import HealthStatusCards from "./HealthStatusCards";
import UpcomingSchedule from "./UpcomingSchedule";


const DashboardOverview = () => {
  return (
    <>
      <div>
        <AnatomySection />
        <ActivityFeed />
      </div>
      <div><HealthStatusCards /></div>
      <div>
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </>
  );
};

export default DashboardOverview;
