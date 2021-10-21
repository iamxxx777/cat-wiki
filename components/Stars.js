import styles from '../styles/Stars.module.scss'

const Stars = ({ stars }) => {

    const remains = 5 - stars;
    const starsArray = [...Array(stars).keys()];
    let remainsArray;
    
    if(remains > 0) {
        remainsArray = [...Array(remains).keys()];
    } else {
        remainsArray = [];
    }

    return (
        <div className={styles.stars}>
            {starsArray.map((star, i) => (<div key={i} className={styles.star}></div>))}
            {remainsArray.length > 0 && remainsArray.map((star, i) => (<div key={i}></div>))}
        </div>
    )
}

export default Stars;
