import React from 'react'
import Menu from './Menu/Menu'
import styles from './ScrollingMenu.module.scss'

function ScrollingMenu({ showMenu, setShowMenu, menu, title }) {
    return (
        <>
          <div className={styles.calc} onClick={() => setShowMenu(false)}></div>
          <div className={styles.menuContainer}>
            <div className={showMenu ? `${styles.menu} ${styles.menuActive}` : `${styles.clubMenu}`}>
              <i className={`fa-solid fa-sort-up ${styles.arrowUp}`}></i>
              <ul>
                <Menu
                  menu={menu}
                  title={title}
                />
              </ul>
            </div>
          </div>
        </>
    )
}

export default ScrollingMenu