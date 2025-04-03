import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cow from "../assets/cow.png";
import buffalo from "../assets/buffalo.png";
import curd from '../assets/curd.png';
import paneer from '../assets/paneer.png';
import cheese from "../assets/cheese.png";
import goat from '../assets/goat.png';
import lassi from '../assets/lassi.png';

const CardCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 600, settings: { slidesToShow: 1 } }
        ]
    };

    const cards = [
        { title: "Buffalo Milk", Image: cow, description: "Price : 60/L" },
        { title: "Cow Milk", Image: buffalo, description: "Price : 55/L" },
        { title: "Goat Milk", Image: goat, description: "Price : 70/L" },
        { title: "Buffalo Milk Curd", Image: curd, description: "Price : 120/Kg" },
        { title: "Paneer", Image: paneer, description: "Price : 340/Kg" },
        { title: "Cheese", Image: cheese, description: "Price : 120/6 cubes" },
        { title: "Lassi", Image: lassi, description: "Price : 40/200ml" }
    ];

    return (
        <>
            <div className="container carousel-container">
                <h4 className="mb-2">Product & Price</h4>
                <Slider {...settings}>
                    {cards.map((card, index) => (
                        <div key={index} className="card p-3 border rounded shadow-sm">
                            <h4 className="text-center">{card.title}</h4>
                            <div className="d-flex justify-content-center">
                                <img
                                    src={card.Image}
                                    alt={card.title}
                                    className="img-fluid rounded"
                                    style={{ width: "150px", height: "180px", objectFit: "cover" }}
                                />
                            </div>
                            <h5 className="text-center mt-2">{card.description}</h5>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default CardCarousel;
