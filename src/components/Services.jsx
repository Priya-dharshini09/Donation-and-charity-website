import React from "react";
import { NavLink } from "react-router-dom";
const Services = () => {
    return(
        <div>
            <section id= "services">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Services</h3>
                            <h1 className="display-6 text-center mb-4">Our Services</h1>
                            <hr className="w-25 mx-auto"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                        <div class="card p-3">
                            <div class="card-body text-center">
                                <i className="fa fa-book fa-4x mb-4 text-primary"></i>
                                <h5 class="card-title mb-3 fs-4 fw-bold ">Education For Children</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink to="/About" class="btn btn-primary">Donate</NavLink>
                                </div>
                           </div>
                        </div>
                        <div className="col-md-4">
                        <div class="card p-3">
                            <div class="card-body text-center">
                                <i className="fa fa-users fa-4x mb-4 text-primary"></i>
                                <h5 class="card-title mb-3 fs-4 fw-bold ">Health Care and Medicine</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink to="/About" class="btn btn-primary">Donate</NavLink>
                                </div>
                           </div>
                        </div>
                        <div className="col-md-4">
                        <div class="card p-3">
                            <div class="card-body text-center">
                                <i className="fa fa-home fa-4x mb-4 text-primary"></i>
                                <h5 class="card-title mb-3 fs-4 fw-bold ">Pure Food and Water</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink to="/About" class="btn btn-primary">Donate</NavLink>
                                </div>
                           </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    );
}

export default Services;