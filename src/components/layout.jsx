import { Outlet } from "react-router-dom";
import Nav from "./nav";
import Footer from "./footer";
import FloatingWidgets from "./floatingwidgets";

export default function Layout() {
    return (
        <>
            <Nav />
            <main>
                <Outlet />
            </main>
            <Footer />
            <FloatingWidgets />
        </>
    );
}
