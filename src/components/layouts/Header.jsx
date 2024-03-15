import {Link} from "react-router-dom";
import {useState} from "react";
import BasketDrawer from "../BasketDrawer";
import Modal from "../ui/Modal";
import SigninForm from "../pages/Signin";

const Header = () => {
  const [isBasketOpen, setIsBasketOpen] = useState(false)
  const [isSingInOpen, setIsSingInOpen] = useState(false)

  return (
    <header className="bg-white sticky top-0 bg-white z-30">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="icon-food-amigos text-4xl">
              <span className="path1"/>
              <span className="path2"/>
              <span className="path3"/>
            </span>
          </Link>
        </div>
        <div className="flex gap-x-12">
          <Link link="/" className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary">Products</Link>
          <span className="text-sm font-semibold cursor-pointer leading-6 text-gray-900 hover:text-primary" onClick={() => setIsBasketOpen(true)}>Basket</span>
        </div>
        <div className="flex lg:flex-1 lg:justify-end gap-4">
          <span className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary cursor-pointer" onClick={() => setIsSingInOpen(true)}>Sign in<span
            aria-hidden="true">&rarr;</span></span>
        </div>
      </nav>
      { isSingInOpen ? <Modal onClose={setIsSingInOpen}><SigninForm onClose={setIsSingInOpen} /></Modal> : null}
      { isBasketOpen ? <BasketDrawer setIsBasketOpen={setIsBasketOpen} /> : null}
    </header>
  )
}

export default Header