import styles from './Partenaires.module.scss'

function Partenaires() {
  return (
    <div className={styles.container}>
      <section className={styles.intro}>
        <h1 className={styles.title}>Sponsors et partenaires</h1>
        <p className={styles.introText}>La pétanque de Saint Saulve a besoin de l'apport fourni par des sponsors et partenaires qui permettent à des associations sportives de pouvoir faire face à des besoins vestimentaires réglementaires pour évoluer de façon homogène en compétition, et pour la mise en place d'animations et de concours ainsi qu'à toutes dépenses annexes.</p>
        <p className={styles.introTextStrong}>La pétanque Saint-Saulvienne remercie tous les partenaires du club.</p>
      </section>
      <section className={styles.partenaire}>
        <h2 className={styles.partenaireTitle}>JOMA</h2>
        <article className={styles.description}>
          <div className={styles.left}>
            <div className={styles.content}>
              <p>Joma est le sponsor principal de la Pétanque Saint Saulvienne pour la tenue qui représente notre club. En début d'année 2022, une nouvelle tenue de couleur bordeaux a été choisie par le club.</p>
              <div className={styles.images}>
                <img src={`${window.location.origin}/images/Partenaires/Joma/joma_veste.jpeg`} alt="Veste Joma" />
                <img src={`${window.location.origin}/images/Partenaires/Joma/joma_polo.jpeg`} alt="Polo Joma" />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.content}>
              <div>
                <img src={`${window.location.origin}/images/Partenaires/Joma/joma_logo.jpeg`} alt="Logo joma" />
              </div>
              <h3>joma</h3>
              <p>Joma Sport est une marque espagnole de vêtement de sport créée en 1965, la marque JOMA est spécialisée dans le développement et la fabrication de chaussures de sport ainsi que des équipements et accessoires de sport. La marque Joma est présente avec un réseau de distribution de plus de 107 pays dans le monde.</p>
              </div>
            </div>
        </article>
      </section>
      <section className={styles.partenaire}>
        <h2 className={styles.partenaireTitle}>val-top</h2>
        <article className={styles.description}>
          <div className={styles.left}>
            <div className={styles.content}>
              <p>VAL-TOP est une entreprise située dans les hauts-de-France, à Seclin, crée par Valentin Cremades, joueur de pétanque passionné adhérent du club. VAL-TOP fabrique principalement une sacoche chauffante innovante</p>
              <div className={styles.images}>
                <img src={`${window.location.origin}/images/Partenaires/ValTop/valtop_sacoche.jpeg`} alt="Veste Joma" />
                <img src={`${window.location.origin}/images/Partenaires/ValTop/valtop_accessoires.jpeg`} alt="Polo Joma" />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.content}>
              <div className={styles.imgContainer}>
                <img src={`${window.location.origin}/images/Partenaires/ValTop/valtop_logo.png`} alt="Logo joma" />
              </div>
              <h3>val-top</h3>
              <p>Val Top est à l'initiative de Valentin Cremades, joueur de pétanque passionné.Dans les Hauts de France, Valentin Cremades pratique la pétanque régulièrement, même par temps froid. C'est dans cette période normalement peu propice à la pétanque que Valentin Cremades a eu l'idée de concevoir une sacoche chauffante qui permet de réchauffer son jeu de boules de pétanque avant chaque partie. L'idée n'était pas simple à mettre en œuvre, il fallait une sacoche innovante tant par sa forme que par la conception technique. Pour ce faire, il fallait utiliser un design et des matériaux différents, n’existant pas sur le marché.</p>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Partenaires