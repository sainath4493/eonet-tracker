import spinner from "../components/spinner.gif";

const Loadder = () => {
  return (
    <div className="loader">
      <img src={spinner} alt="Loading" />
      <h4>Fetching data from NASA API...</h4>
    </div>
  );
};

export default Loadder;
