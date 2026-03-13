import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import BackButton from "../button/back-button/BackButton";
import { useUrlPosition } from "../../hooks/useUrlPosition";
import Message from "../message/Message";
import Spinner from "../spinner/Spinner";
import { useCities } from "../../contexts/CitiesContext";
import { useNavigate } from "react-router-dom";

export function convertToEmoji(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Form() {
  const [lat, lng] = useUrlPosition();
  const latNum = lat ? Number(lat) : null;
  const lngNum = lng ? Number(lng) : null;
  const { createCity, isLoading } = useCities();
  const navigate = useNavigate();

  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState<Date | null>(new Date());
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState("");
  const [geocodingError, setGeocodingError] = useState("");

  useEffect(() => {
    if (latNum == null || lngNum == null) return;

    async function fetchCityData() {
      try {
        setIsLoadingGeocoding(true);
        setGeocodingError("");

        const res = await fetch(
          `${BASE_URL}?latitude=${latNum}&longitude=${lngNum}`
        );
        const data = (await res.json()) as {
          countryCode?: string;
          city?: string;
          locality?: string;
          countryName?: string;
        };

        if (!data.countryCode)
          throw new Error(
            "That doesn't seem to be a city. Click somewhere else."
          );

        setCityName(data.city || data.locality || "");
        setCountry(data.countryName || "");
        setEmoji(convertToEmoji(data.countryCode));
      } catch (err) {
        if (err instanceof Error) setGeocodingError(err.message);
      } finally {
        setIsLoadingGeocoding(false);
      }
    }
    fetchCityData();
  }, [latNum, lngNum]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!cityName || !date || latNum == null || lngNum == null) return;

    const newCity = {
      cityName,
      country,
      emoji,
      date: date.toISOString(),
      notes,
      position: { lat: latNum, lng: lngNum },
    };

    await createCity(newCity);
    navigate("/app/cities");
  }

  if (isLoadingGeocoding) return <Spinner />;

  if (latNum == null || lngNum == null)
    return <Message message="Start by clicking somewhere on the map" />;

  if (geocodingError) return <Message message={geocodingError} />;

  return (
    <form
      className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-100"
      onSubmit={handleSubmit}
    >
      <div className="space-y-2">
        <label
          htmlFor="cityName"
          className="text-xs font-black uppercase tracking-[0.3em] text-slate-400"
        >
          City name
        </label>
        <div className="flex items-center gap-3">
          <input
            id="cityName"
            onChange={(e) => setCityName(e.target.value)}
            value={cityName}
            className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
          <span className="text-2xl">{emoji}</span>
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="date"
          className="text-xs font-black uppercase tracking-[0.3em] text-slate-400"
        >
          When did you go to {cityName || "this place"}?
        </label>
        <DatePicker
          id="date"
          onChange={(selected) => setDate(selected)}
          selected={date}
          dateFormat="dd/MM/yyyy"
          className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-white/40"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="notes"
          className="text-xs font-black uppercase tracking-[0.3em] text-slate-400"
        >
          Notes about your trip
        </label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
          className="min-h-[120px] w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-white/40"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className={`rounded-full bg-white px-5 py-2 text-xs font-black uppercase tracking-[0.3em] text-slate-900 shadow-lg ${
            isLoading ? "opacity-60" : ""
          }`}
        >
          Add
        </button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
