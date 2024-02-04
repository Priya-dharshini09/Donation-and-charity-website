import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
    return (
        <div>
            <div className="container my-5 py-5 shadow">
                <div className="row">
                    <div className="col-12">

                        <h1 className="display-6 text-center mb-4">Donation</h1>
                        <hr className="w-25 mx-auto" />
                    </div>
                </div>
                
                    <div className="col-md-10">
                        <form class="row g-3 needs-validation" novalidate>
                            <div class="col-md-3">
                                <label for="validationCustom01" class="form-label">First name</label>
                                <input type="text" class="form-control" id="validationCustom01" required />
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label for="validationCustom02" class="form-label">Last name</label>
                                <input type="text" class="form-control" id="validationCustom02" required />
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                            </div>

                            <div class="col-md-3">
                                <label for="validationCustom03" class="form-label">City</label>
                                <input type="text" class="form-control" id="validationCustom03" required />
                                <div class="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label for="validationCustom04" class="form-label">State</label>
                                <select class="form-select" id="validationCustom04" required>
                                    <option selected disabled value="">Choose...</option>
                                    <option>Tamil Nadu</option><option>Kerala</option><option>Karnataka</option><option>Andra Pradesh</option>
                                    <option>Telungana</option><option>Gujarat</option><option>Maharashtra</option><option>Uttar Pradesh</option>
                                    <option>New Delhi</option><option>Rajastan</option><option>Punjab</option><option>Uttarkand</option>
                                    <option>Madhya Pradesh</option><option>Assam</option><option>West Bengal</option><option>Odisha</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please select a valid state.
                                </div>
                            </div>

                            
                            <div class="col-md-3">
                                <label for="inputZip" class="form-label">Zip</label>
                                <input type="text" class="form-control" id="inputZip"/>
                            </div>
                            
                            <div class="col-md-3">
                                <label for="inputCard" class="form-label">Card Number</label>
                                <input type="text" class="form-control" id="inputCard"/>
                            </div>
                            <div class="col-md-3">
                                <label for="inputEx" class="form-label">Expiration</label>
                                <input type="text" class="form-control" id="inputEx"/>
                            </div>
                            <div class="col-md-3">
                                <label for="inputCvv" class="form-label">Cvv</label>
                                <input type="text" class="form-control" id="inputCvv"/>
                            </div>
                            <div class="center">
                                <label for="validationamount" class="form-label">Amount</label>
                                <span class="input-group-text">Rs.</span>
                                <input type="number" class="form-control" aria-label="amount" />

                            </div>

                            <div class="col-12 text-center">
                                <NavLink to="/successfull" class="btn btn-primary rounded-pill px-4 py-2" type="submit">Donate</NavLink>
                            </div>
                        </form>
                    </div>


                </div>

            </div>
        
    )
}
export default About;