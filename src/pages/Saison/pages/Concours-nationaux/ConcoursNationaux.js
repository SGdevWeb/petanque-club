import styles from "./ConcoursNationaux.module.scss";

function ConcoursNationaux() {
  return (
    <div className={styles.container}>
      <section>
        <h1 className={styles.title}>Nationaux et internationaux 2023</h1>
        <p className={styles.introText}>
          Le calendrier de ces concours se trouve au format pdf.
        </p>
        <div className={styles.calendarLink}>
          <a
            className="btn-primary"
            href={`${process.env.PUBLIC_URL}/documents/nationaux_2023.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            Calendrier 2023
          </a>
        </div>
      </section>
    </div>
  );
}

export default ConcoursNationaux;
