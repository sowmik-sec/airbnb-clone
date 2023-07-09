import "./App.css";
import Card from "./components/Card/Card";
import FirstHero from "./components/FirstHero/FirstHero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <FirstHero />
      <Card />
    </div>
  );
}

export default App;
