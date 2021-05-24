import React,{useEffect,useState} from 'react';
import Loading from '../Loading';
import Zoom from 'react-reveal/Zoom';

const SingleTechnology = ({id}) => {
    const [technology, setTechnology] = useState('');
    useEffect(() => {
        fetch(`http://localhost:3500/api/technology/${id}`)
            .then(data => data.json() )
            .then(({data}) => setTechnology(data))
            .catch(console.log)
    }, [id]);

    return technology ?(
        <section>
            <Zoom bottom>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img src={technology.logo} alt={technology.name} className="mx-auto d-block mb-4" style={{
                                maxWidth: '80%',
                                maxHeight: '25rem'
                            }}/>
                        </div>
                        <div className="col-12 col-md-6">
                            <h1>{technology.name}</h1>
                            <p>{technology.description}</p>
                            <hr />
                            <h3>TAGS: </h3>
                            <ul>
                                {technology.tags.map(item => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Zoom>
        </section>
    ): <Loading /> 
};

export default SingleTechnology;