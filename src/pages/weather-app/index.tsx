import { useEffect, useState, useCallback } from "react";
import {
    FaSearch, FaMapMarkerAlt, FaWind, FaTint, FaTemperatureHigh,
    FaSmog, FaSun, FaLocationArrow, FaCalendarAlt, FaRegSun,
    FaFire, FaSnowflake, FaCloudRain, FaMoon, FaTachometerAlt,
    FaGlobe, FaMapMarker, FaClock, FaGlobeAmericas
} from "react-icons/fa";
import AppHeading from "../../components/common/AppHeading";
import { motion, AnimatePresence } from "framer-motion";

const getTime = (timeString) => {
    const date = new Date(timeString);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    minutes = minutes.toString().padStart(2, "0");
    return `${hours}:${minutes} ${ampm}`;
}

const weatherapi = "4bd596c3770c4589a3983928252903";
const WEATHER_API_BASE_URL = 'https://api.weatherapi.com/v1';
const CREATE_API_URL = (endPoint, query) => `${WEATHER_API_BASE_URL}/${endPoint}?key=${weatherapi}&q=${query}`;

export const WeatherStatCard = ({ icon: Icon, value, unit = "", label, iconColor }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="flex flex-col items-center bg-white/40 backdrop-blur-md p-6 rounded-[2rem] border border-white/20 shadow-sm"
        >
            <div className={`p-3 rounded-2xl bg-white/50 mb-4 ${iconColor}`}>
                <Icon size={24} />
            </div>
            <p className="text-2xl font-black text-dark tracking-tighter">{value}{unit}</p>
            <p className="text-secondary text-[10px] font-black uppercase tracking-widest mt-1">{label}</p>
        </motion.div>
    );
};

