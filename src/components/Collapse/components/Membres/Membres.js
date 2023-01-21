import styles from './Membres.module.scss'

function Membres({ equipe }) {

  return (
    <div className={styles.container}>
        <h3 className={styles.title}>{equipe.féminines ? 'JOUEUSES' : 'JOUEURS'}</h3>
        <p className={styles.text}>{equipe.membres.joueurs.join(' / ')}</p>
        <h3 className={styles.title}>COACH</h3>
        <p className={styles.text}>{equipe.membres.coach}</p>

    </div>
  )
}

export default Membres