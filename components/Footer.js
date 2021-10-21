import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Footer.module.scss"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_logo}>
                <Link href="/">
                    <div>
                        <Image 
                            src="/CatwikiWhite.svg" 
                            alt="cat logo" 
                            width={90}
                            height={31} 
                        />
                    </div>       
                </Link>   
            </div>
            <div className={styles.author_info}>
                <p>Created by <a href="https://github.com/iamxxx777">iamxxx777</a> - devChallenges.io 2021</p>
            </div>
        </footer> 
    )
}

export default Footer
