import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <ToastContainer />
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p className="text-sm">© 2023 WorkWise. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default MainLayout