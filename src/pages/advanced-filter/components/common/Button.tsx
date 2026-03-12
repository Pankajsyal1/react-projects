const Button = ({ onClickHandler, value, title }) => {
  return (
    <button
      onClick={onClickHandler}
      value={value}
      className="px-6 py-2.5 bg-white border border-dark/5 rounded-full text-[10px] font-black uppercase tracking-widest text-dark hover:bg-dark hover:text-white hover:shadow-xl hover:shadow-dark/10 transition-all duration-300"
    >
      {title}
    </button>
  );
};

export default Button;
