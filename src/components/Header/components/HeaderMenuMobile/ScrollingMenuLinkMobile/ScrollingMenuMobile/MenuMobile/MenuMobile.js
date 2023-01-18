import React from 'react'
import { Link } from 'react-router-dom'
import styles from './MenuMobile.module.scss'

function MenuMobile({menu, title, setShowHeaderMobile}) {
  return (
    <>
    {menu.map((element, key) => (
      <Link onClick={() => setShowHeaderMobile(false)} key={key} className={styles.link} to={`/${title}/${element.split(" ").join('-')}`}>
        {element}
      </Link>))}
      </>
    )
}

export default MenuMobile