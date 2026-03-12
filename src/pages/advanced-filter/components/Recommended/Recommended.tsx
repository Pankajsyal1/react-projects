import Button from "../common/Button";

const Recommended = ({ handleClick }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <span className="w-8 h-[1px] bg-primary/20" />
        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Recommended Brands</h2>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button onClickHandler={handleClick} value="" title="All Products" />
        <Button onClickHandler={handleClick} value="Nike" title="Nike" />
        <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
        <Button onClickHandler={handleClick} value="Puma" title="Puma" />
        <Button onClickHandler={handleClick} value="Vans" title="Vans" />
      </div>
    </div>
  );
};

export default Recommended;