import { useEffect, useState, useCallback } from "react";
import { FaSearch, FaMapMarkerAlt, FaWind, FaTint, FaTemperatureHigh, FaSmog, FaSun, FaLocationArrow, FaCalendarAlt, FaRegSun, FaFire, FaSnowflake, FaCloudRain, FaMoon, FaTachometerAlt, FaGlobe, FaMapMarker, FaClock, FaGlobeAmericas } from "react-icons/fa";
import AppHeading from "../../components/common/AppHeading";

const getTime = (timeString) => {
    const date = new Date(timeString);
    let hours = date.getHours();
    let minutes = date.getMinutes();

    // Convert to 12-hour format
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 0 to 12 for 12 AM

    // Ensure two-digit minutes i.e. 01, 02
    minutes = minutes.toString().padStart(2, "0");

    return `${hours}:${minutes} ${ampm}`;
}

// weather key
const weatherapi = "4bd596c3770c4589a3983928252903";
const WEATHER_API_BASE_URL = 'https://api.weatherapi.com/v1';
const CREATE_API_URL = (endPoint, query) => `${WEATHER_API_BASE_URL}/${endPoint}?key=${weatherapi}&q=${query}`;


export const WeatherStatCard = ({ icon: Icon, value, unit = "", label, iconColor }) => {
    return (
        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md">
            <Icon size={32} className={iconColor} />
            <p className="text-xl font-semibold text-black">{value}{unit}</p>
            <p className="text-gray-500 text-sm">{label}</p>
        </div>
    );
};

