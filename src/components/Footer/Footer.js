import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer 
            className="bg-secondary text-light text-center text-lg-start py-4 mt-4 w-100"
            style={{ position: "relative", bottom: "0", minHeight: "18vh" }}
        >
            <div className="container text-center">
                <p className="mb-2 px-3">
                    Have a project in mind? Let's build something amazing!
                </p>
                <p className="px-3">
                    Contact us at  
                    <Link to="mailto:adreaminnovations@gmail.com" className="text-warning ms-1">
                        adreaminnovations@gmail.com
                    </Link>
                </p>
                <div className="d-flex justify-content-center gap-3 mt-3">
                    <Link to="https://www.facebook.com/profile.php?id=61574504521631" className="text-light">Facebook</Link>
                    <Link to="www.linkedin.com/in/adream-innovations-11956a353" className="text-light">LinkedIn</Link>
                    <Link to="https://www.instagram.com/adreaminnovations/" className="text-light">Instagram</Link>
                    <Link to="https://medium.com/@adreaminnovations" className="text-light">Medium</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
