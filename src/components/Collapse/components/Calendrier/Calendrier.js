import styles from './Calendrier.module.scss'

function Calendrier({ equipe }) {
  return (
    <div className={styles.container}>
        <img src={`${window.location.origin}/images/Calendriers/${equipe.calendrier}`} alt="" />
    </div>
  )
}

export default Calendrier