import React from 'react';
import img from "../assets/ch1.jpg";
const Donation = () => {
    return(
    <div>
        <section id="donation">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src={img} alt="Donation"
                        className="w-75 mt-5 "/>
                    </div>
                    <div className="col-md-6">
                        <h3 className="fs-5 mb-0">About us
                        </h3>
                        <h1 className="display-6 mb-2">Who <b> We</b> Are</h1>
                        <hr className="w-50"/>
                        <p className="lead mb-4">
                        Non-profit organization that is a permanent care home for at-risk homeless children who have been abandoned, trafficked or have lost their home and family to poverty, drug/alcohol abuse or illness. We are dedicated to providing these children with a loving home, an excellent education, health care and the confidence to become productive, self-supporting adults.
                        </p>
                        <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
                        <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>
                    </div>
                </div>
            </div>
        </section>

    </div>
    );
}
export default Donation;