export default function WeatherApp() {
    const [forecast, setForecast] = useState(null);
    const [searchInput, setSearchInput] = useState("");
    const [city, setCity] = useState('');
    const [location, setLocation] = useState({ lat: '', long: '' });
    const [temperature, setTemperature] = useState(null);
    const [isCelsius, setIsCelsius] = useState(true);
    const [citySuggestions, setCitySuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const currentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { coords } = position;
            setLocation({ lat: coords.latitude, long: coords.longitude });
        });
    }

    useEffect(() => {
        currentLocation();
    }, []);

    const handleCityChange = async (e) => {
        setSearchInput(e.target.value);
        if (e.target.value.trim().length > 2) {
            try {
                const apiUrl = CREATE_API_URL('search.json', e.target.value);
                const apiRes = await fetch(apiUrl);
                const response = await apiRes.json();
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

    const handleCitySelect = (city) => {
        setSearchInput(city.name);
        setLocation({ lat: city.lat, long: city.lon });
        setShowSuggestions(false);
    };

    const handleSearch = () => {
        if (searchInput.trim() === "") return;
        getLatLong(searchInput);
    };

    const forecastWeather = useCallback(async () => {
        if (!location.lat || !location.long) return;
        const apiUrl = CREATE_API_URL('forecast.json', location.lat + ',' + location.long);
        try {
            const apiRes = await fetch(apiUrl);
            const response = await apiRes.json();
            if (response) {
                setTemperature(response?.current);
                setCity(response?.location);
                setForecast(response?.forecast);
            }
        } catch (error) {
            console.log(error, "error");
        }
    }, [location.lat, location.long]);

    useEffect(() => {
        forecastWeather();
    }, [forecastWeather]);

    const getLatLong = async (city) => {
        try {
            const apiUrl = CREATE_API_URL('search.json', city);
            const apiRes = await fetch(apiUrl);
            const response = await apiRes.json();
            if (response[0]?.lat && response[0]?.lon) {
                setLocation({ lat: response[0]?.lat, long: response[0]?.lon });
            }
        } catch (error) {
            console.log("Error", error);
        }
    }

    return (
        <div className="container mx-auto px-6 pt-32 pb-20">
            <AppHeading sno={2} title="Weather Intelligence" />

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* Search & Main Info */}
                <div className="lg:col-span-8 flex flex-col gap-8">

                    {/* Search Bar */}
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                            <FaSearch className="text-secondary group-focus-within:text-primary transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search for a city..."
                            className="w-full bg-white/50 backdrop-blur-xl border border-dark/5 rounded-[2rem] py-5 pl-14 pr-32 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-bold text-dark"
                            value={searchInput}
                            onChange={handleCityChange}
                        />
                        <div className="absolute right-3 inset-y-3 flex gap-2">
                            <button onClick={handleSearch} className="px-6 rounded-2xl bg-primary text-white font-black uppercase text-[10px] tracking-widest hover:bg-primary-hover transition-colors">
                                Search
                            </button>
                            <button onClick={currentLocation} className="w-12 h-12 flex items-center justify-center rounded-2xl bg-dark/5 text-dark hover:bg-dark hover:text-white transition-all">
                                <FaLocationArrow size={14} />
                            </button>
                        </div>

                        <AnimatePresence>
                            {showSuggestions && citySuggestions.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full left-0 right-0 mt-4 bg-white/80 backdrop-blur-xl border border-dark/5 rounded-[2rem] shadow-2xl z-50 overflow-hidden"
                                >
                                    {citySuggestions.map((city, index) => (
                                        <button
                                            key={index}
                                            className="w-full text-left px-8 py-4 hover:bg-primary hover:text-white transition-colors flex items-center gap-3"
                                            onClick={() => handleCitySelect(city)}
                                        >
                                            <FaMapMarkerAlt size={12} className="opacity-50" />
                                            <div>
                                                <p className="font-bold text-sm tracking-tight">{city.name}</p>
                                                <p className="text-[10px] uppercase font-black opacity-60 tracking-wider">
                                                    {city.region}, {city.country}
                                                </p>
                                            </div>
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Main Weather Card */}
                    <motion.div
                        layout
                        className="relative overflow-hidden group p-12 rounded-[3.5rem] bg-white border border-dark/5 shadow-2xl min-h-[500px] flex flex-col justify-between"
                    >
                        {/* Background Decoration */}
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

                        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-8">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <h2 className="text-4xl font-black text-dark tracking-tighter">
                                        {city?.name || "Initializing..."}
                                    </h2>
                                </div>
                                <div className="flex gap-4 mt-2">
                                    <span className="px-4 py-1.5 rounded-full bg-dark/5 text-[10px] uppercase font-black tracking-widest text-dark">
                                        {city?.region}
                                    </span>
                                    <span className="px-4 py-1.5 rounded-full bg-dark/5 text-[10px] uppercase font-black tracking-widest text-dark">
                                        {city?.country}
                                    </span>
                                </div>
                            </div>

                            <div className="text-right flex flex-col items-end">
                                <div className="flex items-center gap-2 text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-2 bg-primary/5 px-4 py-2 rounded-full">
                                    <FaClock />
                                    {city?.localtime?.split(' ')[1]}
                                </div>
                                <p className="text-secondary text-sm font-bold uppercase tracking-widest">
                                    {city?.localtime?.split(' ')[0]}
                                </p>
                            </div>
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 py-12">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                key={temperature?.condition?.icon}
                                className="relative"
                            >
                                <img src={temperature?.condition?.icon} alt="icon" className="w-48 h-48 drop-shadow-2xl" />
                                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
                            </motion.div>

                            <div className="text-center md:text-left">
                                <h1 className="text-8xl md:text-9xl font-black text-dark tracking-tighter leading-none mb-4 flex items-start">
                                    {isCelsius ? temperature?.temp_c : temperature?.temp_f}
                                    <span className="text-4xl mt-4 opacity-30">°{isCelsius ? 'C' : 'F'}</span>
                                </h1>
                                <p className="text-2xl font-black text-secondary tracking-tight uppercase flex items-center justify-center md:justify-start gap-3">
                                    {temperature?.condition?.text}
                                    <span className="w-2 h-2 rounded-full bg-primary" />
                                </p>
                            </div>
                        </div>

                        <div className="relative z-10 flex justify-between items-center bg-gray-50/80 backdrop-blur-md p-6 rounded-[2.5rem] mt-8 border border-dark/5">
                            <div className="flex gap-6">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black uppercase text-secondary tracking-widest mb-1">Feels Like</span>
                                    <span className="text-xl font-black text-dark">{isCelsius ? temperature?.feelslike_c : temperature?.feelslike_f}°</span>
                                </div>
                                <div className="w-[1px] h-full bg-dark/10" />
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black uppercase text-secondary tracking-widest mb-1">UV Index</span>
                                    <span className="text-xl font-black text-dark">{temperature?.uv}</span>
                                </div>
                            </div>

                            <button
                                onClick={() => setIsCelsius(!isCelsius)}
                                className="bg-primary px-8 py-3 rounded-2xl text-white font-black uppercase text-[10px] tracking-[0.2em] shadow-xl shadow-primary/20 hover:scale-105 transition-all"
                            >
                                Switch to °{isCelsius ? 'F' : 'C'}
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column Stats */}
                <div className="lg:col-span-4 flex flex-col gap-8">
                    <div className="grid grid-cols-2 gap-4">
                        <WeatherStatCard icon={FaWind} value={temperature?.wind_kph} unit="km/h" label="Wind" iconColor="text-blue-500" />
                        <WeatherStatCard icon={FaTint} value={temperature?.humidity} unit="%" label="Humidity" iconColor="text-sky-400" />
                        <WeatherStatCard icon={FaTachometerAlt} value={temperature?.pressure_mb} unit="mb" label="Pressure" iconColor="text-indigo-500" />
                        <WeatherStatCard icon={FaCloudRain} value={forecast?.forecastday[0]?.day?.daily_chance_of_rain} unit="%" label="Rain" iconColor="text-purple-500" />
                    </div>

                    {/* Astronomy */}
                    <div className="bg-white border border-dark/5 p-10 rounded-[3rem] shadow-xl flex flex-col gap-8">
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-dark">Sun & Moon</h3>
                            <FaSun className="text-yellow-400" />
                        </div>
                        <div className="space-y-6">
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-[10px] font-black uppercase text-secondary tracking-widest mb-2">Sunrise</p>
                                    <p className="text-2xl font-black text-dark">{forecast?.forecastday[0]?.astro?.sunrise}</p>
                                </div>
                                <div className="h-1 flex-grow mx-8 mb-3 border-b-2 border-dashed border-dark/10" />
                                <div className="text-right">
                                    <p className="text-[10px] font-black uppercase text-secondary tracking-widest mb-2">Sunset</p>
                                    <p className="text-2xl font-black text-dark">{forecast?.forecastday[0]?.astro?.sunset}</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                                <span className="text-[10px] font-black uppercase text-secondary tracking-widest">Moon Phase</span>
                                <span className="text-xs font-black text-primary uppercase">{forecast?.forecastday[0]?.astro?.moon_phase}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hourly Forecast */}
                <div className="lg:col-span-12 mt-8">
                    <div className="flex items-center gap-6 mb-10">
                        <h3 className="text-sm font-black uppercase tracking-[0.4em] text-primary whitespace-nowrap">
                            Hourly Forecast
                        </h3>
                        <div className="h-[1px] flex-grow bg-primary/10" />
                    </div>

                    <div className="flex gap-6 overflow-x-auto pb-10 scroll-smooth no-scrollbar">
                        {forecast?.forecastday[0]?.hour.filter((_, i) => i % 2 === 0).map((hour, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="min-w-[160px] p-8 rounded-[2.5rem] bg-white border border-dark/5 shadow-sm flex flex-col items-center group hover:bg-primary transition-all duration-500"
                            >
                                <span className="text-[10px] font-black uppercase tracking-widest text-secondary group-hover:text-white/60 mb-6">
                                    {getTime(hour.time)}
                                </span>
                                <img src={hour.condition.icon} alt="weather" className="w-16 h-16 drop-shadow-xl mb-6 group-hover:scale-110 transition-transform" />
                                <p className="text-3xl font-black text-dark group-hover:text-white tracking-tighter mb-2">
                                    {isCelsius ? hour.temp_c : hour.temp_f}°
                                </p>
                                <div className="flex items-center gap-2 opacity-40 group-hover:opacity-100 group-hover:text-white transition-all">
                                    <FaCloudRain size={10} />
                                    <span className="text-[10px] font-black">{hour.will_it_rain}%</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
