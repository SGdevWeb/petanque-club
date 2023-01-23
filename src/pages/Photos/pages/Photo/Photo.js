import styles from './Photo.module.scss'
import photos from '../../../../data/photos.json'
import { useParams } from 'react-router-dom'
import Card from '../../../../components/Card/Card'

function Photo() {

    const photoId = useParams().id
    const photo = photos.find((element) => element.id === photoId)
    console.log(photo.photos)

  return (
    <div className={styles.container}>
    {photo.photos.map( (element, index) => (
        <div className={styles.card}>
        <Card 
            img={`${window.location.origin}/images/Photos/${element}`}
            title={`photo ${index + 1}`}
            // date={photo.date}
          />
        </div>
        
    ))}
                 
    </div>
  )
}

export default Photo

// function Article() {

//     const articleId = useParams().id
//     const article = news.find((element) => element.id === articleId)
  
//     return (
//       <div className={styles.container}>
//         <h1 className={styles.title}>
//           {article.title}
//         </h1>
//         <p className={styles.date}>{article.createdAt}</p>
//         <img className={styles.image} src={article.picture} alt={article.title} />
//         <p className={styles.description}>
//           {article.text}
//         </p>
//       </div>
//     )
//   }
  
//   export default Article