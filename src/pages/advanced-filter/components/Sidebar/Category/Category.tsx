import Input from "../../common/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-dark mb-6">Category</h2>

      <div className="space-y-2">
        <label className="flex items-center gap-4 cursor-pointer group py-1.5 peer">
          <div className="relative flex items-center justify-center">
            <input
              onChange={handleChange}
              type="radio"
              value=""
              name="test"
              className="peer opacity-0 absolute w-5 h-5 cursor-pointer z-10"
            />
            <div className="w-5 h-5 rounded-full border-2 border-dark/10 group-hover:border-primary transition-all flex items-center justify-center peer-checked:border-primary peer-checked:bg-primary">
              <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity" />
            </div>
          </div>
          <span className="text-sm font-bold text-secondary group-hover:text-dark transition-colors peer-checked:text-dark">
            All
          </span>
        </label>

        <Input handleChange={handleChange} value="sneakers" title="Sneakers" name="test" color={''} />
        <Input handleChange={handleChange} value="flats" title="Flats" name="test" color={''} />
        <Input handleChange={handleChange} value="sandals" title="Sandals" name="test" color={''} />
        <Input handleChange={handleChange} value="heels" title="Heels" name="test" color={''} />
      </div>
    </div>
  );
}

export default Category;