function Header() {
  return (
    <header className="mb-10 flex w-full max-w-264 items-center justify-between">
      <img className="w-40 sm:w-56" src="logo512.png" alt="React logo" />
      <h1 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-5xl">
        The React Quiz
      </h1>
    </header>
  );
}

export default Header;
