import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

export const DefaultLayout = () => {
    return (
        <>
            <div className="bg-home min-h-[100vh]">
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}
