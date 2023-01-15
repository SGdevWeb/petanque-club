import Slideshow from '../../components/Slideshow/Slideshow'
import styles from './Homepage.module.scss'
import LastNews from './LastNews.js/LastNews'
import news from './../../data/news.json'

function Homepage() {

  const numberLastNews = 4

  const lastNews = news.slice(0, numberLastNews)

  function sortDate(a,b) {
    let da = new Date(a.createdAt);
    let db = new Date(b.createdAt);
    return (da<db)?1:-1;
  }

  const lastNewsByDate = lastNews.sort(sortDate)

  return (
    <div className={styles.container}>
      <Slideshow 
        lastNewsByDate={lastNewsByDate}
      />
      <LastNews 
        lastNewsByDate={lastNewsByDate}
      />
    </div>
  )
}

export default Homepage
