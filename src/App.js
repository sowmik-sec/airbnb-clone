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
import data from "./data";
console.log(data);

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    );
  });
  return (
    <div className="">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
