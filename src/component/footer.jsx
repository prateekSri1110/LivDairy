import liv from '../assets/liv.png'

export default function Footer() {
    return (
        <div className="container-fluid p-0 bg-dark-subtle">
            <footer className="text-center text-lg-start">
                <div className="container-fluid p-4">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <div className="shadow-1-strong d-flex align-items-center justify-content-center mb-2 mx-auto">
                                <img src={liv} height="50" alt="Profile Logo" />
                            </div>

                            <p className="text-center fw-bold">Liv Dairy Private Limited</p>

                            <ul className="list-unstyled d-flex flex-row justify-content-center">
                                <li>
                                    <a className="text-white px-2 fs-4" href="#">
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Google Map Section */}
                        <div className="col-lg-6">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28467.815486668507!2d80.97427434189254!3d26.888354806317746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd549ce377af%3A0xb88f53ecb02c52d8!2sIndira%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1742829773032!5m2!1sen!2sin"
                                width="100%" height="210" allowFullScreen referrerPolicy='no-referrer-when-downgrade'>
                            </iframe>
                        </div>
                        {/* Contact Section */}
                        <div className="col-lg-3">
                            <h4 className="text-uppercase fw-bold mb-4">Contact</h4>

                            <ul className="list-unstyled">
                                <li>
                                    <p>Indira Nagar, Lucknow, Uttar Pradesh</p>
                                </li>
                                <li>
                                    <p>+91-**********</p>
                                </li>
                                <li>
                                    <p>
                                        <a href="mailto:xyz@livdairy.in">xyz@livdairy.in</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Copyright Section */}
                <div className="text-center p-1 bgcolor2">
                    <span>LIV DAIRY PVT LTD © 2025 / All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    );
}
