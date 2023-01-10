import React from 'react'
import styles from './Footer.module.scss'

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.location}>
        <span>Pétanque</span> Saint Saulvienne<br/>
        44 rue Henri Barbusse<br/>
        59880 Saint-Saulve<br/>
        03 27 33 11 52<br/>
      </div>
      <div className={styles.author}>
        <span>
          <i className="fa-regular fa-copyright"></i>
          {new Date().getFullYear()} - Tous droits réservés.
        </span>
        <span> Site réalisé par
          <a href="http://samuelgustin.fr" target="_blank" rel="noreferrer" className={styles.link}>Samuel Gustin</a>
        </span>
      </div>
    </div>
  )
}

export default Footer