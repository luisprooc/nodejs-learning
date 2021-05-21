import React,{useState,useLayoutEffect} from 'react';
//import Zoom from 'react-reveal/Zoom';

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
               <div>
                   {technologies.map(technology => {
                       const {name, description,logo} = technology;
                       return(
                            <div>
                                <img src={logo}/>
                            </div>
                       )
                   })}
               </div>
            </div>
        </section>
    ):null;
};

export default TechnologiesPage;