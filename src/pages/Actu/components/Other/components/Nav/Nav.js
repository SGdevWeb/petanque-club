import styles from './Nav.module.scss'

function Nav({ setFilter }) {

  function handleChange(e) {
    const filterValue = e.target.value
    setFilter(filterValue)
  }

  return (
    <div className={styles.container}>
      <i className="fa-solid fa-magnifying-glass"></i>
      <input 
        onChange={ handleChange } 
        className={styles.search} 
        type="text" 
        placeholder='Rechercher' />
    </div>
  )
}

export default Nav