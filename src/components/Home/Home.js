import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container p-5 mb-4">
            <div className="row p-5">
                <div className="text-start my-4 col-6 p-5">
                    <h1>Transforming Ideas into Powerful Digital Solutions</h1>
                    <h6>Freelance experts in Python, React, Django, Odoo, and more—building seamless experiences for your success.</h6>
                </div>
                <div className="col-6 my-5 p-5">
                    <p style={{fontSize: "12px", display: "block"}}>"At ADream Innovations, we bring ideas to life with cutting-edge web development, Odoo customizations, and API solutions. As skilled freelancers, we craft seamless, high-performing digital experiences tailored to your needs. Whether it’s a dynamic website, automation, or custom integrations, we deliver innovation that drives success. Let’s build something exceptional!"
                        Let me know if you'd like any refinements!</p>
                    <Link className="btn btn-outline-light" to="/about">Know more</Link>
                </div>
            </div>
        </div>
    )
}

export default Home;
