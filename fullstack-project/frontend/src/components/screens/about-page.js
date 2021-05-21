import React from 'react';
import Zoom from 'react-reveal/Zoom';

const AboutPage = () =>{
    return(
        <section>
            <div className="container py-5">
                <Zoom left>
                    <div className="card border-primary mt-lg-3 mx-auto" style={{maxWidth: "50rem"}}>
                        <div className="card-body">
                            <h1 className="card-title text-primary text-center">JOBS IN TECH INDUSTRY</h1>
                            <hr />

                            <h4 className="text-info">Computer Programmer</h4>
                            <p className="card-text pb-3">
                                Computer programmers write, modify and debug software. They write code to create server applications, maintain, monitor, document and test software.
                            </p>
                            <h4 className="text-info">Quality Assurance Engineer</h4>
                            <p className="card-text pb-3">
                            Quality assurance engineers ensure software development projects adhere to design specifications and client requirements. They compile quality assurance 
                            reports, test products, identify defects and ensure programs are bug-free before deployment and release to users.
                            </p>
                            <h4 className="text-info">Software Engineer</h4>
                            <p className="card-text pb-3">
                            Software engineers document and test programs for client applications. They manage projects and explain business requirements and technical specifications 
                            based on company guidelines and user expectations.
                            </p>
              
                        </div>
                    </div>
                </Zoom>
            </div>
        </section>
    );
};

export default AboutPage;