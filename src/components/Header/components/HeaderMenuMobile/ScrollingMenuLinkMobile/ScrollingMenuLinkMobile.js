import React, { useState } from 'react'
import styles from './ScrollingMenuLinkMobile.module.scss'
import ScrollingMenuMobile from './ScrollingMenuMobile/ScrollingMenuMobile'

function ScrollingMenuLinkMobile({title, menu, setShowHeaderMobile }) {

  const [showMenuMobile, setShowMenuMobile] = useState(false)
  
  function titleMenuStyle() {
    if (showMenuMobile) {
      return { color : '#250902' }
    } else {
      return {}
    }
  }

  return (
    <>
        <div onClick={() => setShowMenuMobile(!showMenuMobile)} className={styles.scrollingMenuLinkMobile}>
          <div  className={`${styles.link} d-flex align-items justify-content`} 
                style={titleMenuStyle()}
          > 
            <div className={styles.arrowContainer}>
              {showMenuMobile ? (
              <i className={`fa-solid fa-sort-up ${styles.scrollingArrowRight}`}></i>
              ) : (
              <i className={`fa-solid fa-sort-up ${styles.scrollingArrowLeft}`}></i>
              )
              }
            </div>
            <span>{title}</span>
          </div>
      </div>
      {showMenuMobile &&
      <ScrollingMenuMobile
        setShowHeaderMobile={setShowHeaderMobile}
        showMenuMobile={showMenuMobile}
        setShowMenuMobile={setShowMenuMobile}
        menu={menu}
        title={title}
      />
      }
    </>
  )
}

export default ScrollingMenuLinkMobile