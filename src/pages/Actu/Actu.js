import styles from './Actu.module.scss';
import Last from './components/Last/Last';
import Other from './components/Other/Other';
import news from '../../data/news.json'
import { useState } from 'react';

function Actu() {

  function sortDate(a,b) {
    let da = new Date(a.createdAt);
    let db = new Date(b.createdAt);
    return (da<db)?1:-1;
  }

  const [filter, setFilter] = useState('')

  const newsByDate = news.sort(sortDate)

  const newsFilter = newsByDate.filter( el => {
    return filter.toLowerCase() === '' ? el : el.title.toLowerCase().includes(filter) || el.text.toLowerCase().includes(filter)
  }).sort(sortDate)

  console.log(newsByDate)

  return (
    <div className={styles.container}>
        <Last 
          newsByDate={newsByDate}
        />
        <Other 
          newsFilter={newsFilter}
          setFilter={setFilter}
        />
    </div>
  )
}

export default Actu