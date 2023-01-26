import { cardList as apiData, urlPath, appName } from "../../constant";
import { useEffect, useState } from "react";
import { useTitle } from "../hooks/customeFunctions";
import { Link } from "react-router-dom";

const Card = ({ cloudinaryImageId, id, name, costForTwoString, locality }) => {
  return (
    <div className="card">
      <Link to={"/card/"+id}><img
        src={urlPath + cloudinaryImageId}
        alt={name}
        title={name}
        style={{ maxWidth: "100%" }}
      /></Link>
      <h2><Link title={name} to={"/card/"+id}>{name}</Link></h2>
      <p className="price">{costForTwoString}</p>
      <p className="locality">{locality}</p>
      <p>
        <button>Add to Cart</button>
      </p>
    </div>
  );
};

const CardList = ({ searchTxt, cardList }) => {
  if (searchTxt.length > 0) {
    const filteredList = cardList.filter((element) =>
      element.data.name.toUpperCase().includes(searchTxt.toUpperCase())
    );

    return filteredList.length === 0 ? (
      <p>
        <b>No Result Found for:</b> <i>{searchTxt}</i>
      </p>
    ) : (
      filteredList.map((element) => (
        <Card key={element.data.id} {...element.data} />
      ))
    );
  }

  return cardList.length === 0 ? (
    <div style={{textAlign:"center", minHeight:"450px"}}>
      <p><b >Loading data...</b></p>
    </div>
  ) : (
    cardList.map((element) => <Card key={element.data.id} {...element.data} />)
  );
};

const SearchComponent = ({ searchTxt, setSearchTxt }) => {
  return (
    <div style={{ width: "100%", height: "50px" }}>
      <input
        onChange={(e) => setSearchTxt(e.target.value)}
        type="text"
        placeholder="Serach Here..."
        value={searchTxt}
      />
    </div>
  );
};

export default BodyComponent = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [cardList, setCardList] = useState([]);
  useTitle(`Home | ${appName}`);
  useEffect(() => {
    setTimeout(() => {
      setCardList(apiData);
    }, 1000);
  }, []);

  return (
    <div style={{ margin: "1%" }}>
      <h1 style={{ textAlign: "center" }}>Welcome to {appName} &#128516;</h1>
      <SearchComponent searchTxt={searchTxt} setSearchTxt={setSearchTxt} />
      <CardList cardList={cardList} searchTxt={searchTxt} />
    </div>
  );
};
