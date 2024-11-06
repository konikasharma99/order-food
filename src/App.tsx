import { createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import RestaurantCard from "./components/RestaurantCard/RestaurantCard.js";
import cardData from "./utils/mockData.js";
import About from "./components/About/About.tsx";
import Error from "./components/Error/error.tsx";
import Contact from "./components/Contact/Contact.tsx";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu.tsx";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <RestaurantCard cardProps={cardData} />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    element: <AppLayout />,
  },
]);

export default appRouter;
