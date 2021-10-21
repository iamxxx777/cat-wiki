import axios from "axios";
import Stars from "../../components/Stars";
import Images from "../../components/Images";
import Meta from "../../components/Meta";

import breedStyles from "../../styles/Breeds.module.scss";

const breed = ({ breed, other }) => {

    const breedInfo = breed.breeds[0];
   
    return (
        <section className={breedStyles.result}>
            <Meta title={`${breedInfo.name} | Catwiki`} description={breedInfo.description.substring(0, 150)} />
            <div className={breedStyles.search_info}>
                <div className={breedStyles.search_img}>
                    <div className={breedStyles.search_img_container}>
                        <img src={breed.url} alt={`A cat of breed ${breedInfo.name}`} />
                    </div>
                </div>
                <div className={breedStyles.search_details}>
                    <div className={breedStyles.details_container}>
                        <h1>{breedInfo.name}</h1>
                        <p>{breedInfo.description}</p>

                        <ul className={breedStyles.zodiac}>
                            <li>
                                <p><b>Temperament:</b> {breedInfo.temperament}</p>
                            </li>
                            <li>
                                <p><b>Origin:</b> {breedInfo.origin}</p>
                            </li>
                            <li>
                                <p><b>Lifespan:</b> {breedInfo.life_span}</p>
                            </li>
                        </ul>

                        <ul className={breedStyles.traits}>
                            <li>
                                <p><b>Adaptability</b></p>
                                <Stars stars={breedInfo.adaptability} />
                            </li>

                            <li>
                                <p><b>Affection level:</b></p>
                                <Stars stars={breedInfo.affection_level} />
                            </li>
                            <li>
                                <p><b>Child Friendly:</b></p>
                                <Stars stars={breedInfo.child_friendly} />
                            </li>
                            <li>
                                <p><b>Grooming:</b></p>
                                <Stars stars={breedInfo.grooming} />
                            </li>
                            <li>
                                <p><b>Intellegence:</b></p>
                                <Stars stars={breedInfo.intellegence} />
                            </li>
                            <li>
                                <p><b>Health issues:</b></p>
                                <Stars stars={breedInfo.health_issues} />
                            </li>
                            <li>
                                <p><b>Social needs:</b></p>
                                <Stars stars={breedInfo.social_needs} />
                            </li>
                            <li>
                                <p><b>Stranger Friendly:</b></p>
                                <Stars stars={breedInfo.stranger_friendly} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Images others={other} />
        </section>
    )
}

export default breed;


export const getStaticPaths = async () => {
    const { data } = await axios.get(
        `https://api.thecatapi.com/v1/breeds/`,
        {
          headers: {
          'x-api-key': `${process.env.API_KEY}` 
        }
    });

    const ids = data.map((breed) => breed.id);

    const paths = ids.map((id) => ({ params: {id: id.toString()} }));

    return {
        paths,
        fallback: false,
    }    
}

export const getStaticProps = async ({ params }) => {
    const { data } = await axios.get(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${params.id}`,
        {
            headers: {
            'x-api-key': `${process.env.API_KEY}` 
            }
        }
    );

    const res = await axios.get(
        "https://api.thecatapi.com/v1/images/search?mime_types=png&limit=8",
        {
            headers: {
            'x-api-key': `${process.env.API_KEY}` 
            }
        }
    );


    return {
        props: {
            breed: data[0],
            other: res.data,
        }
    }    
}