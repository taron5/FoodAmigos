import cn from "utility/helpers/cn";

const CardHeader = (
  {
    className,
    children,
    img_url,
    title
  }
) => {
  return (
    <>
      <div>
        <img src={img_url} alt={title}/>
      </div>

      <h4 className={cn("text-zinc-500 items-center font-bold tracking-wide mt-4 flex justify-between", className)}>
        {children}
      </h4>
    </>
  );
};

export default CardHeader