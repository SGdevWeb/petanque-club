import styles from './Actu.module.scss';
import Last from './components/Last/Last';
import Nav from './components/Nav/Nav';
import Other from './components/Other/Other';
import news from '../../data/news.json'

function Actu() {

  function sortDate(a,b) {
  let da = new Date(a.createdAt);
  let db = new Date(b.createdAt);
  return (da<db)?1:-1;
  }

  const newsByDate = news.sort(sortDate)

  return (
    <div className={styles.container}>
        <Nav />
        <Last 
          newsByDate={newsByDate}
        />
        <Other 
          newsByDate={newsByDate}
        />
    </div>
  )
}

export default Actu