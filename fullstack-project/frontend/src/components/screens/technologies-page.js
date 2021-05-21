import React,{useState,useLayoutEffect} from 'react';
import CardTechnology from '../Card-Technology';
import Rotate from 'react-reveal/Rotate';
import Loading from "../Loading";
import { Link } from "react-router-dom";

const TechnologiesPage = () =>{
    const [technologies,saveTechnologies] = useState([]);

    useLayoutEffect(() => {
        fetch("http://localhost:3500/api/technologies")
            .then(res => res.json())
            .then(({data}) => saveTechnologies(data))
    }, []);

    return technologies?(
        <section>
            <div className="container py-5">
               <h1 className="text-primary text-center">TECHNOLOGIES</h1>
               <Rotate left>
                <div className="row py-5">
                    {technologies.map(technology => {
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
    ): <Loading/> ;
};

export default TechnologiesPage;