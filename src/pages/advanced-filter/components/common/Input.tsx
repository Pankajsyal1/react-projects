const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <label className="flex items-center gap-4 cursor-pointer group py-1.5 peer">
      <div className="relative flex items-center justify-center">
        <input
          onChange={handleChange}
          type="radio"
          value={value}
          name={name}
          className="peer opacity-0 absolute w-5 h-5 cursor-pointer z-10"
        />
        <div
          className="w-5 h-5 rounded-full border-2 border-dark/10 group-hover:border-primary transition-all flex items-center justify-center peer-checked:border-primary peer-checked:bg-primary"
          style={color && color !== "white" ? { borderColor: color, backgroundColor: "transparent" } : {}}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity" />
        </div>
      </div>
      <span className="text-sm font-bold text-secondary group-hover:text-dark transition-colors peer-checked:text-dark">
        {title}
      </span>
    </label>
  );
};

export default Input;