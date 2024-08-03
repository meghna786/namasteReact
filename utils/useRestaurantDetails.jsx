import React, { useEffect, useState } from "react";
import {RES_DATA_URL }from './constants'


const useRestaurantDetails=(id)=>{
      const [resData, setResData] = useState(null);
      useEffect(() => {
            let ftechData = async () => {
              let data = await fetch(RES_DATA_URL + id);
              data = await data.json();
              setResData(data?.data);
            };
            ftechData();
          }, []);


          return resData;
}

export default useRestaurantDetails;