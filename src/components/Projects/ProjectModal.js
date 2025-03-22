import React, { useEffect } from "react";
import "./ProjectModal.css";

function ProjectModal({ project, onClose }) {
    
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    return (
        <>
            {/* Modal */}
            <div className="modal fade show d-block" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content custom-modal">
                        
                        {/* Header */}
                        <div className="modal-header">
                            <h3 className="modal-title">{project.title}</h3>
                            <button 
                                type="button" 
                                className="btn-close btn-close-white" 
                                onClick={onClose} 
                                aria-label="Close">
                            </button>
                        </div>

                        {/* Body */}
                        <div className="modal-body">
                            <div className="text-center">
                                <img 
                                    src={`${process.env.PUBLIC_URL}/${project.src}`} 
                                    alt={project.title} 
                                    className="project-image"
                                />
                                <p className="project-description">{project.description}</p>
                            </div>

                            {/* Project List */}
                            <h5 className="project-heading">Projects</h5>
                            <div className="row">
                                {project.projects && project.projects.map((proj, index) => (
                                    <div key={index} className="col-md-6 col-lg-4">
                                        <div className="project-card">
                                            <h6>{proj.name}</h6>
                                            <p>{proj.details}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="modal-footer">
                            <button type="button" className="close-btn" onClick={onClose}>
                                Close
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Overlay */}
            <div className="modal-backdrop fade show" onClick={onClose}></div>
        </>
    );
}

export default ProjectModal;
