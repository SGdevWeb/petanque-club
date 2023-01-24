import styles from './Gallery.module.scss'
import photos from '../../../../data/photos.json'
import { Link, useParams } from 'react-router-dom'

function Gallery() {

    const photoId = useParams().id
    const photo = photos.find((element) => element.id === photoId)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{photo.event}</h1>
      <div className={styles.pictures}>
        {photo.photos.map( (element, index) => (
          <Link key={index} className={styles.picture} target='_blank' to={`/images/photos/${element}`}>
            <img className={styles.img} src={`${window.location.origin}/images/Photos/${element}`}
            alt={photo.event}
            />
          </Link>
        ))} 
      </div>
      
    </div>
  )
}

export default Gallery