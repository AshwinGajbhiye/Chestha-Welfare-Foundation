import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import About from "../components/About";

function Home(){
    return <div>
        <Hero />
        <Cards />
        <About />
        <Testimonial />
        <Footer />
    </div>
}

export default Home;