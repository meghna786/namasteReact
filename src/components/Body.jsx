import { Card } from "./Card"
import { useState, useEffect } from "react"
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useResData from "../../utils/useResData";
import useOnlineStatus from "../../utils/useOnlineStatus";

export const Body= ()=>{
      const [resDataList, filteredList, setFiltererdList]=useResData();
      const [inputText, setInputText]=useState('');
      const isOnline= useOnlineStatus();

      const filterList=()=>{
            let filteredList=resDataList.filter((item)=>item.info.avgRating>4);
            setFiltererdList(filteredList);
      }

      if(resDataList.length===0) return <Shimmer />;
      if(isOnline===false) return <h1>Looks like you are not connected</h1>;
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
