import RestaurantCard from "./RestaurantCard";
import resList from "./utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);

  return (
    <div className="body">
      <div className="search">
        {/* <input type="text" placeholder="Search restaurants..." />  */}
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter((res) => {
              return res.info.avgRating > 4;
            });
            setListOfRestaurant(filteredList);
          }}
        >
          Filter
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