export default function WeatherApp() {
    const [forecast, setForecast] = useState(null);
    const [searchInput, setSearchInput] = useState("");
    const [city, setCity] = useState('');
    const [location, setLocation] = useState({
        lat: '',
        long: ''
    });
    const [temperature, setTemperature] = useState(25);
    const [isCelsius, setIsCelsius] = useState(true);
    const [citySuggestions, setCitySuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);


    const currentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { coords } = position;
            setLocation({
                lat: coords.latitude,
                long: coords.longitude
            })

        });
    }

    useEffect(() => {
        currentLocation();
    }, [])



    const handleCityChange = async (e) => {
        setSearchInput(e.target.value);
        if (e.target.value.trim().length > 2) { // Only search if input has 3+ characters
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
        setLocation({
            lat: city.lat,
            long: city.lon
        });
        setShowSuggestions(false);
    };

    const handleSearch = () => {
        if (searchInput.trim() === "") return;
        getLatLong(searchInput);
    };


    // ForecastWeather
    const forecastWeather = useCallback(async () => {
        const apiUrl = CREATE_API_URL('forecast.json', location.lat + ',' + location.long);

        try {
            const apiRes = await fetch(apiUrl);
            const response = await apiRes.json();
            if (response) {
                setTemperature(response?.current);
                setCity(response?.location)
                setForecast(response?.forecast)
            } else {
                console.log('unable to fetch lat lang')
            }
        } catch (error) {
            console.log(error.error, "error")
        }
    }, [location.lat, location.long]);

    useEffect(() => {
        if (location?.lat && location?.long) {
            forecastWeather();
        }
    }, [location.lat, location.long, forecastWeather]);



    const getLatLong = async (city) => {
        console.log(city, "cityyyy");
        try {
            const apiUrl = CREATE_API_URL('search.json', city);
            const apiRes = await fetch(apiUrl);
            const response = await apiRes.json();

            if (response[0]?.lat && response[0]?.lon) {
                setLocation({
                    lat: response[0]?.lat,
                    long: response[0]?.lon
                })
            } else {
                console.log('unable to fetch lat long')
            }
        } catch (error) {
            console.log("Error", error.error)
        }
    }

    return (
        <>
            <AppHeading sno={2} title="Weather App" />
            <div className="flex flex-col items-center justify-center min-h-screen p-4">
                <div className="w-full max-w-4xl p-6 rounded-2xl shadow-xl bg-white/85 backdrop:blur-md">
                    {/* Seacrh Location */}
                    <div className="flex items-center space-x-2 space-y-2 mb-4 relative flex-wrap">
                        <input
                            type="text"
                            placeholder="Enter city name"
                            className="flex-1 p-2 border rounded-lg focus:outline-none text-black"
                            value={searchInput}
                            onChange={handleCityChange}
                        />
                        {showSuggestions && citySuggestions.length > 0 && (
                            <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
                                {citySuggestions.map((city, index) => (
                                    <div
                                        key={index}
                                        className="p-2 hover:bg-gray-100 cursor-pointer text-black"
                                        onClick={() => handleCitySelect(city)}
                                    >
                                        {city.name}, {city.country} {city.region}
                                    </div>
                                ))}
                            </div>
                        )}
                        <button className="p-2 bg-blue-500 text-black rounded-lg hover:bg-blue-600" onClick={handleSearch}>
                            <FaSearch size={20} className="text-white" />
                        </button>
                        <button onClick={currentLocation} className="p-2 bg-green-500 text-black rounded-lg hover:bg-green-600">
                            <FaLocationArrow size={20} className="text-white" />
                        </button>
                    </div>
                    {/* Temperature Section && Location Detail */}
                    <div className="flex gap-4 flex-wrap">
                        {/* Temperature Section */}
                        <div
                            className={`flex flex-col flex-1 items-center p-6 rounded-2xl shadow-xl w-full max-w-md
                            ${temperature?.is_day ? "bg-gradient-to-r from-blue-200 to-blue-400 text-black" : "bg-gradient-to-r from-gray-900 to-gray-700 text-white"} 
                        backdrop-blur-md transition-all`}
                        >
                            {/* Location */}
                            <h2 className="text-3xl font-bold flex items-center justify-center mb-4">
                                <FaMapMarkerAlt className="mr-2 text-red-500" /> {city?.name || "Unknown City"}
                            </h2>

                            {/* Weather Icon */}
                            <img
                                src={temperature?.condition?.icon}
                                width={100}
                                alt={temperature?.condition?.text}
                                className="mb-3 drop-shadow-lg"
                            />

                            {/* Temperature Value */}
                            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold">
                                {isCelsius ? `${temperature?.temp_c}°C` : `${temperature?.temp_f}°F`}
                            </h1>

                            {/* Weather Condition */}
                            <p className="text-lg mt-2 flex items-center font-medium">
                                {temperature?.is_day ? (
                                    <FaSun size={28} className="text-yellow-400 mr-2" />
                                ) : (
                                    <FaMoon size={28} className="text-blue-300 mr-2" />
                                )}
                                {temperature?.condition?.text}
                            </p>

                            {/* Temperature Toggle Button */}
                            <button
                                className="mt-5 px-4 md:px-6 py-2 rounded-full shadow-lg text-sm md:text-lg font-semibold bg-gray-100 text-black hover:bg-gray-300 transition-all"
                                onClick={() => setIsCelsius(!isCelsius)}
                            >
                                Switch to {isCelsius ? "Fahrenheit" : "Celsius"}
                            </button>
                        </div>
                        {/* Location Detail */}
                        <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg max-w-full md:max-w-md">
                            <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">Location Details</h2>

                            <div className="flex flex-col gap-4 text-gray-700">
                                {/* Region */}
                                <div className="flex flex-wrap gap-1 items-center md:text-lg">
                                    <FaMapMarker size={28} className="mr-1 md:mr-3 text-red-500" />
                                    <p className="font-semibold">Region:</p>
                                    <span className="md:ml-2 text-black">{city?.region || "N/A"}</span>
                                </div>

                                {/* Country */}
                                <div className="flex flex-wrap gap-1 items-center md:text-lg">
                                    <FaGlobe size={28} className="mr-1 md:mr-3 text-green-500" />
                                    <p className="font-semibold">Country:</p>
                                    <span className="md:ml-2 text-black">{city?.country || "N/A"}</span>
                                </div>

                                {/* Local Time */}
                                <div className="flex flex-wrap gap-1 items-center md:text-lg">
                                    <FaClock size={28} className="mr-1 md:mr-3 text-blue-500" />
                                    <p className="font-semibold">Time:</p>
                                    <span className="md:ml-2 text-black">{city?.localtime || "N/A"}</span>
                                </div>

                                {/* Time Zone */}
                                <div className="flex flex-wrap gap-1 items-center md:text-lg">
                                    <FaGlobeAmericas size={28} className="mr-1 md:mr-3 text-sky-500" />
                                    <p className="font-semibold">Time Zone:</p>
                                    <span className="md:ml-2 text-black">{city?.tz_id || "N/A"}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Last Updated */}
                    <div className="flex items-center justify-center my-5 text-gray-700 text-sm font-medium">
                        <FaClock size={18} className="text-blue-500 mr-2" />
                        <p>Last Updated: {temperature?.last_updated || "N/A"}</p>
                    </div>


                    {/* Live Weather Stats */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold flex items-center mb-4 text-black">
                            <FaGlobeAmericas size={28} className="text-blue-500 mr-2" />Live Weather Stats
                        </h3>
                        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 text-center">
                            <WeatherStatCard icon={FaWind} value={temperature?.wind_kph} unit=" km/h" label="Wind Speed" iconColor="text-blue-500" />
                            <WeatherStatCard icon={FaTint} value={temperature?.humidity} unit="%" label="Humidity" iconColor="text-blue-500" />
                            <WeatherStatCard icon={FaTemperatureHigh} value={isCelsius ? temperature?.feelslike_c : temperature?.feelslike_f} unit={isCelsius ? "°C" : "°F"} label="Feels Like" iconColor="text-red-500" />
                            <WeatherStatCard icon={FaSmog} value="Good" label="Air Quality" iconColor="text-green-500" />
                            <WeatherStatCard icon={FaRegSun} value={temperature?.uv} label="UV Index" iconColor="text-orange-400" />
                            <WeatherStatCard icon={FaFire} value={isCelsius ? forecast?.forecastday[0]?.day?.maxtemp_c : forecast?.forecastday[0]?.day?.maxtemp_f} unit={isCelsius ? "°C" : "°F"} label="Max" iconColor="text-red-500" />
                            <WeatherStatCard icon={FaSnowflake} value={isCelsius ? forecast?.forecastday[0]?.day?.mintemp_c : forecast?.forecastday[0]?.day?.mintemp_f} unit={isCelsius ? "°C" : "°F"} label="Min" iconColor="text-blue-500" />
                            <WeatherStatCard icon={FaTachometerAlt} value={temperature?.pressure_mb} unit=" mb" label="Pressure" iconColor="text-blue-500" />
                            <WeatherStatCard icon={FaSun} value={forecast?.forecastday[0]?.astro?.sunrise} label="Sunrise" iconColor="text-yellow-500" />
                            <WeatherStatCard icon={FaSun} value={forecast?.forecastday[0]?.astro?.sunset} label="Sunset" iconColor="text-orange-500" />
                        </div>
                    </div>

                    {/* Daily Forecast */}
                    <div className="mt-6 text-center">
                        <h3 className="text-xl md:text-2xl font-semibold flex items-center mb-4 text-black">
                            <FaCalendarAlt className="mr-2 text-blue-500" /> Daily Forecast
                        </h3>
                        <div className="flex gap-4 overflow-x-auto pb-4 whitespace-nowrap">
                            {forecast?.forecastday[0]?.hour.map((res, index) => (
                                <div
                                    key={index}
                                    className="min-w-32 flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-200 p-4 rounded-xl shadow-md"
                                >
                                    {/* Weather Condition */}
                                    <p className="text-md font-semibold text-gray-800">{res?.condition?.text}</p>

                                    {/* Weather Icon */}
                                    <img src={res?.condition?.icon} width={48} alt={res?.condition?.text} className="my-2" />

                                    {/* Temperature */}
                                    <p className="text-lg font-bold text-gray-900">
                                        {isCelsius ? `${res?.temp_c}°C` : `${res?.temp_f}°F`}
                                    </p>

                                    {/* Time */}
                                    <p className="text-sm text-gray-600">{getTime(res?.time)}</p>

                                    {/* Rain Probability */}
                                    <div className="flex items-center gap-1 mt-2">
                                        <FaCloudRain size={22} className="text-blue-500" />
                                        <p className="text-sm font-medium text-gray-700">{res?.will_it_rain}%</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
