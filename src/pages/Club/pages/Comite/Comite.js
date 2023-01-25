import styles from './Comite.module.scss'
import ComiteMember from './components/Member/ComiteMember'

function Comite() {
  return (
    <div className={styles.container}>
    <section className={styles.intro}>
      <h1 className={styles.title1}>Comité</h1>
      <p className={styles.introText}>
        La pétanque Saint Saulvienne est une association sportive possèdant un bureau directeur composé d'un président, d'un secrétaire générale et d'un trésorier. La taille du club fait que de nombreux membres sont impliqués pour le bon fonctionnement de l'association. Toutes ces personnes travaillent quotidiennement et donne vie au club de pétanque
      </p>
    </section>
    <section className={styles.desktop}>
    <h2 className={styles.title2}>Composition du bureau</h2>
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
            name='LEBECQUE Geneviève'
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
    </section>
    <section className={styles.assembly}>
    <h2 className={styles.title2}>Assemblée générale</h2>
    <div className={styles.assemblyText}>
      <p>
        Les décisions importantes, notamment financières, doivent être ratifiées lors d'une assemblée générale une fois par an.
      </p>
      <h3>Date de la prochaine assemblée</h3>
      <p>La prochaine assemblée aura lieu le Dimanche 5 février 2023</p>
      <h3>Programme</h3>
      <p>9h30 : Accueil des sociétaires</p>
      <p>10h30 : Début de l'assemblée générale</p>
      <p>12h30 : Repas (réservation avant le 1er février)</p>
      <div className={styles.lastAssembly}>
        <a className='btn-primary' href={`${process.env.PUBLIC_URL}/documents/Assemblee.pdf`} target='_blank' rel='noreferrer'>Compte-rendu 2022</a>
      </div>
      
    </div>
     
    </section>
      
    </div>
  )
}

export default Comite