import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCities } from "../../contexts/CitiesContext";
import BackButton from "../button/back-button/BackButton";
import Spinner from "../spinner/Spinner";

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { id } = useParams();
  const { getCity, currentCity, isLoading } = useCities();

  useEffect(() => {
    getCity(id);
  }, [id, getCity]);

  if (isLoading || !currentCity) return <Spinner />;

  const { cityName, emoji, date, notes } = currentCity;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-100">
      <div className="space-y-2">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
          City name
        </p>
        <h3 className="text-2xl font-bold">
          <span className="mr-2">{emoji}</span>
          {cityName}
        </h3>
      </div>

      <div className="mt-6 space-y-2">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
          You went to {cityName} on
        </p>
        <p className="text-sm text-slate-200">{formatDate(date)}</p>
      </div>

      {notes && (
        <div className="mt-6 space-y-2">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
            Your notes
          </p>
          <p className="text-sm text-slate-200">{notes}</p>
        </div>
      )}

      <div className="mt-6 space-y-2">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
          Learn more
        </p>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-white underline decoration-white/40 underline-offset-4"
        >
          Check out {cityName} on Wikipedia ?
        </a>
      </div>

      <div className="mt-6">
        <BackButton />
      </div>
    </div>
  );
}

export default City;
