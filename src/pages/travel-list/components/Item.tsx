export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3">
      <input
        className="h-5 w-5 accent-orange-500"
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span
        className={`text-base font-medium ${
          item.packed ? "line-through text-amber-300" : "text-amber-100"
        }`}
      >
        {item.quantity} {item.description}
      </span>
      <button
        className="ml-auto text-amber-200 transition hover:text-red-200"
        onClick={() => onDeleteItem(item.id)}
        type="button"
      >
        Remove
      </button>
    </li>
  );
}
