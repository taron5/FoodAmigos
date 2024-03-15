import { createPortal } from 'react-dom';
import {useEffect, useState} from "react";

const Modal = ({ children, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    // Add overflow hidden to the HTML element when the component mounts
    document.documentElement.style.overflow = 'hidden';
    setTimeout(() => {
      setIsModalOpen(true)
    }, 100)

    // Clean up the effect when the component unmounts
    return () => {
      document.documentElement.style.overflow = ''; // Reset overflow property
    };
  }, []);

  const handleClose = () => {
    setIsModalOpen(false)
    setTimeout(() => {
      onClose(false)
    }, 100)
  }

  return createPortal(
    <>
      <div className="h-screen w-screen bg-black-300 top-0 z-40 fixed" onClick={handleClose} />
      <div className={`fixed inset-x-1/2 w-full bg-white max-w-lg transition-all shadow-input p-6 z-50`}
           style={{ transform: "translate(-50%, -50%)", top: "120%", ...(isModalOpen ? { top: "50%" } : {}) }}>
        <div className="h-full">
          {children}
        </div>
      </div>
    </>
    , document.getElementById('portal'))
}

export default Modal