import styles from './ComiteMember.module.scss'

function ComiteMember({ name, fonction }) {
  return (
    <div className={styles.container}>
        <i className={`fa-regular fa-circle-user ${styles.profilImg}`}></i>
        <h2 className={styles.name}> {name} </h2>
        <h2 className={styles.fonction}> {fonction} </h2>
    </div>
  )
}

export default ComiteMember