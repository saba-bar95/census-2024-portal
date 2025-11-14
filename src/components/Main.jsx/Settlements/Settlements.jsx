import "./Settlements.scss";
import { useState } from "react";
// import GoogleMap from "./GoogleMap";
// import getCoordinates from "./GetCoordinates";
import images from "./SettlementImages";
import translations from "../../../translation";

export default function Settlements() {
  const language = localStorage.getItem("language");
  const text = translations[language].main.settlements;

  // const apiKey = "AIzaSyB7D2WPALIsuME2Y8wbWGZuob19cbpuiR0";

  const settlementNames = [];
  const settlements = [];

  text.names.forEach((el) => {
    settlements.push(el);
    settlementNames.push(el.name);
  });

  const [selected, setSelected] = useState(0);
  // const initialCoordinates = { lat: 43.0334614, lng: 42.6894803 };
  // const [selectedLocation, setSelectedLocation] = useState(initialCoordinates);

  const handleClick = async (index) => {
    setSelected(index);

    // const address = settlementNames[index];
    // try {
    //   const result = await getCoordinates(address);
    //   const location = result[0].geometry.location;

    //   const coordinates = {
    //     lat: location.lat(),
    //     lng: location.lng(),
    //   };
    //   setSelectedLocation(coordinates);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <div className="settlements--section">
      <h1>{text.header}</h1>
      <p>{text.para}</p>
      <div className="container">
        <ul>
          {settlements.map((item, index) => (
            <li
              key={index}
              className={selected === index ? "selected" : ""}
              onClick={() => handleClick(index)}>
              {item.name}
            </li>
          ))}
        </ul>
        <div className="border-container"></div>
        <div className="wrapper">
          <div className="left-side">
            <img src={images[selected]} alt="" />
            <h2>{settlements[selected]["municipality"]}</h2>
            {settlements[selected]["units"] && (
              <p>{settlements[selected]["units"]}</p>
            )}
          </div>
          {/* <div className="right-side">
            <GoogleMap location={selectedLocation} key={apiKey} />
          </div> */}
        </div>
      </div>
    </div>
  );
}
