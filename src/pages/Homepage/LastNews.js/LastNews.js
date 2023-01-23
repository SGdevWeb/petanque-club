import React from 'react'
import styles from './LastNews.module.scss'
import News from './News/News'

function LastNews({lastNewsByDate}) {

  console.log(lastNewsByDate)

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Dernières actus</h2>
      {lastNewsByDate.map(el => (
        <News
          key={el.id}
          id={el.id}
          img={el.picture}
          date={el.createdAt}
          title={el.title}
          text={el.text}
        />
      ))}
    </div>
  )
}

export default LastNews