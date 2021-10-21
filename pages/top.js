import axios from 'axios';
import Breed from '../components/Breed'
import Meta from '../components/Meta';
import styles from "../styles/Top.module.scss";

const Top = ({ breeds }) => {
    return (
        <section className={styles.viewed}>
            <Meta title="Top 10 most searched cats | Catwiki" />
            <h1>Top 10 most searched breeds</h1>
            {breeds.map((breed, i) => (<Breed breed={breed} key={i} index={i} />))}
        </section>
    )
}


export const getStaticProps = async () => {

    const { data } = await axios.get(
        `https://api.thecatapi.com/v1/breeds/`,
        {
            headers: {
            'x-api-key': `${process.env.API_KEY}` 
        }
    });
  
    var randomList = [];
  
    function getRandom(cats) {
      while (randomList.length < 10) {
        let newCat = cats[Math.floor(Math.random() * data.length - 1)];
        if(!randomList.includes(newCat)) {
          randomList.push(newCat);
        }
      }
    }
  
    getRandom(data);
  
    return {
      props: {
        breeds: randomList,
      }
    }
}

export default Top
