import { useState } from "react";

import fireIcon from "@iconify/icons-mdi/fire";
import cubeIcon from "@iconify/icons-mdi/eject-outline";
import stromeIcon from "@iconify/icons-mdi/weather-hurricane";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

const Map = ({ eventData, center, zoom }) => {
  const [id, setId] = useState(null);
  const [title, setTitle] = useState(null);
  const [date, setDate] = useState(null);
  const [infoBoxStatus, setInfoBoxStatus] = useState(false);
  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8) {
      return (
        <LocationMarker
          key={ev.id}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => {
            setInfoBoxStatus(true);
            setId(ev.id);
            setTitle(ev.title);
            setDate(ev.geometries[0].date);
          }}
          icon={fireIcon}
          iconStyle="wildfire-icon"
        />
      );
    }
    if (ev.categories[0].id === 15) {
      return (
        <LocationMarker
          key={ev.id}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => {
            setId(ev.id);
            setTitle(ev.title);
            setInfoBoxStatus(true);
            setDate(ev.geometries[0].date);
          }}
          icon={cubeIcon}
          iconStyle="iceberge-icon"
        />
      );
    }

    if (ev.categories[0].id === 10) {
      const latestLocation = ev.geometries.length - 1;
      return (
        <LocationMarker
          key={ev.id}
          lat={ev.geometries[latestLocation].coordinates[1]}
          lng={ev.geometries[latestLocation].coordinates[0]}
          onClick={() => {
            setId(ev.id);
            setTitle(ev.title);
            setInfoBoxStatus(true);
            setDate(ev.geometries[latestLocation].date);
          }}
          icon={stromeIcon}
          iconStyle="strome-icon"
        />
      );
    }

    return null;
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAmuDjO5VpoWDqwyJGEySVNeEt38GBLZeo" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {infoBoxStatus && <LocationInfoBox title={title} id={id} date={date} />}
    </div>
  );
};
Map.defaultProps = {
  center: {
    lat: 19.07283,
    lng: 72.88261,
  },
  zoom: 6,
};

export default Map;
