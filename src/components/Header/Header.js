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
            {showMenuClub && !showMenuSaison ? (
              <i className={`fa-solid fa-sort-up ${styles.scrollingArrowUp}`}></i>
              ) : (
              <i className={`fa-solid fa-sort-down ${styles.scrollingArrowDown}`}></i>
              )
            }
            {showMenuClub && !showMenuSaison &&
              <div className={styles.menu}>
              <ul>
                <Link className={styles.link} to='/Club/Comite'>Comité</Link>
                <Link className={styles.link} to='/Club/Licences'>Licences</Link>
                <Link className={styles.link} to='/Club/Partenaires'>Partenaires</Link>
                <Link className={styles.link} to='/Club/Horaires'>Horaires</Link>
                <Link className={styles.link} to='/Club/Concours-societaire'>Concours sociétaire</Link>
              </ul>
            </div>
            }
          </li>
          <li className={styles.scrollingMenu} onClick={handleShowMenuSaison}>
              <span className={`${styles.link} p-10`}>Saison</span>
              {showMenuSaison && !showMenuClub ? (
                <i className={`fa-solid fa-sort-up ${styles.scrollingArrowUp}`}></i>
                ) : (
                <i className={`fa-solid fa-sort-down ${styles.scrollingArrowDown}`}></i>
                )
              }
              {showMenuSaison && !showMenuClub &&
                <>
                  <div className={styles.calc} onClick={() => setShowMenuSaison(true)}></div>
                  <div className={styles.menu}>
                    <ul>
                      <Link className={styles.link} to='/Saison/Coupe-de-france'>Coupe de france</Link>
                      <Link className={styles.link} to='/Saison/Championnats'>Championnats</Link>
                      <Link className={styles.link} to='/Saison/Concours-Hivernaux'>Concours Hivernaux</Link>
                      <Link className={styles.link} to='/Saison/Concours-Nationaux'>Concours Nationaux</Link>
                      <Link className={styles.link} to='/Saison/autres-Concours'>Autres concours</Link>
                    </ul>
                  </div>
                </>
              }
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