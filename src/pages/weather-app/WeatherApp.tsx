import { useEffect, useRef, useState, useCallback } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaWind,
  FaTint,
  FaSun,
  FaLocationArrow,
  FaCloudRain,
  FaTachometerAlt,
  FaClock,
} from "react-icons/fa";
import AppHeading from "../../components/common/AppHeading";
import { motion, AnimatePresence } from "framer-motion";

type LocationInfo = {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  localtime: string;
};

type ConditionInfo = {
  text: string;
  icon: string;
};

type CurrentWeather = {
  temp_c: number;
  temp_f: number;
  feelslike_c: number;
  feelslike_f: number;
  wind_kph: number;
  humidity: number;
  pressure_mb: number;
  uv: number;
  condition: ConditionInfo;
};

type ForecastDay = {
  day: {
    daily_chance_of_rain: number;
  };
  astro: {
    sunrise: string;
    sunset: string;
    moon_phase: string;
  };
  hour: Array<{
    time: string;
    temp_c: number;
    temp_f: number;
    will_it_rain: number;
    condition: ConditionInfo;
  }>;
};

type ForecastData = {
  forecastday: ForecastDay[];
};

type CitySuggestion = {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
};

type WeatherApiForecastResponse = {
  location: LocationInfo;
  current: CurrentWeather;
  forecast: ForecastData;
};

const getTime = (timeString: string) => {
  const date = new Date(timeString);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const minutesLabel = minutes.toString().padStart(2, "0");
  return `${hours}:${minutesLabel} ${ampm}`;
};

const weatherapi = "4bd596c3770c4589a3983928252903";
const WEATHER_API_BASE_URL = "https://api.weatherapi.com/v1";
const CREATE_API_URL = (endPoint: string, query: string) =>
  `${WEATHER_API_BASE_URL}/${endPoint}?key=${weatherapi}&q=${query}`;

