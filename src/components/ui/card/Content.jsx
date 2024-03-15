import cn from "utility/helpers/cn";

const CardContent = (
  {
    className,
    children,
  }
) => {
  return (
    <div
      className={cn(
        "rounded-2xl shadow-input bg-white h-full w-full p-4 overflow-hidden group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default CardContent