import React from 'react'
import Equipe from './Equipe/Equipe'
import styles from './Equipes.module.scss'
import equipes from '../../data/equipes.json'

function Equipes() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Equipes engagées aux championnats des clubs</h2>
      {equipes.championnats.map(equipe => (
        <Equipe
        key={equipe.id} 
        img={`${window.location.origin}/images/Equipes/${equipe.cover}`}
        title={equipe.title}
        equipe={equipe}
      /> 
      ))}
    </div>
  )
}

export default Equipes