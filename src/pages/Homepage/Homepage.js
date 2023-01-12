import Slideshow from '../../components/Slideshow/Slideshow'
import styles from './Homepage.module.scss'
import LastNews from './LastNews.js/LastNews'

function Homepage() {

  const numberLastNews = 3

  return (
    <div className={styles.container}>
      <Slideshow 
        numberLastNews={numberLastNews}
      />
      <LastNews 
        numberLastNews={numberLastNews}
      />
    </div>
  )
}

export default Homepage
