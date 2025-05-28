import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Controls from "./components/Controls";
import Container from "./components/Container";
import DisplayCounter from "./DisplayCounter";
import { useSelector } from "react-redux";
import PrivacyMessage from "./components/PrivacyMessage";


function App() {

  const privacy = useSelector(store => store.privacy);

  return (
    <center className="px-4 py-5 my-5">
      <Container className="bgCol">
        <Header></Header>
        <div className="col-lg-6 mx-auto">
        {privacy ? <PrivacyMessage /> : <DisplayCounter />}
        <Controls></Controls>
        </div>
      </Container>
    </center>
  );
}

export default App;
