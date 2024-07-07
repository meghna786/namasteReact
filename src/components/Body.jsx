import { Card } from "./Card"
import { useState, useEffect } from "react"
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";

export const Body= ()=>{
      const [resDataList, setResDataList]=useState([]);
      const [filteredList, setFiltererdList]=useState([]);
      const [inputText, setInputText]=useState('');

      useEffect(()=>{
            getData=async ()=>{
            let res= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            let data= await res.json();
            setResDataList(data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFiltererdList(data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            }
            getData();
      },[])

      const filterList=()=>{
            let filteredList=resDataList.filter((item)=>item.info.avgRating>4);
            setFiltererdList(filteredList);
      }

      if(resDataList.length===0){
            return (
                  <Shimmer />
            )
      }

      return (
            <div className="Body"> 
                  <div className="search">
                        <input className="search-input" value={inputText} onChange={(e)=>{
                              setInputText(e.target.value)
                        }} />
                        <button className="search-btn" 
                         onClick={()=>{
                              let list=resDataList.filter((data)=>data.info.name.toLowerCase().includes(inputText))
                              setFiltererdList(list);
                         }}
                        >Search</button>
                  </div>
                  <div className="filter-btn">
                        <button onClick={filterList}>Top Rated Restaurants</button>
                  </div>
                  <div className="cardContainer">
                        {
                              filteredList.map((item)=>
                                   <Link to={'restaurants/'+item.info.id} key={item.info.id}><Card resData={item?.info} key={item.info.id} /> </Link>
                              )
                        }
                  </div>
            </div>

      )
}
