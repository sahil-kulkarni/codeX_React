import Features from "./pages/Features/Features";
import Home from "./pages/Home/Home";
import Service from "./pages/Services/Services";
import Testimonial from "./pages/Testimonials/Testimonials";
import Contact from "./pages/contact/contacts";

function Layout() {

    return(
        <div>
            <Home />
            <Features />
            <Service />
            <Testimonial />
            <Contact />

        </div>

    );
    
}
export default Layout;