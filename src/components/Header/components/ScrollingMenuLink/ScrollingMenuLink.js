import React, { useState } from 'react'
import ScrollingMenu from './ScrollingMenu/ScrollingMenu'
import styles from './ScrollingMenuLink.module.scss'

function ScrollingMenuLink({title, menu}) {

  const [showMenu, setShowMenu] = useState(false)

  function handleShowMenu() {
    setShowMenu(!showMenu)
  }
  
  function titleMenuStyle() {
    if (showMenu) {
      return { color : '#250902' }
    } else {
      return {}
    }
  }

  return (
    <>
      <div onClick={handleShowMenu}>
        <div className={styles.scrollingMenu}>
          <div  className={`${styles.link} p-10 d-flex align-items justify-content`} 
                style={titleMenuStyle()}
          > 
            <span>{title}</span>
            <div className={styles.arrowContainer}>
              {showMenu ? (
              <i className={`fa-solid fa-sort-up ${styles.scrollingArrowUp}`}></i>
              ) : (
              <i className={`fa-solid fa-sort-down ${styles.scrollingArrowDown}`}></i>
              )
              }
            </div>
          </div>
        </div>
      </div>
      {showMenu &&
      <ScrollingMenu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        menu={menu}
        title={title}
      />
      }
    </>
  )
}

export default ScrollingMenuLink