import Table from "../../../../components/Table/Table";
import styles from "./Championnats.module.scss";

function Championnats() {
  return (
    <div className={styles.container}>
      <section>
        <h1 className={styles.title}>Championnat de france 2023</h1>
        <p className={styles.introText}>
          Les qualifications aux championnats de France sont établies uniquement
          sur le secteur du Valenciennois. Pour retrouver les dates pour votre
          secteur téléchargez le document officiel qui regroupe tous les
          secteurs du Nord.
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Qualificatifs aux championnats de France 2023
        </h2>
        <article>
          <p className={styles.paragraphe}>
            Voici les dates des qualificatifs aux championnats de France 2023
            pour le secteur du Valenciennois.
          </p>
          <Table className="mb-20" />
          <p className={styles.paragraphe}>
            31 équipes seront qualifiées sur l'ensemble des 7 secteurs. La 32ème
            place est prévue pour l'équipe championne 2022 dans la mesure où
            elle évolue avec la même composition.
          </p>
          <p className={styles.paragraphe}>
            Le jet du but de ces épreuves qualificatives sera à 13h.
          </p>
          <p className={styles.paragraphe}>
            Le jet du but du championnat sera à 8h pour les 32 équipes
            qualifiées.
          </p>
        </article>
      </section>
    </div>
  );
}

export default Championnats;
