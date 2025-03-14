import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div 
            className="container-fluid d-flex align-items-center justify-content-center p-5" 
            style={{ minHeight: "71vh", overflow: "hidden" }}
        >
            <div className="row w-100 d-flex align-items-center justify-content-center">
                
                {/* Text Section */}
                <div className="col-lg-6 col-12 text-center text-lg-start px-5">
                    <h1 className="fw-bold">Transforming Ideas into Powerful Digital Solutions</h1>
                    <h6 className="mt-3">Freelance experts in Python, React, Django, Odoo, and more—building seamless experiences for your success.</h6>
                </div>

                {/* Description + Button */}
                <div className="col-lg-6 col-12 text-center text-lg-start px-5 mt-4 mt-lg-0">
                    <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                        "At <strong>ADream Innovations</strong>, we bring ideas to life with cutting-edge web development, Odoo customizations, and API solutions.
                        As skilled freelancers, we craft seamless, high-performing digital experiences tailored to your needs.
                        Whether it’s a dynamic website, automation, or custom integrations, we deliver innovation that drives success."
                    </p>
                    <Link className="btn btn-outline-dark mt-3 px-4 py-2 fw-bold" to="/about">Know More</Link>
                </div>

            </div>
        </div>
    );
}

export default Home;
