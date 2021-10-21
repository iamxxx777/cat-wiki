import Image from 'next/image'
import styles from '../styles/Breed.module.scss'

const Breed = ({ breed, index }) => {
    return (
        <div className={styles.breed}>
            <div className={styles.breed_img}>
                <div className={styles.img}>
                    <Image src={breed.image.url} alt={breed.name} layout="fill" />
                </div>
            </div>
            <div className={styles.breed_info}>
                <h2>{index + 1}. {breed.name}</h2>
                <p>{breed.description}</p>
            </div>
        </div>
    )
}

export default Breed
