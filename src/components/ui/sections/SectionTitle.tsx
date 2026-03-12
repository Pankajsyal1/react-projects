const SectionTitle = ({ title }) => {
  if (!title) return null;
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-black text-dark tracking-tighter flex items-center gap-4">
        {title}
        <div className="h-[2px] flex-grow bg-dark/5 rounded-full" />
      </h2>
    </div>
  )
}

export default SectionTitle;