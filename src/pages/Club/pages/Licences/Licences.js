import styles from './Licences.module.scss'

function Licences() {
  return (
    <div className={styles.container}> 
      <h1 className={styles.title}>Adhésion</h1>
      <section className={styles.section}>
        <article>
          <h2>Licence</h2>
            <h3>Pour les nouveaux licenciés</h3>
              <p>1 - Prenez RDV chez votre médecin afin qu'il puisse vous signer un certificat médical de non contre-indication à la pratique de la Pétanque et du Jeu Provençal, y compris en compétition</p>
              <p>2 - Donner l'ensemble des documents ( formulaire d'inscription, photo d'identité récente et en coueur, certificat médical) au club qui s'occupera des démarches auprès du comité départemental, puis de la fédération, et vous délivrera votre licence.</p>
              <p>3 - Une fois la licence reçue, vous pouvez participer aux différentes compétitions agrées organisées en France sous l'égide de la F.F.P.J.P. La licence sera présentée pour chaque compétition à laquelle vous souhaitez participer.</p>
            <h3>Pour un renouvellement</h3>
              <p>Renseignez le questionnaire de danté et remettez l'attestation signée au club. Inutile de fournir un nouveau certificat médical si celui-ci date de moins de 3 ans.</p>
              <p className={styles.center}>Avec votre Licence, vous bénéficier d'une assurance responsabilité civile et individuelle accident pour votre pratique.</p>
        </article>
        <article>
          <h2>Carte de membre</h2>
            <p>La carte de membre est destinée aux adhérents qui ne souhaitent pas faire de concours officiel.<br/> Elle permet toutefois de participer à tous les repas organisés par le club ainsi que les concours sociétaires.</p>
        </article>
        
      </section>
      <div className={styles.tarif}>
        <table>
          <caption>Tarifs 2023</caption>
          <tr>
            <td>Licence</td>
            <td>40€</td>
          </tr>
          <tr>
            <td>Carte de membre</td>
            <td>30€</td>
          </tr>
        </table>
      </div>
      
    </div>
  )
}

export default Licences