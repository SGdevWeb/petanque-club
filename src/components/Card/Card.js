import styles from './Card.module.scss';

function Card({ img, title, date, description }) {
  return description ? (
    <div className={styles.container}>
      <img className={styles.image} src={img} alt={title}/>
      <div className={styles.description}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.date}>{date}</p>
    </div>
    </div>
    ) : (
    <div className={styles.container}>
      <img className={styles.imageOnly} src={img} alt={title}/>
    </div>
    )
}

export default Card