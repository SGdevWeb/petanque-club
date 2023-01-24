import styles from './Comite.module.scss'
import ComiteMember from './components/Member/ComiteMember'

function Comite() {
  return (
    <div className={styles.container}>
      <p className={styles.introduction}>
        La pétanque Saint Saulvienne est une association sportive <br/> possèdant un bureau directeur composé d'un président, d'un secrétaire générale et d'un trésorier.<br/> La taille du club fait que de nombreux membres sont impliqués pour le bon fonctionnement de l'association. <br/> Toutes ces personnes travaillent quotidiennement et donne vie au club de pétanque

      </p>
      <h2 className={styles.title}>Composition du bureau</h2>
      <div className={styles.members}>
        <div className={styles.row}>
          <ComiteMember 
            name='GABEZ Vincent'
            fonction='Président'
          />
        </div>
        <div className={styles.row}>
          <ComiteMember 
            name='DELOBE Gérard'
            fonction='Secrétaire'
          />
            <ComiteMember 
            name='Lebecque Geneviève'
            fonction='Trésorier'
          />
        </div>
        <div className={styles.row}>
          <ComiteMember 
            name='NOM Prénom'
            fonction='Membre'
          />
          <ComiteMember 
            name='NOM Prénom'
            fonction='Membre'
          />
          <ComiteMember 
            name='NOM Prénom'
            fonction='Membre'
          />
          <ComiteMember 
            name='NOM Prénom'
            fonction='Membre'
          />
          <ComiteMember 
            name='NOM Prénom'
            fonction='Membre'
          />
          <ComiteMember 
            name='NOM Prénom'
            fonction='Membre'
          />
          <ComiteMember 
            name='NOM Prénom'
            fonction='Membre'
          />
        </div>
      </div>
    </div>
  )
}

export default Comite