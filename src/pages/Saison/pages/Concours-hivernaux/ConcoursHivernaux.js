import styles from "./ConcoursHivernaux.module.scss";
import Table from "../../../../components/Table/Table";

function ConcoursHivernaux() {
  return (
    <div className={styles.container}>
      <section>
        <h1 className={styles.title}>Concours Hivernaux 2023</h1>
        <p className={styles.introText}>
          Les concours hivernaux de la région nord sont ici regroupés par mois
          sous forme de tableaux récapitulatifs.
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Février 2023</h2>
        <article>
          <p className={styles.paragraphe}>Tableau récapitulatif</p>
          <Table />
        </article>
      </section>
    </div>
  );
}

export default ConcoursHivernaux;
