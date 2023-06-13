import Link from "next/link";
import styles from "../styles/Navbar.module.css"
const Navbar = () => {
    return (
        <>
            <div className={ styles.container }>
                <h1>
                    <Link href="/">Diablo 4 Build Planner</Link>
                </h1>
                <ul className={ styles.ulContainer }>
                    <li>
                        <Link href="/ItemPage">Items</Link>
                    </li>
                </ul>
                
            </div>
        </>
    );
}

export default Navbar