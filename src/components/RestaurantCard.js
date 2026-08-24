import { CDN_URL } from "./utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    resData?.info;
  return (
    <div className="res-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-dish"
        className="food-img"
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <p>{costForTwo}</p>
      <p>{avgRating} stars</p>
      <p>{sla.deliveryTime} minutes</p>
    </div>
  );
};

export default RestaurantCard;
