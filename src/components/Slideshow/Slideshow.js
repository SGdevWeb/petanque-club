import React from 'react'
import styles from './Slideshow.module.scss'
import Carousel from 'react-bootstrap/Carousel'

function Slideshow({lastNewsByDate}) {

  return (
    <div className={styles.container}>
      <Carousel className={styles.carousel}>
        {lastNewsByDate.map( el => (
        <Carousel.Item key={el.id}>
          <img
            className="d-block w-100"
            src={el.picture}
            alt={el.title}
          />
          <Carousel.Caption className={styles.caption}>
            <h3 className={styles.captionTitle}>{el.title}</h3>
            <p className={styles.captionText}> 
              {el.text.split(' ').slice(0, 12).join(' ')} ...
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        ))}
      </Carousel>
    
        
        {/* <div className={styles.carouselItems}>
            {lastNewsByDate.map( el => (
              <div key={el.id} className={styles.carouselItem}>
                <img src={el.picture} alt={el.title}/>
              </div>
            ))}
            <div key={lastNewsByDate[0].id + lastNewsByDate[0].title} className={styles.carouselItem}>
              <img src={lastNewsByDate[0].picture} alt={lastNewsByDate[0].title}/>
            </div>
        </div> */}

    </div>
  )
}

export default Slideshow