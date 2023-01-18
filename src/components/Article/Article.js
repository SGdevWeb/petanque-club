import React from 'react'
import { useParams } from 'react-router-dom'
import news from '../../data/news.json'
import styles from './Article.module.scss'


function Article() {

  const articleId = useParams().id
  const article = news.find((element) => element.id === articleId)

  console.log(article)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {article.title}
      </h1>
      <p className={styles.date}>{article.createdAt}</p>
      <img className={styles.image} src={article.picture} alt={article.title} />
      <p className={styles.description}>
        {article.text}
      </p>
    </div>
  )
}

export default Article