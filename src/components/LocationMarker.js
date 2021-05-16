import { Icon } from "@iconify/react";

const LocationMarker = ({ lat, lng, onClick, icon, iconStyle }) => {
  return (
    <div className={iconStyle} onClick={onClick}>
      <Icon icon={icon} className="location-icon" />
    </div>
  );
};

export default LocationMarker;
