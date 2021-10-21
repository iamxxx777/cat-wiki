import Image from 'next/image';
import Link from "next/link";
import navStyles from "../styles/Nav.module.scss";

const Nav = () => {
    return (
        <header className={navStyles.header}>
            <div className={navStyles.logo}>
                <Link href="/">
                    <div>
                        <Image 
                            src="/CatwikiLogo.svg" 
                            alt="Website logo"
                            width={110}
                            height={35} 
                        />
                    </div>
                </Link>
            </div>
        </header>
    )
}

export default Nav
