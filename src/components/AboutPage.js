import React from "react";
import fireIcon from "@iconify/icons-mdi/fire";
import cubeIcon from "@iconify/icons-mdi/eject-outline";
import stromeIcon from "@iconify/icons-mdi/weather-hurricane";
import { Icon } from "@iconify/react";
const AboutPage = () => {
  return (
    <div className="about">
      <h3> Earth Observatory Natural Event Tracker (EONET) Application</h3>
      <p>
        All the data provided by EONET Application are fetched form NASA public
        API ( https://eonet.sci.gsfc.nasa.gov/api/v2.1/events ).
      </p>
      <h4>Application Track the below Natural disaster</h4>
      <ul>
        <li>
          <Icon icon={fireIcon} className="wildfire-icon" /> Wildfire
        </li>
        <li>
          <Icon icon={stromeIcon} className="strome-icon " /> Severe Storms
        </li>
        <li>
          <Icon icon={cubeIcon} className="iceberge-icon " /> Iceberg Storms
        </li>
      </ul>
      <h4>Git Repository :</h4>
      <p>https://github.com/sainath4493/eonet-tracker.git</p>
    </div>
  );
};

export default AboutPage;
