import React, { useState,useEffect } from 'react';
import Rotate from 'react-reveal/Rotate';
import Loading from "../Loading";
import CardTechnology from '../Card-Technology';
import { Link } from "react-router-dom";

const ResultsPage = ({name}) => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3500/api/technology/search/${name}`)
            .then(data => data.json())
            .then(({data}) => setResults(data))
            console.log(name)
    }, [name]);

     
    return results ?(
        <section>
            <div className="container">
                <Rotate right>
                <div className="row py-5">
                    <h1 className="text-center mb-5 text-primary">
                        {results.length} {results.length > 1 ? "Results" : "Result"} For {name}: 
                    </h1>
                    {results.map(technology => {
                        const {name, description,logo,_id} = technology;
                        return(
                            <div className="col-12 col-md-6 col-lg-auto mx-auto" key={_id}>
                                <Link to={`/api/technology/${_id}`} className="text-decoration-none">
                                    <CardTechnology
                                        name={name}
                                        description={description}
                                        logo={logo}
                                    />
                                </Link>
                            </div>
                        )
                    })}
                </div>
                </Rotate>
            </div>
        </section>
    ): <Loading />
};

export default ResultsPage;