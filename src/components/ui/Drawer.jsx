import { createPortal } from 'react-dom';
import {useEffect, useState} from "react";

const Drawer = ({ children, placement = "left", onClose, title }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  useEffect(() => {
    // Add overflow hidden to the HTML element when the component mounts
    document.documentElement.style.overflow = 'hidden';
    setTimeout(() => {
      setIsDrawerOpen(true)
    }, 100)

    // Clean up the effect when the component unmounts
    return () => {
      document.documentElement.style.overflow = ''; // Reset overflow property
    };
  }, []);

  const handleClose = () => {
    setIsDrawerOpen(false)
    setTimeout(() => {
      onClose(false)
    }, 100)
  }

  return createPortal(
    <>
      <div className="h-screen w-screen bg-black-300 top-0 z-40 fixed" onClick={handleClose} />
      <div className={`fixed top-0 h-screen w-full bg-white max-w-lg transition-all shadow-input p-6 z-50 ${placement}-0`}
           style={{ [placement]: "-32rem", ...(isDrawerOpen ? { [placement]: "0" } : {}) }}>
        <div className="flex justify-between">
          <h4 className="font-bold capitalize">{title}</h4>
          <div>
            <span onClick={handleClose} className="icon-cross cursor-pointer hover:text-primary" />
          </div>
        </div>
        <div className="h-full pt-4 mt-4 border-t border-primary">
          {children}
        </div>
      </div>
    </>
    , document.getElementById('portal'))
}

export default Drawer