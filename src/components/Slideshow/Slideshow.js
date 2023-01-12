import React from 'react'
import styles from './Slideshow.module.scss'
import news from '../../data/news.json'
import Carousel from 'react-bootstrap/Carousel'

function Slideshow({numberLastNews}) {

  const lastNews = news.slice(0, numberLastNews)

  function sortDate(a,b) {
    let da = new Date(a.createdAt);
    let db = new Date(b.createdAt);
    return (da<db)?1:-1;
  }

  return (
    <div className={styles.container}>
      <Carousel className={styles.carousel}>
        {lastNews.sort(sortDate).map( el => (
        <Carousel.Item key={el.id}>
          <img
            className="d-block w-100"
            src={el.picture}
            alt={el.title}
          />
          <Carousel.Caption>
            <h3>{el.title}</h3>
            <p>
              {el.text.split(' ').slice(0, 12).join(' ')} ...
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        ))}
      </Carousel>
    
        {/* 
        // Carousel without library
        <div className={styles.carouselItems}>
            {news.sort(sortDate).map( el => (
              <div key={el.id} className={styles.carouselItem}>
                <img src={el.picture} alt={el.title}/>
              </div>
            ))}
            <div key={news[0].id + news[0].title} className={styles.carouselItem}>
              <img src={news[0].picture} alt={news[0].title}/>
            </div>
        </div> */}

    </div>
  )
}

export default Slideshow