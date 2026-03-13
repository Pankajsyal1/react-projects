import { Link } from "react-router-dom";
import type { MouseEvent } from "react";
import { useCities, City } from "../../../contexts/CitiesContext";

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

type CityItemProps = {
  city: City;
};

function CityItem({ city }: CityItemProps) {
  const { currentCity, deleteCity } = useCities();
  const { cityName, emoji, date, id, position } = city;

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    deleteCity(id);
  }

  const isActive = id === currentCity?.id;

  return (
    <li>
      <Link
        className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
          isActive
            ? "border-white/40 bg-white/10"
            : "border-white/10 bg-white/5 hover:border-white/30"
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className="text-lg">{emoji}</span>
        <h3 className="flex-1 text-base text-white">{cityName}</h3>
        <time className="text-xs text-slate-300">{formatDate(date)}</time>
        <button
          className="ml-2 rounded-full border border-white/20 px-2 py-1 text-xs text-slate-200 transition hover:border-white/50 hover:text-white"
          onClick={handleClick}
          type="button"
        >
          ×
        </button>
      </Link>
    </li>
  );
}

export default CityItem;
