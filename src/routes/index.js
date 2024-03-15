import MainLayout from "layouts/MainLayout";

import Home from "pages/Home";
import Order from "pages/Order";

const routes = [
  {
    path: "/",
    element:  <MainLayout> <Home /></MainLayout>
  },
  {
    path: "/order/:id",
    element:  <MainLayout> <Order /></MainLayout>
  }
]

export default routes