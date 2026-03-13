import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form
      className="bg-orange-500 px-4 py-8 flex flex-wrap items-center justify-center gap-3 text-amber-950"
      onSubmit={handleSubmit}
    >
      <h3 className="text-lg font-bold tracking-tight">
        What do you need for your next trip?
      </h3>
      <select
        className="rounded-full bg-amber-100 px-4 py-2 text-base font-semibold text-amber-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-200"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        className="min-w-[180px] rounded-full bg-amber-100 px-4 py-2 text-base font-semibold text-amber-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-200"
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        className="rounded-full bg-emerald-400 px-5 py-2 text-sm font-bold uppercase tracking-[0.2em] text-emerald-950 transition hover:bg-emerald-300"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}
