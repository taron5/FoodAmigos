import Header from "../components/layouts/Header";


const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="mx-auto max-w-7xl p-6 lg:px-8">
        { children }
      </main>
    </div>
  )
}

export default MainLayout