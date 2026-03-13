import { useEffect, useRef, useState } from "react";
import StarRating from "./components/StarRating";

type MovieSummary = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

type MovieDetailsData = {
  Title: string;
  Year: string;
  Poster: string;
  Runtime: string;
  imdbRating: string;
  Plot: string;
  Released: string;
  Actors: string;
  Director: string;
  Genre: string;
};

type WatchedMovie = {
  imdbID: string;
  title: string;
  year: string;
  poster: string;
  imdbRating: number;
  runtime: number;
  userRating: number;
  countRatingDecisions: number;
};

const average = (arr: number[]) =>
  arr.length === 0
    ? 0
    : arr.reduce((acc, cur) => acc + cur / arr.length, 0);

const KEY = "9adc4f51";

const INITIAL_QUERY = "batman";

const MoviesPopcorn = () => {
  const [query, setQuery] = useState(INITIAL_QUERY);
  const [movies, setMovies] = useState<MovieSummary[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const [watched, setWatched] = useState<WatchedMovie[]>(function () {
    const storedValue = localStorage.getItem("watched");
    return storedValue ? (JSON.parse(storedValue) as WatchedMovie[]) : [];
  });

  function handleSelectMovie(id: string) {
    setSelectedId((currentId) => (id === currentId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie: WatchedMovie) {
    setWatched((current) => [...current, movie]);
  }

  function handleDeleteWatched(id: string) {
    setWatched((current) => current.filter((movie) => movie.imdbID !== id));
  }

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(watched));
    },
    [watched]
  );

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
          setError("");
        } catch (err) {
          if (err instanceof Error && err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      handleCloseMovie();
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6">
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </div>
  );
};

export default MoviesPopcorn;

function Loader() {
  return (
    <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-slate-300 py-10">
      Loading
    </p>
  );
}

function ErrorMessage({ message }: { message: string }) {
  return (
    <p className="text-center text-sm text-red-300 py-10">
      Error: {message}
    </p>
  );
}

function NavBar({ children }: { children: React.ReactNode }) {
  return (
    <nav className="grid grid-cols-1 gap-4 rounded-xl bg-indigo-600 px-6 py-4 md:grid-cols-3 md:items-center">
      <Logo />
      {children}
    </nav>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <span className="text-2xl font-bold">Popcorn</span>
      <h1 className="text-xl font-semibold text-white">usePopcorn</h1>
    </div>
  );
}

function Search({
  query,
  setQuery,
}: {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}) {
  const inputEl = useRef<HTMLInputElement | null>(null);

  useEffect(
    function () {
      function callback(e: KeyboardEvent) {
        if (document.activeElement === inputEl.current) return;

        if (e.code === "Enter") {
          inputEl.current?.focus();
          setQuery("");
        }
      }

      document.addEventListener("keydown", callback);
      return () => document.removeEventListener("keydown", callback);
    },
    [setQuery]
  );

  return (
    <input
      className="w-full rounded-lg bg-indigo-500/70 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 md:justify-self-center md:text-base"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}

function NumResults({ movies }: { movies: MovieSummary[] }) {
  return (
    <p className="text-sm text-slate-100/90 md:justify-self-end">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-center">
      {children}
    </main>
  );
}

function Box({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative w-full max-w-[42rem] overflow-hidden rounded-xl border border-slate-700 bg-slate-800/80">
      <button
        className="absolute right-3 top-3 z-10 h-7 w-7 rounded-full bg-slate-900 text-xs font-bold text-slate-100"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "-" : "+"}
      </button>

      {isOpen && children}
    </div>
  );
}

