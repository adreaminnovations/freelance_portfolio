import React, { useState, useEffect } from "react";
import ProjectModal from "./ProjectModal";
import "./Projects.css";

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(`${process.env.PUBLIC_URL}/projects.json`);

                if (!response.ok) {
                    throw new Error(`Failed to fetch projects. Status: ${response.status}`);
                }

                const data = await response.json();
                setProjects(data);
            } catch (err) {
                console.error("Error loading projects:", err);
                setError("Failed to load projects. Please try again later.");
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="position-relative" style={{ minHeight: "74vh" }}>

            <div className="container text-start px-4 px-md-5 bg-dark" data-bs-theme="dark">
                <h1 className="text-light">Projects</h1>

                {error && <p className="text-danger">{error}</p>}

                <div className="d-flex flex-wrap gap-2 ">
                    {projects.map((project, index) => (
                        <div key={index}
                            className="card shadow-none flex-grow-1 project-card"
                            style={{ cursor: "pointer", minWidth: "250px", maxWidth: "300px", background: "transparent", border: "1px solid white" }}
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="d-flex align-items-center justify-content-center"
                                style={{ height: "200px", background: "#222" }}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/${project.src}`}
                                    className="card-img-top"
                                    alt={project.title}
                                    loading="lazy"
                                    style={{ width: "100%", maxHeight: "100%", objectFit: "contain", padding: "10px" }}
                                />
                            </div>
                            <div className="card-body text-light text-center">
                                <h2 className="card-title h5">{project.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Component */}
            {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
        </div>
    );
}

export default Projects;
