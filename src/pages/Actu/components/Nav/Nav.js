import styles from './Nav.module.scss'

function Nav() {
  return (
    <div className={styles.container}>
      <i className="fa-solid fa-magnifying-glass"></i>
      <input className={styles.search} type="text" placeholder='Rechercher' />
    </div>
  )
}

export default Nav