import React from "react";
import Map from "./Map";
import { useState, useEffect } from "react";
import Loadder from "./Loadder";
const HomePage = () => {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };

    fetchEvents();
  }, []);
  return <>{!loading ? <Map eventData={eventData} /> : <Loadder />}</>;
};

export default HomePage;
