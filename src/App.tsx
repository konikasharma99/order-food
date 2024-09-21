import "./App.css";
import Header from "./components/Header/Header";
import RestaurantCard from "./components/RestaurantCard/RestaurantCard.js";
import cardData from "./utils/mockData.js";

function App() {
  return (
    <>
      <Header />
      <RestaurantCard cardProps={cardData} />
    </>
  );
}

export default App;