export const WeatherStatCard = ({
  icon: Icon,
  value,
  unit = "",
  label,
  iconColor,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  value: number | string | undefined;
  unit?: string;
  label: string;
  iconColor: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="flex flex-col items-center gap-3 rounded-3xl border border-white/60 bg-white/70 p-5 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.6)] backdrop-blur"
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/5 text-slate-900 shadow-inner ${iconColor}`}
      >
        <Icon size={26} />
      </div>
      <p className="text-2xl font-black text-slate-900 tracking-tight">
        {value}
        {unit}
      </p>
      <p className="text-[10px] font-black uppercase tracking-[0.35em] text-slate-500">
        {label}
      </p>
    </motion.div>
  );
};

const SkeletonBlock = ({ className }: { className: string }) => (
  <div className={`animate-pulse rounded-2xl bg-dark/10 ${className}`} />
);

export default function WeatherApp() {
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [searchInput, setSearchInput] = useState("");
  const [city, setCity] = useState<LocationInfo | null>(null);
  const [location, setLocation] = useState<{ lat: number | null; long: number | null }>(
    { lat: null, long: null }
  );
  const [temperature, setTemperature] = useState<CurrentWeather | null>(null);
  const [isCelsius, setIsCelsius] = useState(true);
  const [citySuggestions, setCitySuggestions] = useState<CitySuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [clockTick, setClockTick] = useState(0);
  const timeRef = useRef<{ localMs: number; fetchedMs: number } | null>(null);

  const currentLocation = () => {
    if (!navigator.geolocation) {
      getLatLong("New York");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { coords } = position;
        setLocation({ lat: coords.latitude, long: coords.longitude });
      },
      () => {
        getLatLong("New York");
      }
    );
  };

  useEffect(() => {
    currentLocation();
  }, []);

  const handleCityChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);
    if (value.trim().length > 2) {
      try {
        const apiUrl = CREATE_API_URL("search.json", value);
        const apiRes = await fetch(apiUrl);
        const response = (await apiRes.json()) as CitySuggestion[];
        setCitySuggestions(response);
        setShowSuggestions(true);
      } catch (error) {
        console.log("Error fetching suggestions:", error);
      }
    } else {
      setCitySuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleCitySelect = (selectedCity: CitySuggestion) => {
    setSearchInput(selectedCity.name);
    setLocation({ lat: selectedCity.lat, long: selectedCity.lon });
    setShowSuggestions(false);
  };

  const handleSearch = () => {
    if (searchInput.trim() === "") return;
    getLatLong(searchInput);
    setShowSuggestions(false);
  };

  const forecastWeather = useCallback(async () => {
    if (location.lat == null || location.long == null) return;
    const apiUrl = CREATE_API_URL(
      "forecast.json",
      `${location.lat},${location.long}`
    );
    try {
      const apiRes = await fetch(apiUrl);
      const response = (await apiRes.json()) as WeatherApiForecastResponse;
      if (response) {
        setTemperature(response.current);
        setCity(response.location);
        setForecast(response.forecast);
      }
    } catch (error) {
      console.log(error, "error");
    }
  }, [location.lat, location.long]);

  useEffect(() => {
    forecastWeather();
  }, [forecastWeather]);

  useEffect(() => {
    if (!city?.localtime) return;
    const parsed = new Date(city.localtime.replace(" ", "T"));
    const localMs = parsed.getTime();
    if (!Number.isNaN(localMs)) {
      timeRef.current = { localMs, fetchedMs: Date.now() };
    }
  }, [city?.localtime]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setClockTick((tick) => tick + 1);
    }, 60000);
    return () => window.clearInterval(id);
  }, []);

  async function getLatLong(queryCity: string) {
    try {
      const apiUrl = CREATE_API_URL("search.json", queryCity);
      const apiRes = await fetch(apiUrl);
      const response = (await apiRes.json()) as CitySuggestion[];
      if (response[0]?.lat != null && response[0]?.lon != null) {
        setLocation({ lat: response[0].lat, long: response[0].lon });
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const getDisplayDate = () => {
    void clockTick;
    if (timeRef.current) {
      const { localMs, fetchedMs } = timeRef.current;
      return new Date(localMs + (Date.now() - fetchedMs));
    }
    if (city?.localtime) {
      const parsed = new Date(city.localtime.replace(" ", "T"));
      return Number.isNaN(parsed.getTime()) ? null : parsed;
    }
    return null;
  };

  const displayDate = getDisplayDate();
  const timeLabel = displayDate
    ? new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
    }).format(displayDate)
    : "--:--";
  const dateLabel = displayDate
    ? new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "2-digit",
      year: "numeric",
    }).format(displayDate)
    : "-- --- --";

  const forecastDay = forecast?.forecastday?.[0];
  const hasData = Boolean(temperature && city && forecastDay);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-100">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-32 top-[-120px] h-[420px] w-[420px] rounded-full bg-sky-200/50 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 top-[10%] h-[520px] w-[520px] rounded-full bg-indigo-200/40 blur-[140px]" />

        <div className="container relative mx-auto px-6">
          <AppHeading sno={2} title="Weather Intelligence" />

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-8 flex flex-col gap-8">
              <div className="relative group">
                <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                  <FaSearch className="text-secondary group-focus-within:text-primary transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder="Search for a city..."
                  className="w-full rounded-[2.5rem] border border-white/70 bg-white/80 py-5 pl-14 pr-32 text-base font-semibold text-slate-900 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.6)] backdrop-blur-xl transition focus:outline-none focus:ring-2 focus:ring-sky-300"
                  value={searchInput}
                  onChange={handleCityChange}
                />
                <div className="absolute right-3 inset-y-3 flex gap-2">
                  <button
                    onClick={handleSearch}
                    className="rounded-2xl bg-slate-900 px-6 text-[10px] font-black uppercase tracking-[0.3em] text-white shadow-lg shadow-slate-900/30 transition hover:-translate-y-0.5 hover:bg-slate-800"
                  >
                    Search
                  </button>
                  <button
                    onClick={currentLocation}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900"
                  >
                    <FaLocationArrow size={14} />
                  </button>
                </div>

                <AnimatePresence>
                  {showSuggestions && citySuggestions.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 right-0 z-50 mt-4 overflow-hidden rounded-[2rem] border border-white/70 bg-white/90 shadow-2xl backdrop-blur-xl"
                    >
                      {citySuggestions.map((suggestion) => (
                        <button
                          key={`${suggestion.name}-${suggestion.lat}-${suggestion.lon}`}
                          className="flex w-full items-center gap-3 px-8 py-4 text-left transition-colors hover:bg-slate-900 hover:text-white"
                          onClick={() => handleCitySelect(suggestion)}
                        >
                          <FaMapMarkerAlt size={12} className="opacity-50" />
                          <div>
                            <p className="font-bold text-sm tracking-tight">
                              {suggestion.name}
                            </p>
                            <p className="text-[10px] uppercase font-black opacity-60 tracking-wider">
                              {suggestion.region}, {suggestion.country}
                            </p>
                          </div>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.div
                layout
                className="relative flex min-h-[520px] flex-col justify-between overflow-hidden rounded-[3.5rem] border border-white/70 bg-white/85 p-12 shadow-[0_40px_120px_-80px_rgba(15,23,42,0.8)] backdrop-blur"
              >
                <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />

                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/5 text-slate-900">
                        <FaMapMarkerAlt />
                      </div>
                      {hasData ? (
                        <h2 className="text-4xl font-black tracking-tight text-slate-900">
                          {city?.name}
                        </h2>
                      ) : (
                        <SkeletonBlock className="h-10 w-56" />
                      )}
                    </div>
                    <div className="flex gap-4 mt-2">
                      {hasData ? (
                        <>
                          <span className="rounded-full bg-slate-900/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-slate-700">
                            {city?.region}
                          </span>
                          <span className="rounded-full bg-slate-900/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-slate-700">
                            {city?.country}
                          </span>
                        </>
                      ) : (
                        <>
                          <SkeletonBlock className="h-6 w-24" />
                          <SkeletonBlock className="h-6 w-24" />
                        </>
                      )}
                    </div>
                  </div>

                  <div className="text-right flex flex-col items-end">
                    {hasData ? (
                      <>
                        <div className="mb-2 flex items-center gap-2 rounded-full bg-slate-900/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-700">
                          <FaClock />
                          {timeLabel}
                        </div>
                        <p className="text-xs font-bold uppercase tracking-[0.35em] text-slate-500">
                          {dateLabel}
                        </p>
                      </>
                    ) : (
                      <>
                        <SkeletonBlock className="h-6 w-28 mb-2" />
                        <SkeletonBlock className="h-4 w-24" />
                      </>
                    )}
                  </div>
                </div>

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 py-12">
                  {hasData ? (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      key={temperature?.condition?.icon}
                      className="relative"
                    >
                      <div className="rounded-[2.5rem] bg-gradient-to-br from-white to-slate-100 p-6 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.7)]">
                        <img
                          src={temperature?.condition?.icon}
                          alt="icon"
                          className="h-32 w-32 drop-shadow-2xl"
                        />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-sky-300/30 blur-[120px]" />
                    </motion.div>
                  ) : (
                    <SkeletonBlock className="h-48 w-48 rounded-full" />
                  )}

                  <div className="text-center md:text-left">
                    {hasData ? (
                      <>
                        <h1 className="mb-4 flex items-start text-8xl font-black leading-none tracking-tight text-slate-900 md:text-9xl">
                          {isCelsius ? temperature?.temp_c : temperature?.temp_f}
                          <span className="text-4xl mt-4 opacity-30">
                            °{isCelsius ? "C" : "F"}
                          </span>
                        </h1>
                        <p className="flex items-center justify-center gap-3 text-2xl font-black uppercase tracking-tight text-slate-600 md:justify-start">
                          {temperature?.condition?.text}
                          <span className="h-2 w-2 rounded-full bg-slate-900" />
                        </p>
                      </>
                    ) : (
                      <>
                        <SkeletonBlock className="h-16 w-60 mb-4" />
                        <SkeletonBlock className="h-8 w-40 mx-auto md:mx-0" />
                      </>
                    )}
                  </div>
                </div>

                <div className="relative z-10 mt-8 flex items-center justify-between rounded-[2.5rem] border border-white/70 bg-white/90 p-6 backdrop-blur">
                  <div className="flex gap-6">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase text-secondary tracking-widest mb-1">
                        Feels Like
                      </span>
                      {hasData ? (
                        <span className="text-xl font-black text-dark">
                          {isCelsius
                            ? temperature?.feelslike_c
                            : temperature?.feelslike_f}
                          °
                        </span>
                      ) : (
                        <SkeletonBlock className="h-7 w-20" />
                      )}
                    </div>
                    <div className="w-[1px] h-full bg-dark/10" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase text-secondary tracking-widest mb-1">
                        UV Index
                      </span>
                      {hasData ? (
                        <span className="text-xl font-black text-dark">
                          {temperature?.uv}
                        </span>
                      ) : (
                        <SkeletonBlock className="h-7 w-16" />
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => setIsCelsius(!isCelsius)}
                    className="rounded-2xl bg-slate-900 px-8 py-3 text-[10px] font-black uppercase tracking-[0.3em] text-white shadow-xl shadow-slate-900/30 transition hover:-translate-y-0.5"
                  >
                    Switch to °{isCelsius ? "F" : "C"}
                  </button>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-8">
              <div className="grid grid-cols-2 gap-4">
                {hasData ? (
                  <>
                    <WeatherStatCard
                      icon={FaWind}
                      value={temperature?.wind_kph}
                      unit="km/h"
                      label="Wind"
                      iconColor="text-blue-500"
                    />
                    <WeatherStatCard
                      icon={FaTint}
                      value={temperature?.humidity}
                      unit="%"
                      label="Humidity"
                      iconColor="text-sky-400"
                    />
                    <WeatherStatCard
                      icon={FaTachometerAlt}
                      value={temperature?.pressure_mb}
                      unit="mb"
                      label="Pressure"
                      iconColor="text-indigo-500"
                    />
                    <WeatherStatCard
                      icon={FaCloudRain}
                      value={forecastDay?.day?.daily_chance_of_rain}
                      unit="%"
                      label="Rain"
                      iconColor="text-purple-500"
                    />
                  </>
                ) : (
                  <>
                    <SkeletonBlock className="h-32" />
                    <SkeletonBlock className="h-32" />
                    <SkeletonBlock className="h-32" />
                    <SkeletonBlock className="h-32" />
                  </>
                )}
              </div>

              <div className="bg-white border border-dark/5 p-10 rounded-[3rem] shadow-xl flex flex-col gap-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-black uppercase tracking-[0.35em] text-slate-800">
                    Sun & Moon
                  </h3>
                  <FaSun className="text-yellow-400" />
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] font-black uppercase text-secondary tracking-widest mb-2">
                        Sunrise
                      </p>
                      {hasData ? (
                        <p className="text-2xl font-black text-dark">
                          {forecastDay?.astro?.sunrise}
                        </p>
                      ) : (
                        <SkeletonBlock className="h-7 w-24" />
                      )}
                    </div>
                    <div className="h-1 flex-grow mx-8 mb-3 border-b-2 border-dashed border-dark/10" />
                    <div className="text-right">
                      <p className="text-[10px] font-black uppercase text-secondary tracking-widest mb-2">
                        Sunset
                      </p>
                      {hasData ? (
                        <p className="text-2xl font-black text-dark">
                          {forecastDay?.astro?.sunset}
                        </p>
                      ) : (
                        <SkeletonBlock className="h-7 w-24" />
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                    <span className="text-[10px] font-black uppercase text-secondary tracking-widest">
                      Moon Phase
                    </span>
                    {hasData ? (
                      <span className="text-xs font-black text-primary uppercase">
                        {forecastDay?.astro?.moon_phase}
                      </span>
                    ) : (
                      <SkeletonBlock className="h-5 w-24" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-12 mt-8">
              <div className="flex items-center gap-6 mb-10">
                <h3 className="text-sm font-black uppercase tracking-[0.4em] text-slate-800 whitespace-nowrap">
                  Hourly Forecast
                </h3>
                <div className="h-[1px] flex-grow bg-slate-900/10" />
              </div>

              <div className="flex gap-6 overflow-x-auto pb-10 scroll-smooth no-scrollbar">
                {hasData
                  ? forecastDay?.hour
                    ?.filter((_, i) => i % 2 === 0)
                    .map((hour, index) => (
                      <motion.div
                        key={`${hour.time}-${index}`}
                        whileHover={{ y: -10 }}
                        className="group flex min-w-[170px] flex-col items-center rounded-[2.5rem] border border-white/70 bg-white/90 p-8 shadow-[0_25px_70px_-55px_rgba(15,23,42,0.6)] transition-all duration-500 hover:-translate-y-2 hover:bg-slate-900"
                      >
                        <span className="mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-white/60">
                          {getTime(hour.time)}
                        </span>
                        <div className="mb-6 rounded-2xl bg-slate-900/5 p-3 transition group-hover:bg-white/10">
                          <img
                            src={hour.condition.icon}
                            alt="weather"
                            className="h-14 w-14 drop-shadow-xl transition-transform group-hover:scale-110"
                          />
                        </div>
                        <p className="mb-2 text-3xl font-black tracking-tight text-slate-900 group-hover:text-white">
                          {isCelsius ? hour.temp_c : hour.temp_f}°
                        </p>
                        <div className="flex items-center gap-2 text-slate-400 opacity-70 transition-all group-hover:text-white group-hover:opacity-100">
                          <FaCloudRain size={10} />
                          <span className="text-[10px] font-black">
                            {hour.will_it_rain}%
                          </span>
                        </div>
                      </motion.div>
                    ))
                  : Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={`skeleton-hour-${index}`}
                      className="min-w-[160px] p-8 rounded-[2.5rem] bg-white border border-dark/5 shadow-sm"
                    >
                      <SkeletonBlock className="h-4 w-20 mb-6" />
                      <SkeletonBlock className="h-16 w-16 mb-6 rounded-full" />
                      <SkeletonBlock className="h-8 w-20 mb-3" />
                      <SkeletonBlock className="h-4 w-16" />
                    </div>
                  ))}
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  );
}

