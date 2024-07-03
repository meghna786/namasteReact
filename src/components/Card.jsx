import  RES_URL  from "../../utils/constants"

export const Card= (props)=>{
      return (
            <div className="card"> 
            <img 
            src={RES_URL + props?.resData?.cloudinaryImageId} 
            className="res-img"
            />
            <h3>{props?.resData?.name}</h3>
            <h4>{props?.resData?.costForTwo}</h4>
            <h4>{props?.resData?.avgRating}</h4>
            <h4>{props?.resData?.sla?.slaString}</h4>
            </div>
      )
}