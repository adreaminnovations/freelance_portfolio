import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-secondary text-light text-center py-4" style={{marginTop: "38px"}}>
            <div className="container">
                <p className="mb-2">
                    Have a project in mind? Let's build something amazing!  
                </p>
                <p>
                    Contact us at  
                    <Link to="mailto:adreaminnovations@gmail.com" className="text-warning ms-1">
                        adreaminnovations@gmail.com
                    </Link>
                </p>
                <div className="mt-2">
                    {/* Add social media links here */}
                    <Link to="#" className="text-light mx-2">Facebook</Link>
                    <Link to="#" className="text-light mx-2">LinkedIn</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
