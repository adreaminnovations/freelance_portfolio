import React from "react";

function About() {
    return (
        <div className="container my-5 p-5">

            {/* Python Section */}
            <div className="row align-items-center p-4 my-3">
                <div className="col-lg-6 col-12 text-center mb-4 mb-lg-0">
                    <img src={`${process.env.PUBLIC_URL}/python_logo.png`} alt="Python Logo" className="img-fluid rounded" />
                </div>
                <div className="col-lg-6 col-12">
                    <ul className="text-start">
                        <li>
                            <strong>Python</strong> is at the core of our development expertise. We leverage its versatility to build automation scripts,
                            web applications, and data-driven solutions. From streamlining repetitive tasks to creating scalable back-end systems,
                            Python enables us to deliver efficient and robust applications.
                        </li>
                        <li>
                            Our expertise includes developing intelligent automation scripts to reduce manual efforts, optimize workflows,
                            and improve efficiency. Whether it's web scraping, process automation, or API integration, we build smart
                            Python-based solutions that handle complex tasks with ease.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Odoo Section */}
            <div className="row align-items-center p-4 my-3">
                <div className="col-lg-6 col-12">
                    <ul className="text-start">
                        <li>
                            <strong>Odoo</strong> is a rapidly growing open-source ERP system, and we specialize in delivering custom Odoo development services.
                            From implementation to customization and integration, we help businesses streamline their operations with tailored Odoo solutions.
                        </li>
                        <li>
                            Our expertise includes developing custom Odoo modules, automating business workflows, and integrating third-party applications
                            to enhance system functionality. Whether you need ERP customization, advanced reporting, or seamless API integration, we build
                            efficient, scalable solutions to meet your unique business needs.
                        </li>
                    </ul>
                </div>
                <div className="col-lg-6 col-12 text-center">
                    <img src={`${process.env.PUBLIC_URL}/odoo_logo.png`} alt="Odoo Logo" className="img-fluid rounded" />
                </div>
            </div>

            {/* Django Section */}
            <div className="row align-items-center p-4 my-3">
                <div className="col-lg-6 col-12 text-center mb-4 mb-lg-0">
                    <img src={`${process.env.PUBLIC_URL}/django_logo.png`} alt="Django Logo" className="img-fluid rounded" />
                </div>
                <div className="col-lg-6 col-12">
                    <ul className="text-start">
                        <li>
                            <strong>Django</strong> is at the core of our web development expertise. We leverage its powerful framework to build secure, scalable,
                            and high-performance web applications. From dynamic websites to enterprise-grade platforms, Django enables us to deliver
                            robust and efficient solutions.
                        </li>
                        <li>
                            Our expertise includes developing custom Django applications, API-driven backends, and database-driven solutions to meet
                            diverse business needs. Whether it's REST API development, authentication systems, or real-time web applications, we build
                            Django-based solutions that ensure reliability, security, and scalability.
                        </li>
                    </ul>
                </div>
            </div>

            {/* React Section */}
            <div className="row align-items-center p-4 my-3">
                <div className="col-lg-6 col-12">
                    <ul className="text-start">
                        <li>
                            <strong>React</strong> is at the heart of our front-end development expertise. We leverage its component-based architecture to build dynamic,
                            high-performance, and interactive web applications. From single-page applications (SPAs) to complex user interfaces, React
                            enables us to create seamless and engaging digital experiences.
                        </li>
                        <li>
                            Our expertise includes developing custom React components, optimizing application performance, and integrating APIs for
                            real-time data handling. Whether you need a responsive web app, progressive web application (PWA), or an interactive UI,
                            we build scalable and maintainable React-based solutions tailored to your needs.
                        </li>
                    </ul>
                </div>
                <div className="col-lg-6 col-12 text-center">
                    <img src={`${process.env.PUBLIC_URL}/react_logo.png`} alt="React Logo" className="img-fluid rounded" />
                </div>
            </div>

                        
            <h4 className="fw-bold mb-3">Other Tools & Technologies</h4>
<div className="d-flex flex-wrap justify-content-center gap-3">
    <span className="badge p-2" style={{ backgroundColor: "#0d6efd", color: "white" }}>API Integration & Development</span>
    <span className="badge p-2" style={{ backgroundColor: "#dc3545", color: "white" }}>Web Scraping</span>
    <span className="badge p-2" style={{ backgroundColor: "#f97316", color: "white" }}>Django REST Framework</span>
    <span className="badge p-2" style={{ backgroundColor: "#198754", color: "white" }}>JavaScript</span>
    <span className="badge p-2" style={{ backgroundColor: "#fd7e14", color: "white" }}>HTML</span>
    <span className="badge p-2" style={{ backgroundColor: "#6c757d", color: "white" }}>CSS</span>
    <span className="badge p-2" style={{ backgroundColor: "#7952b3", color: "white" }}>Bootstrap</span>
    <span className="badge p-2" style={{ backgroundColor: "#ffcc00", color: "black" }}>Canva</span>
    <span className="badge p-2" style={{ backgroundColor: "#336791", color: "white" }}>PostgreSQL</span>
    <span className="badge p-2" style={{ backgroundColor: "#00758f", color: "white" }}>MySQL</span>
    <span className="badge p-2" style={{ backgroundColor: "#24292f", color: "white" }}>Git</span>
</div>


        </div>
    );
}

export default About;
