import React from 'react'
import styles from './News.module.scss'

function News({img, date, title, summary}) {
  return (

    <div className={styles.container}>
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
                {summary}
            </div>
        </div>
    </div>
  )
}

export default News