import styles from './Horaires.module.scss'

function Horaires() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Boulodromes</h2>
      <section className={styles.boulodromeSection}>
        <div className={styles.img}>
          <img src={`${window.location.origin}/images/Autres/boulodrome_exterieur.jpeg`} alt="boulodrome exterieur" />
          <img src={`${window.location.origin}/images/Autres/boulodrome_couvert.jpeg`} alt="boulodrome couvert" />
        </div>
        <p className={styles.text}>La club possède un boulodrome extérieur ainsi qu'un boulodrome couvert de plus de 30 terrains.</p>
        <p className={styles.text}>La pétanque Saint Saulvienne et son club house vous accueille les après-midi du mercredi, vendredi et samedi. </p>
      </section>
      <section className={styles.hoursSection}>
        <h2 className={styles.title}>horaires</h2>
        <div className={styles.hours}>
            <div>
                <span>Mercredi</span>
                <span>14:30 - 19:30</span>
            </div>
            <div>
                <span>Vendredi</span>
                <span>14:30 - 20:30</span>
            </div>
            <div>
                <span>Samedi</span>
                <span>14:30 - 20:30</span>
            </div>
        </div>
            </section>
    </div>
  )
}

export default Horaires