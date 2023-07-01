import styles from "./CoupeDeFrance.module.scss";
import tirage from "../../../../assets/documents/Tirage_1er_tour_CDF.png";

function CoupeDeFrance() {
  return (
    <div className={styles.container}>
      <section>
        <h1 className={styles.title}>Coupe de france 2023</h1>
        <p className={styles.introText}>
          Le premier tour de la coupe de france se déroulera le samedi 25
          février. La Pétanque de Saint Saulve se déplace à Gravelines
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Tirage cadrage et 1er Tour Départemental
        </h2>
        <article>
          <p className={styles.paragraphe}>
            Voici les tirages du cadrage (4 clubs concernés - date butoir samedi
            4 février à 14h) et du premier tour (date butoir samedi 25 février à
            14h).
          </p>
          <div className={styles.tirage}>
            <img src={tirage} alt="Tirage 1er tour coupe de france" />
          </div>
          <p className={styles.paragraphe}>
            Ces rencontres doivent se jouer en boulodrome couvert et le club qui
            reçoit doit s'octroyer les services d'un arbitre
          </p>
          <p className={styles.paragraphe}>
            Les 28 équipes qualifiées seront réparties en 7 groupes pour les
            2ème et 3ème tours qui se joueront le samedi 6 mai à partir de 8h30.
            Les 28 équipes éliminées et les 2 perdants des cadrages intègreront
            la coupe du Nord (date butoir dimanche 19 mars à 14h), sauf si non
            engagement du club pour cette compétition.
          </p>
        </article>
      </section>
    </div>
  );
}

export default CoupeDeFrance;
