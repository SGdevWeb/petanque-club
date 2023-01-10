import Carousel from '../../components/Carousel/Carousel'
import styles from './Homepage.module.scss'
import LastNews from './LastNews.js/LastNews'

function Homepage() {

  const numberLastNews = 3

  return (
    <div className={styles.container}>
      <Carousel />
      <LastNews 
        numberLastNews={numberLastNews}
      />
    </div>
  )
}

export default Homepage
