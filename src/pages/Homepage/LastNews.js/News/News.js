import React from 'react'
import { Link } from 'react-router-dom'
import styles from './News.module.scss'

function News({img, date, title, text, id}) {

  return (

    <Link to={`/Actu/article/${id}`} className={styles.container}>
        <div className={styles.picture}>
            <img src={img} alt={title} />
        </div>
        <div className={styles.description}>
            <div className={styles.date}>
                {date}
            </div>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.text}>
                {text}
            </div>
        </div>
    </Link>
  )
}

export default News