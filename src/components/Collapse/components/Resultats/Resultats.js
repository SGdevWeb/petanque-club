import styles from './Resultats.module.scss'

function Resultats({ equipe }) {
  return (
    <div className={styles.container}>
        {equipe.resultats === "" ? (
          <p>Aucun résultat pour le moment !</p>
        ) : (
          <img src={`${window.location.origin}/images/Equipes/${equipe.resultats}`} alt="" />
        )}
    </div>
  )
}

export default Resultats