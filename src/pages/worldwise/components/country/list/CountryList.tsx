import Spinner from "../../spinner/Spinner";
import CountryItem from "../item/CountryItem";
import Message from "../../message/Message";
import { useCities } from "../../../contexts/CitiesContext";

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce(
    (arr: { country: string; emoji: string }[], city) => {
      if (!arr.map((el) => el.country).includes(city.country))
        return [...arr, { country: city.country, emoji: city.emoji }];
      return arr;
    },
    []
  );

  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
