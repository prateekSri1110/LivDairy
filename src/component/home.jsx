import CardCarousel from "./card";
import Navbar from "./navbar";
import main from '../assets/mainn.png'

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
        </>
    );
}

export default Menu;