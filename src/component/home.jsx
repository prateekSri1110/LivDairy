import CardCarousel from "./card";
import Navbar from "./navbar";
import Table from './table';
import main from '../assets/mainn.png';
import Footer from "./footer";

const Menu = () => {
    return (
        <>
            <Navbar />
            <div className="container p-5 text-center">
                <span className="liner">Mixing Love</span>
                <img src={main} width="200px" alt="milkman" />
                <span className="liner">Fixing Health</span>
            </div>
            <CardCarousel />
            <hr />
            <Table />\
            <Footer />
        </>
    );
}

export default Menu;