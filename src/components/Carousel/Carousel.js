import React from 'react'
import styles from './Carousel.module.scss'
import news from '../../data/news.json'

function Carousel() {

  function sortDate(a,b) {
    let da = new Date(a.createdAt);
    let db = new Date(b.createdAt);
    return (da<db)?1:-1;
  }

  return (
    <div className={styles.container}>
        <div className={styles.carouselItems}>
            <div className={styles.inputs}>
              <input type="radio" id='slide1' checked/>
              <input type="radio" id='slide2' />
              <input type="radio" id='slide3' />
              <input type="radio" id='slide4' />
            </div>
            {news.sort(sortDate).map( el => (
              <div key={el.id} className={styles.carouselItem}>
                <img src={el.picture} alt={el.title}/>
              </div>
            ))}
            <div key={news[0].id + news[0].title} className={styles.carouselItem}>
              <img src={news[0].picture} alt={news[0].title}/>
            </div>
        </div>
        <div className={styles.checked}>
          <label htmlFor="slide1"></label>
          <label htmlFor="slide2"></label>
          <label htmlFor="slide3"></label>
          <label htmlFor="slide4"></label>
        </div>
        <div className={styles.bullets}>
          <label className={styles.bullet} htmlFor="slide1"></label>
          <label className={styles.bullet} htmlFor="slide2"></label>
          <label className={styles.bullet} htmlFor="slide3"></label>
          <label className={styles.bullet} htmlFor="slide4"></label>
        </div>
    </div>
  )
}

export default Carousel