import "./App.css";
import Card from "./components/Card/Card";
import Contact from "./components/Contact/Contact";
import FirstHero from "./components/FirstHero/FirstHero";
import Navbar from "./components/Navbar/Navbar";
import img1 from "./components/Contact/images/mr-whiskerson.png";
import img2 from "./components/Contact/images/felix.png";
import img3 from "./components/Contact/images/fluffykins.png";
import img4 from "./components/Contact/images/pumpkin.png";
import img5 from "./components/Card/katie-zaferes.png";
import rating from "./components/Card/star.png";

function App() {
  return (
    <div className="">
      <Navbar />
      <FirstHero />
      <Card
        img={img5}
        rating={rating}
        country={"USA"}
        price={195}
        reviewCount={234}
        title={"Life Lessons with Katie Zafere"}
      />
      <div className="contacts">
        <Contact
          img={img1}
          name={"Mr. Whiskerson"}
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />
        <Contact
          img={img2}
          name={"felix"}
          phone="(212) 555-2345"
          email="fluff@me.com"
        />
        <Contact
          img={img3}
          name={"fluffykins"}
          phone="(212) 555-4567"
          email="thecat@hotmail.com"
        />
        <Contact
          img={img4}
          name={"pumpkin"}
          phone="(0800)"
          email="pumpkin@scrimba.com"
        />
      </div>
    </div>
  );
}

export default App;
