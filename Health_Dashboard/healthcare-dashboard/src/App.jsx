import './styles/App.css';
import DashboardMainContent from './components/DashboardMainContent'
import Header from './components/Header'
import Sidebar from './components/Sidebar';

 

function App() {
  

  return (
    <>
      <Header></Header>
      <div className='main-content'>
        <Sidebar></Sidebar>
        <DashboardMainContent></DashboardMainContent>
      </div>
    </>
  );
}

export default App
