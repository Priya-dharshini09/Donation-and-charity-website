import React from 'react';
import Donation from './Donation';
import Services from './Services';
import Contact from './Contact';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <section id= "home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 fw-bolder mb-4 text-center text-white">Charity and Donation Website for Children</h1>
                            <p className="lead text-center fs-4 mb-5 text-white">Non Profit Agency for Children and People in need.
                            </p>
                            <div className="buttons d-flex
                            justify-content-center">
                                <NavLink to="/About" className="btn btn-light
                                rounded-pill px-4 py-2">Donate</NavLink>
                                <NavLink to ="service"className="btn btn-outline-light
                                rounded-pill px-4 py-2">Services</NavLink>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <Donation/>
            <Services/>
            <Contact/>
        </div>
    )
}
export default Home;