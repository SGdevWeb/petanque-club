import { Link } from 'react-router-dom';
import styles from './HeaderMenuMobile.module.scss';
import ScrollingMenuLinkMobile from './ScrollingMenuLinkMobile/ScrollingMenuLinkMobile';

function HeaderMenuMobile({setShowHeaderMobile}) {

    const clubMenu = ["Comité", "Licences", "Partenaires", "Horaires", "Concours sociétaire"]
    const saisonMenu = ["Coupe de france", "Championnats", "Concours Hivernaux", "Concours Nationaux", "Autres concours"]

    return setShowHeaderMobile && (
        <div className={styles.menuContainer}>
            <ul className={styles.menuMobile}>
                <li onClick={() => setShowHeaderMobile(false)}>
                    <Link  className={styles.link} to="/"><i className="fa-solid fa-house"></i></Link>
                </li>
                <li onClick={() => setShowHeaderMobile(false)}>
                    <Link  className={styles.link} to="/Actu">Actualité</Link>
                </li>
                <li onClick={() => setShowHeaderMobile(false)}>
                    <Link  className={styles.link} to="/Equipes">Equipes</Link>
                </li>
                <li>
                    <ScrollingMenuLinkMobile
                        title='Club'
                        menu={clubMenu}
                        setShowHeaderMobile={setShowHeaderMobile}
                    />
                </li>
                <li>
                    <ScrollingMenuLinkMobile
                        title='Saison'
                        menu={saisonMenu}
                        setShowHeaderMobile={setShowHeaderMobile}
                    />
                </li>
                <li onClick={() => setShowHeaderMobile(false)}>
                    <Link className={styles.link} to="/Photos">Photothèque</Link>
                </li>
                <li onClick={() => setShowHeaderMobile(false)}>
                    <Link  className={styles.link} to="/Contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default HeaderMenuMobile;