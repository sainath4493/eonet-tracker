const LocationInfoBox = ({ id, title, date }) => {
  const dateConst = new Date(date);
  return (
    <div className="location-info">
      <h3>Event Location Info</h3>
      <ul>
        <li>
          ID: <strong>{id}</strong>
        </li>
        <li>
          TITLE: <strong>{title}</strong>
        </li>
        <li>
          LAST UPDATED ON:{" "}
          <strong>
            {dateConst.getDate()}/{dateConst.getMonth()}/
            {dateConst.getFullYear()}
          </strong>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
