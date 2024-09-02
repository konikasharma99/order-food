import "./App.css";
import Header from "./components/Header/Header";
import RestaurantCard from "./components/Header/RestaurantCard/RestaurantCard";
import cardData from "./data.js";

function App() {
  return (
    <>
      <Header />
      <RestaurantCard cardProps={cardData} />
    </>
  );
}

export default App;
