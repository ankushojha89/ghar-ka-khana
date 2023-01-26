import { Link, useParams } from "react-router-dom";
import { cardList as apiData, urlPath } from "../../constant";

const Card = ({ cloudinaryImageId, name, costForTwoString, locality }) => {
    return (
      <div style={{ width: "90%", margin:"1% 5%", textAlign:"center" }}>
        <Link to={"/"} >Back</Link>
        <h1>{name}</h1>
        <img
          src={urlPath + cloudinaryImageId}
          alt={name}
          style={{ maxWidth: "100%" }}
        />
        <p className="price">{costForTwoString}</p>
        <p className="locality">{locality}</p>
      </div>
    );
};

export default CardDetails = ()=>{


    const { id } = useParams();

    const fData = apiData.filter(ele=>ele.data.id === id);

    
    return <Card {...fData[0].data}/>
}