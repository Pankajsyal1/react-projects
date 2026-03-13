import Spinner from "../../spinner/Spinner";
import CityItem from "../item/CityItem";
import Message from "../../message/Message";
import { useCities } from "../../../contexts/CitiesContext";

function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className="flex flex-col gap-3 overflow-y-auto pr-1">
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
