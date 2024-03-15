import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";
import cn from "utility/helpers/cn";

import CardHeader from "./Header";
import CardContent from "./Content";
import CardFooter from "./CardFooter";

export const Card = (
  {
    items,
    className,
  }
) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 w-full py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.id}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-primary-300 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{opacity: 0}}
                animate={{
                  opacity: 1,
                  transition: {duration: 0.15},
                }}
                exit={{
                  opacity: 0,
                  transition: {duration: 0.15, delay: 0.2},
                }}
              />
            )}
          </AnimatePresence>
          <CardContent>
            <CardHeader {...item}>
              <span>
                {item.name}
              </span>
              <span className="text-primary font-bold text-2xl">
               € {item.price}
              </span>
            </CardHeader>
            <CardFooter item={item} />
          </CardContent>
        </div>
      ))}
    </div>
  );
};

export default Card
