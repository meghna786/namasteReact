import React, { useEffect, useState } from "react";
import { RES_DATA_URL } from "../../utils/constants";
import { useParams } from "react-router-dom";
import { Shimmer } from "./Shimmer";

const RestaurantDetail = () => {
  const [resData, setResData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    let ftechData = async () => {
      let data = await fetch(RES_DATA_URL + id);
      data = await data.json();
      setResData(data?.data);
    };
    ftechData();
  }, []);

  let { name } = resData?.cards?.[2]?.card?.card?.info || "";
  let menu =
    resData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards || [];

  return resData ? (
    <div>
      <h1>Welcome to {name}</h1>
      <h1>Our Menu :</h1>
      <ul>
        {menu.map((item) => {
          return (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name}- {"Rs "}
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <Shimmer />
  );
};

export default RestaurantDetail;
