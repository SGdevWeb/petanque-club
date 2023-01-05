import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

function Header() {

  const [showMenuClub, setShowMenuClub] = useState(false)
  const [showMenuSaison, setShowMenuSaison] = useState(false)
 
  function handleShowMenuClub() {
    setShowMenuClub(!showMenuClub)
  }

  function handleShowMenuSaison() {
    setShowMenuSaison(!showMenuSaison)
  }

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
          <li className={styles.scrollingMenu} onClick={handleShowMenuClub}>
            <span className={`${styles.link} p-10`}>Club</span>
            {showMenuClub ? (
              <i className={`fa-solid fa-sort-up ${styles.scrollingArrowUp}`}></i>
              ) : (
                <i className={`fa-solid fa-sort-down ${styles.scrollingArrowDown}`}></i>
              )
            }
            {showMenuClub && !showMenuSaison && (
              <div className={styles.menu}>
              <ul>
                <li>Comité</li>
                <li>Licences</li>
                <li>Partenaires</li>
                <li>Horaires</li>
                <li>Concours sociétaire</li>
              </ul>
            </div>
            )}
          </li>
          <li className={styles.scrollingMenu} onClick={handleShowMenuSaison}>
            <span className={`${styles.link} p-10`}>Saison</span>
            {showMenuSaison ? (
              <i className={`fa-solid fa-sort-up ${styles.scrollingArrowUp}`}></i>
              ) : (
                <i className={`fa-solid fa-sort-down ${styles.scrollingArrowDown}`}></i>
              )
            }
            {showMenuSaison && !showMenuClub && (
              <div className={styles.menu}>
              <ul>
                <li>Coupe de france</li>
                <li>Championnats</li>
                <li>Concours Hivernaux</li>
                <li>Concours Nationaux</li>
                <li>Autres concours</li>
              </ul>
            </div>
            )}
            
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