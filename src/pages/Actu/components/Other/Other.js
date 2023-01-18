import styles from './Other.module.scss';
import news from '../../../../data/news.json';
import News from '../../../Homepage/LastNews.js/News/News';

function Other() {
    return (
        <div className={styles.container}>
            {news.map(el => (
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

export default Other