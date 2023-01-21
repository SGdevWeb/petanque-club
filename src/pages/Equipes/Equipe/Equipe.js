import Collapse from '../../../components/Collapse/Collapse';
import Calendrier from '../../../components/Collapse/components/Calendrier/Calendrier';
import Membres from '../../../components/Collapse/components/Membres/Membres';
import Resultats from '../../../components/Collapse/components/Resultats/Resultats';
import styles from './Equipe.module.scss';

function Equipe({ img, title, equipe }) {

  return (
    <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <img className={styles.img} src={img} alt={title} />
        <Collapse 
            title="Membres de l'équipe"
            content=<Membres 
                equipe={equipe}
            />
        />
        <Collapse 
            title='Calendrier'
            content=<Calendrier 
                equipe={equipe}
            />

        />
        <Collapse 
            title='Résultats'
            content=<Resultats 
                equipe={equipe}
            />
        />
    </div>
  )
}

export default Equipe