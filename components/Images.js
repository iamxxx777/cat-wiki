import Image from "next/image"
import styles from "../styles/Images.module.scss"

const Images = ({ others }) => {
    return (
        <div className={styles.other_images}>
            <h2>Other Photos</h2>
            <div className={styles.others}>
                {others.map((other) => (
                    <div key={other.id}>
                        <Image 
                            src={other.url} 
                            alt="cat image" 
                            layout="fill" 
                            priority="true"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Images
