import Card from '../../components/Card/Card';
import styles from './Photos.module.scss';
import photos from '../../data/photos.json'
import { Link } from 'react-router-dom';

function Photos() {
  return (
    <div className={styles.container}>
      {photos.map( photo => (
        <Link key={photo.id} className={styles.link} to={`/Photos/${photo.id}`}>
          <Card 
            img={`${window.location.origin}/images/Photos/${photo.cover}`}
            title={photo.event}
            date={photo.date}
          />
        </Link>
      ))}
    </div>
  )
}

export default Photos