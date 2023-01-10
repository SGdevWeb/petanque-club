import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.module.scss'

function Menu({menu, title}) {
  return (
    menu.map((element, key) => <Link key={key} className={styles.link} to={`/${title}/${element.split(" ").join('-')}`}>{element}</Link>)
  )
}

export default Menu