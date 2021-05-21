import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { Link } from "react-router-dom";

const FrontPage = () =>{
    return(
        <section>
            <div className="container py-5">
                <Zoom top>
                    <div className="card border-primary mt-lg-3 mx-auto" style={{maxWidth: "50rem"}}>
                        <div className="card-body">
                            <h1 className="card-title text-primary text-center">SOFTWARE DEVELOPMENT</h1>
                            <hr />
                            <p className="card-text">
                                Software development is the process programmers use to build computer programs. The process, also known as the Software Development 
                                Life Cycle (SDLC), includes several phases that provide a method for building products that meet technical specifications and user requirements.
                            </p>
                            <p className="card-text">
                                The SDLC provides an international standard that software companies can use to build and improve their computer programs. It offers a defined structure for development teams to follow in the design, 
                                creation and maintenance of high-quality software.
                                The aim of the IT software development process is to build effective products within a defined budget and timeline.
                            </p>
                        </div>
                        <div className="d-block mx-auto p-4">
                            <Link to="/api/technologies" className="btn btn-primary btn-lg">MORE ABOUT TECH 💛</Link>
                        </div>
                    </div>
                </Zoom>
            </div>
        </section>
    );
};

export default FrontPage;