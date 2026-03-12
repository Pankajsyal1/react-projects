const Products = ({ result }) => {
  return (
    <div className="w-full">
      {result.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {result}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 bg-dark/5 rounded-[3rem] border border-dashed border-dark/10">
          <span className="text-4xl mb-4">👟</span>
          <h3 className="text-lg font-black text-dark uppercase tracking-widest">No Matches Found</h3>
          <p className="text-secondary text-sm font-bold mt-2">Try adjusting your filters to find your perfect pair.</p>
        </div>
      )}
    </div>
  );
};

export default Products;
