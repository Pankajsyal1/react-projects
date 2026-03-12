import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

const Sidebar = ({ handleChange }) => {
  return (
    <div className="space-y-12 pr-6 border-r border-dark/5">
      <div className="space-y-8">
        <Category handleChange={handleChange} />
        <div className="h-[1px] bg-dark/5" />
        <Price handleChange={handleChange} />
        <div className="h-[1px] bg-dark/5" />
        <Colors handleChange={handleChange} />
      </div>
    </div>
  );
};

export default Sidebar;