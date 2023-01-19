import styles from './Other.module.scss';
import News from '../../../Homepage/LastNews.js/News/News';
import Nav from './components/Nav/Nav';

function Other({ newsFilter, setFilter }) {

    const otherNews = newsFilter.slice(1)

    return (
        <div className={styles.container}>
            <Nav 
                setFilter={setFilter}
            />
                {otherNews.map(el => (
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