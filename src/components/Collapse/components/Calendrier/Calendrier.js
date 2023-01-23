import { useState } from 'react'
import styles from './Calendrier.module.scss'

function Calendrier({ equipe }) {

  const [resize, setResize] = useState(false)

  return (
    <div className={styles.container}>
        <img onClick={() => setResize(!resize)} className={resize ? `${styles.image} ${styles.resize}` : `${styles.image}`} src={`${window.location.origin}/images/Calendriers/${equipe.calendrier}`} alt="Calendrier" />
    </div>
  )
}

export default Calendrier