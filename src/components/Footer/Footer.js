import React from 'react'
import styles from './Footer.module.scss'

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.contactDetails}>
        <div className={styles.address}>
          <i className="fa-solid fa-location-dot"></i>
          <div className={styles.content}>
            <div className={styles.title}>adresse</div>
            <div className={styles.text}>
              44 rue Henri Barbusse, Saint-Saulve
            </div>
          </div>            
        </div>
        <div className={styles.phone}>
          <i className="fa-solid fa-phone-flip"></i>
          <div className={styles.content}>
            <div className={styles.title}>téléphone</div>
            <div className={styles.text}>03 27 33 11 52</div>
          </div>
        </div>
        <div className={styles.mail}>
          <i className="fa-regular fa-envelope"></i>
          <div className={styles.content}>
            <div className={styles.title}>e-mail</div>
            <div className={styles.text}>petanque@gmail.com</div>
          </div>
          </div>
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