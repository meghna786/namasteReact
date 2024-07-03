import { Card } from "./Card"
import { useState, useEffect } from "react"

export const Body= ()=>{
      const [resDataList, setResDataList]=useState([]);

      useEffect(()=>{
            getData=async ()=>{
            let res= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            let data= await res.json();
            setResDataList(data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            }
            getData();
      },[])

      const filterList=()=>{
            let filteredList=resDataList.filter((item)=>item.info.avgRating>4);
            setResDataList(filteredList);
      }

      return (
            <div className="Body"> 
                  <div className="filter-btn">
                        <button onClick={filterList}>Top Rated Restaurants</button>
                  </div>
                  <div className="cardContainer">
                        {
                              resDataList.map((item)=>
                                   <Card resData={item?.info} key={item.info.id} />
                              )
                        }
                  </div>
            </div>

      )
}
