import React from 'react'
import styles from './Footer.module.scss'

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.location}>
        Pétanque Saint Saulvienne<br/>
        44 rue Henri Barbusse<br/>
        59880 Saint-Saulve<br/>
      </div>
      <div className={styles.author}>
        Site réalisé par
          <a href="http://samuelgustin.fr" target="_blank" rel="noreferrer" className={styles.link}>Samuel Gustin</a> 
        </div>
    </div>
  )
}

export default Footer