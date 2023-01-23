import styles from './Card.module.scss';

function Card({ img, title, date }) {
  return (
    <div className={styles.container}>
        <img className={styles.image} src={img} alt={title} />
        <div className={styles.description}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.date}>{date}</p>
        </div>
    </div>
  )
}

export default Card