import React from 'react'
import MenuMobile from './MenuMobile/MenuMobile'
import styles from './ScrollingMenuMobile.module.scss'

function ScrollingMenuMobile({ showMenuMobile, setShowMenuMobile, menu, title }) {

    return (
        <>
            <div className={styles.calc} onClick={() => setShowMenuMobile(false)}></div>
            <div className={styles.menuContainer}>
                <div className={showMenuMobile ? `${styles.menu} ${styles.menuActive}` : `${styles.menu}`}>
                <i className={`fa-solid fa-sort-up ${styles.arrowRight}`}></i>
                <ul>
                    <MenuMobile
                    menu={menu}
                    title={title}
                    setShowMenuMobile={setShowMenuMobile}
                    />
                </ul>
                </div>
            </div>
        </>
    )
}

export default ScrollingMenuMobile