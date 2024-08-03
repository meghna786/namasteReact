import React, { useEffect, useState } from "react";

const useResData=()=>{

      const [resDataList, setResDataList]=useState([]);
      const [filteredList, setFiltererdList]=useState(resDataList);

      useEffect(()=>{
            getData=async ()=>{
            let res= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            let data= await res.json();
            setResDataList(data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFiltererdList(data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            }
            getData();
      },[])

      return [resDataList, filteredList, setFiltererdList];

}

export default useResData;