function MovieList({
  movies,
  onSelectMovie,
}: {
  movies: MovieSummary[];
  onSelectMovie: (id: string) => void;
}) {
  return (
    <ul className="max-h-[70vh] list-none overflow-y-auto py-2">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}

function Movie({
  movie,
  onSelectMovie,
}: {
  movie: MovieSummary;
  onSelectMovie: (id: string) => void;
}) {
  return (
    <li
      className="grid cursor-pointer grid-cols-[3.5rem_1fr] items-center gap-x-4 gap-y-1 border-b border-slate-700 px-4 py-3 transition hover:bg-slate-700/60"
      onClick={() => onSelectMovie(movie.imdbID)}
    >
      <img
        className="h-[52px] w-[52px] rounded-md object-cover"
        src={movie.Poster}
        alt={`${movie.Title} poster`}
      />
      <h3 className="text-base font-semibold text-slate-100">
        {movie.Title}
      </h3>
      <div className="flex items-center gap-2 text-xs text-slate-300">
        <span>Year</span>
        <span>{movie.Year}</span>
      </div>
    </li>
  );
}

function MovieDetails({
  selectedId,
  onCloseMovie,
  onAddWatched,
  watched,
}: {
  selectedId: string;
  onCloseMovie: () => void;
  onAddWatched: (movie: WatchedMovie) => void;
  watched: WatchedMovie[];
}) {
  const [movie, setMovie] = useState<MovieDetailsData>({
    Title: "",
    Year: "",
    Poster: "",
    Runtime: "",
    imdbRating: "",
    Plot: "",
    Released: "",
    Actors: "",
    Director: "",
    Genre: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState(0);

  const countRef = useRef(0);

  useEffect(
    function () {
      if (userRating) countRef.current++;
    },
    [userRating]
  );

  const isWatched = watched.map((entry) => entry.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(
    (entry) => entry.imdbID === selectedId
  )?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  function handleAdd() {
    const runtimeNumber = Number(runtime?.split(" ")?.at(0) ?? 0);

    const newWatchedMovie: WatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: runtimeNumber,
      userRating,
      countRatingDecisions: countRef.current,
    };

    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  useEffect(
    function () {
      function callback(e: KeyboardEvent) {
        if (e.code === "Escape") {
          onCloseMovie();
        }
      }

      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [onCloseMovie]
  );

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [selectedId]
  );

  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title}`;

      return function () {
        document.title = "usePopcorn";
      };
    },
    [title]
  );

  return (
    <div className="text-sm leading-relaxed text-slate-100">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header className="relative flex flex-col gap-4 border-b border-slate-700 bg-slate-700/60 p-4 sm:flex-row">
            <button
              className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg font-bold text-slate-700"
              onClick={onCloseMovie}
            >
              &larr;
            </button>
            <img
              className="h-40 w-28 rounded-lg object-cover"
              src={poster}
              alt={`Poster of ${title} movie`}
            />
            <div className="flex flex-1 flex-col gap-2">
              <h2 className="text-xl font-semibold text-white">{title}</h2>
              <p className="text-xs text-slate-300">
                {released} • {runtime}
              </p>
              <p className="text-xs text-slate-300">{genre}</p>
              <p className="text-xs text-slate-200">
                Rating {imdbRating} IMDb
              </p>
            </div>
          </header>

          <section className="flex flex-col gap-4 p-5">
            <div className="rounded-lg bg-slate-700/60 p-4 font-semibold">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button
                      className="mt-4 w-full rounded-full bg-indigo-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-indigo-400"
                      onClick={handleAdd}
                    >
                      Add to list
                    </button>
                  )}
                </>
              ) : (
                <p className="text-sm text-slate-200">
                  You rated this movie {watchedUserRating}
                </p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}

function WatchedSummary({ watched }: { watched: WatchedMovie[] }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="rounded-xl bg-slate-700/60 p-5 shadow">
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
        Movies you watched
      </h2>
      <div className="mt-3 flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-100">
        <p>{watched.length} movies</p>
        <p>{avgImdbRating.toFixed(2)} IMDb</p>
        <p>{avgUserRating.toFixed(2)} user</p>
        <p>{Math.round(avgRuntime)} min</p>
      </div>
    </div>
  );
}

function WatchedMoviesList({
  watched,
  onDeleteWatched,
}: {
  watched: WatchedMovie[];
  onDeleteWatched: (id: string) => void;
}) {
  return (
    <ul className="max-h-[56vh] list-none overflow-y-auto py-2">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
}

function WatchedMovie({
  movie,
  onDeleteWatched,
}: {
  movie: WatchedMovie;
  onDeleteWatched: (id: string) => void;
}) {
  return (
    <li className="grid grid-cols-[3.5rem_1fr_auto] items-center gap-x-4 border-b border-slate-700 px-4 py-3">
      <img
        className="h-[52px] w-[52px] rounded-md object-cover"
        src={movie.poster}
        alt={`${movie.title} poster`}
      />
      <div className="space-y-1">
        <h3 className="text-base font-semibold text-slate-100">
          {movie.title}
        </h3>
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
          <span>{movie.imdbRating} IMDb</span>
          <span>{movie.userRating} user</span>
          <span>{movie.runtime} min</span>
        </div>
      </div>
      <button
        className="h-7 w-7 rounded-full bg-red-500/90 text-xs font-bold text-slate-100 transition hover:bg-red-400"
        onClick={() => onDeleteWatched(movie.imdbID)}
        type="button"
      >
        X
      </button>
    </li>
  );
}
