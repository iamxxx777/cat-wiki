import { useState } from 'react'
import Meta from '../components/Meta'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from "axios"
import styles from '../styles/Home.module.scss'

const Home = ({ images, data }) => {

  const [search, setSearch] = useState('');

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const breed = data.filter((item) => item.name === search)[0];
    const id = breed.id;

    router.push(`/breed/${id}`);
  }
    
    return (
        <div>
          <Meta />

          <section className={styles.jumbotron}  >
            <div className={styles.jumbo}>
                <div className={styles.jumbo_logo}>
                    <Image 
                      src="/CatwikiWhite.svg" 
                      alt="cat logo" 
                      width={150}
                      height={50}
                    />
                </div>
                <h3>Get to know more about your breed</h3>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        list="breeds" 
                        name="search" 
                        placeholder="Enter your breed" 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <datalist id="breeds">
                      {data.map((value) => (<option key={value.id} value={value.name} />))}
                    </datalist>
                    <button><i aria-hidden="true" className="fa fa-search"></i></button>
                </form>
            </div>
          </section>

          <section className={styles.top_searched}>
            <div className={styles.top_title}>
                <h3>Most Searched breeds</h3>
                <div className={styles.underline}></div>
            </div>
            <div className={styles.top_info}>
                <div className={styles.info_left}>
                    <h2>66+ Breeds for you to choose from</h2>
                </div>
                <div className={styles.info_right}>
                    <Link href="/top">
                      <a>See more <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>                    
                    </Link>
                </div>
            </div>

            <div className={styles.top_images}>
              {images.map((image) => (
                <Link href={`/breed/${image.id}`} key={image.id}>
                  <div className={styles.top_image}>
                    <div>
                      <Image 
                        src={image.image.url ? image.image.url : "/image 2.png"} 
                        alt={image.name} 
                        layout="fill" 
                        priority="true"
                      />
                    </div>  
                    <h4>{image.name}</h4>
                  </div>
                </Link>
                
              ))}
                
            </div>
          </section>

          <section className={styles.why}>
            <div className={styles.why_container}>
                <div className={styles.why_info}>
                    <div className={styles.underline}></div>
                    <h2>Why should you have a cat?</h2>
                    <p>
                        Having a cat around you can actually trigger the release of 
                        calming chemicals in your body which lower your stress and anxiety levels.
                    </p>
                    <a href="https://www.mentalfloss.com/article/51154/10-scientific-benefits-being-cat-owner" target="_blank" rel="noreferrer">
                      Read more <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>

                <div className={styles.why_images}>
                    <div className={styles.why_column}>
                        <div className={styles.why_img}>
                            <img src="/image 2.png" alt="snuggling cat" />
                        </div>
                        <div className={styles.why_img}>
                            <img src="/image 1.png" alt="cat image" />
                        </div>                
                    </div>
                    <div className={styles.why_column}>
                        <div className={styles.why_img}>
                            <img src="/image 3.png" alt="cat in a backpack" />
                        </div>            
                    </div>
                </div>
            </div>
          </section>
        </div>
    )
}

export default Home

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
    while (randomList.length < 4) {
      let newCat = cats[Math.floor(Math.random() * data.length - 1)];
      if(!randomList.includes(newCat)) {
        randomList.push(newCat);
      }
    }
  }

  getRandom(data);

  return {
    props: {
      images: randomList,
      data
    }
  }
}
