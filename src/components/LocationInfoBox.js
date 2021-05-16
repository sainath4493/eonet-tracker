const LocationInfoBox = ({ id, title, date }) => {
  const dateConst = new Date(date);
  return (
    <div className="location-info">
      <h3>Event Location Info</h3>
      <ul>
        <li>
          <strong> ID:</strong> {id}
        </li>
        <li>
          <strong>TITLE:</strong>
          {title}
        </li>
        <li>
          <strong>LAST UPDATED ON: </strong>
          {dateConst.getDate()}/{dateConst.getMonth()}/{dateConst.getFullYear()}
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
