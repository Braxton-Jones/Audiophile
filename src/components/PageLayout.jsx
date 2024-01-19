import Header from "./PageHeader";
import Footer from "./PageFooter";
import { Outlet, useLocation } from "react-router-dom";




export default function Layout() {

    const location = useLocation();
    const isRootPage = location.pathname === "/";

    return (
        <div className="site-wrapper">

            { isRootPage ? 
            (<Header
                extraClass="transparent"
            />) : <Header/>}
        
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}