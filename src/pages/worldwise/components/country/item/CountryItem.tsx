function CountryItem({ country }: { country: { emoji: string; country: string } }) {
  return (
    <li className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white">
      <span className="text-lg">{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
