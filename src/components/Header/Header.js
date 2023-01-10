import React from 'react'
import { Link } from 'react-router-dom'
import ScrollingMenuLink from './components/ScrollingMenuLink/ScrollingMenuLink'

import styles from './Header.module.scss'

function Header() {

  const clubMenu = ["Comité", "Licences", "Partenaires", "Horaires", "Concours sociétaire"]
  const saisonMenu = ["Coupe de france", "Championnats", "Concours Hivernaux", "Concours Nationaux", "Autres concours"]

  return (
    <div className={styles.container}>
      <div className={`${styles.logo} flex-fill`}>
        <Link className={`${styles.link} p-10`} to="/">PETANQUE Saint Saulvienne</Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link className={`${styles.link} p-10`} to="/">Accueil</Link>
          </li>
          <li>
            <Link className={`${styles.link} p-10`} to="/Actu">Actualité</Link>
          </li>
          <li>
            <Link className={`${styles.link} p-10`} to="/Equipes">Equipes</Link>
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
            <Link className={`${styles.link} p-10`}to="/Photos">Photothèque</Link>
          </li>
          <li>
            <Link className={`${styles.link} p-10`} to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header