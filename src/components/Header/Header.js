import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderMenuMobile from './components/HeaderMenuMobile/HeaderMenuMobile'
import ScrollingMenuLink from './components/ScrollingMenuLink/ScrollingMenuLink'

import styles from './Header.module.scss'

function Header() {

  const clubMenu = ["Comité", "Licences", "Partenaires", "Horaires", "Concours sociétaire"]
  const saisonMenu = ["Coupe de france", "Championnats", "Concours Hivernaux", "Concours Nationaux", "Autres concours"]

  const [showHeaderMobile, setShowHeaderMobile] = useState(false);

  return (
    <div className={styles.container}>
      <div className={`${styles.logo}`}>
        <Link className={styles.link} style={{ padding : '0px'}} to="/">
          <div>p é t a n q u e</div>
          <div> Saint Saulvienne </div>
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.headerMenu}>
          <li>
            <Link className={styles.link} to="/"><i className="fa-solid fa-house"></i></Link>
          </li>
          <li>
            <Link className={styles.link} to="/Actu">Actualité</Link>
          </li>
          <li>
            <Link className={styles.link} to="/Equipes">Equipes</Link>
          </li>
          <li>
            <ScrollingMenuLink
              title='Club'
              menu={clubMenu}
            />
          </li>
          <li>
            <ScrollingMenuLink
              title='Saison'
              menu={saisonMenu}
            />
          </li>
          <li>
            <Link className={styles.link} to="/Photos">Photothèque</Link>
          </li>
          <li>
            <Link className={styles.link} to="/Contact">Contact</Link>
          </li>
        </ul>
        <i onClick={()=> setShowHeaderMobile(!showHeaderMobile)} className= {showHeaderMobile ? `fa-solid fa-xmark ${styles.headerMenuMobile}` : `fa-solid fa-bars ${styles.headerMenuMobile}`}></i>
        {showHeaderMobile &&
          <HeaderMenuMobile 
            setShowHeaderMobile={setShowHeaderMobile} 
          />
        }
      </nav>
    </div>
  )
}

export default Header