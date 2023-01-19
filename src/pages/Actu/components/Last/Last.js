import { Link } from 'react-router-dom';
import styles from './Last.module.scss';

function Last({ newsByDate }) {

    const last = newsByDate[0]

    // console.log("last", last)

    return (
        <div className={styles.container}>
          <img className={styles.image} src={last.picture} alt="petanque" />
          <div className={styles.descriptionContainer}>
            <div className={styles.description}>
              <p className={styles.date}>{last.createdAt}</p>
              <h2 className={styles.title}>{last.title}</h2>
              <p className={styles.text}>{last.text}</p>
            </div>
            <Link className={styles.link} to={`/Actu/article/${last.id}`}>Lire la suite</Link>
          </div>
        </div>
    )
}

export default Last