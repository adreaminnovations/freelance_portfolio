import React from "react";

function About() {
    return (
        <div className="container my-5 p-5">

            {/* Python Section */}
            <div className="row align-items-center p-4 my-3 flex-column-reverse flex-lg-row">
                <div className="col-lg-6 col-12 text-center text-lg-start">
                    <h2 className="fw-bold">Python Development & Automation Services</h2>
                    <ul className="text-start">
                        <li>We leverage <strong>Python</strong> to build automation scripts, web applications, and data-driven solutions.</li>
                        <li>Expertise in <strong>web scraping</strong>, <strong>API automation</strong>, and scalable backend development.</li>
                    </ul>
                </div>
                <div className="col-lg-6 col-12 text-center mb-4 mb-lg-0">
                    <img src={`${process.env.PUBLIC_URL}/python_logo.png`} alt="Python Development" className="img-fluid rounded" loading="lazy" />
                </div>
            </div>

            {/* Odoo Section */}
            <div className="row align-items-center p-4 my-3 flex-column-reverse flex-lg-row-reverse">
                <div className="col-lg-6 col-12 text-center text-lg-start">
                    <h2 className="fw-bold">Odoo ERP Customization & Development</h2>
                    <ul className="text-start">
                        <li>Custom <strong>Odoo ERP solutions</strong> for businesses, including module development and API integrations.</li>
                        <li>Enhance your ERP system with <strong>advanced automation</strong> and third-party integrations.</li>
                    </ul>
                </div>
                <div className="col-lg-6 col-12 text-center mb-4 mb-lg-0">
                    <img src={`${process.env.PUBLIC_URL}/odoo_logo.png`} alt="Odoo ERP Solutions" className="img-fluid rounded" loading="lazy" />
                </div>
            </div>

            {/* Django Section */}
            <div className="row align-items-center p-4 my-3 flex-column-reverse flex-lg-row">
                <div className="col-lg-6 col-12 text-center text-lg-start">
                    <h2 className="fw-bold">Django Web Development & API Solutions</h2>
                    <ul className="text-start">
                        <li>We build <strong>secure and scalable Django applications</strong>, including REST API development.</li>
                        <li>Expertise in authentication systems, <strong>real-time web applications</strong>, and backend optimization.</li>
                    </ul>
                </div>
                <div className="col-lg-6 col-12 text-center mb-4 mb-lg-0">
                    <img src={`${process.env.PUBLIC_URL}/django_logo.png`} alt="Django Web Development" className="img-fluid rounded" loading="lazy" />
                </div>
            </div>

            {/* React Section */}
            <div className="row align-items-center p-4 my-3 flex-column-reverse flex-lg-row-reverse">
                <div className="col-lg-6 col-12 text-center text-lg-start">
                    <h2 className="fw-bold">React UI & Frontend Development</h2>
                    <ul className="text-start">
                        <li>We build dynamic, high-performance web apps with <strong>React.js</strong> and modern UI frameworks.</li>
                        <li>Expertise in <strong>progressive web applications (PWAs)</strong>, state management, and responsive designs.</li>
                    </ul>
                </div>
                <div className="col-lg-6 col-12 text-center mb-4 mb-lg-0">
                    <img src={`${process.env.PUBLIC_URL}/react_logo.png`} alt="React UI Development" className="img-fluid rounded" loading="lazy" />
                </div>
            </div>

            {/* Other Tools & Technologies */}
            <h3 className="fw-bold mb-3 text-center">Other Tools & Technologies</h3>
            <div className="d-flex flex-wrap justify-content-center gap-2">
                <span className="badge p-2 bg-primary text-white">API Development</span>
                <span className="badge p-2 bg-danger text-white">Web Scraping</span>
                <span className="badge p-2 bg-warning text-dark">Django REST Framework</span>
                <span className="badge p-2 bg-success text-white">JavaScript</span>
                <span className="badge p-2 bg-secondary text-white">HTML & CSS</span>
                <span className="badge p-2 bg-dark text-white">Bootstrap</span>
                <span className="badge p-2 bg-info text-white">Canva</span>
                <span className="badge p-2 bg-primary text-white">PostgreSQL</span>
                <span className="badge p-2 bg-secondary text-white">MySQL</span>
                <span className="badge p-2 bg-dark text-white">Git & Version Control</span>
            </div>

            {/* Call-to-Action (CTA) */}
            <div className="text-center mt-4">
                <p className="fw-bold">Looking for expert web development and automation solutions?</p>
                <a href="/contact" className="btn btn-outline-dark px-4 py-2 fw-bold">Get in Touch</a>
            </div>

        </div>
    );
}

export default About;
