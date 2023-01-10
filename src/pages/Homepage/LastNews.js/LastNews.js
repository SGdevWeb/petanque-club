import React from 'react'
import styles from './LastNews.module.scss'
import News from './News/News'
import newData from '../../../data/news.json'

function LastNews({numberLastNews}) {

  const lastNews = newData.slice(0, numberLastNews)

  return (
    <div className={styles.container}>
      {lastNews.map(el => (
        <News
          key={el.id} 
          img={el.picture}
          date={el.createdAt}
          title={el.title}
          summary={el.text}
        />
      ))}
    </div>
  )
}

export default LastNews