import React from 'react'
import MenuMobile from './MenuMobile/MenuMobile'
import styles from './ScrollingMenuMobile.module.scss'

function ScrollingMenuMobile({ menu, title, setShowHeaderMobile }) {

    return (
        <>
            {/* <div className={styles.calc} onClick={() => setShowMenuMobile(false)}></div> */}
            <div className={styles.menuContainer}>
                <div className={styles.menu}>
                {/* <i className={`fa-solid fa-sort-up ${styles.arrowRight}`}></i> */}
                <ul>
                    <MenuMobile
                    menu={menu}
                    title={title}
                    setShowHeaderMobile={setShowHeaderMobile}
                    />
                </ul>
                </div>
            </div>
        </>
    )
}

export default ScrollingMenuMobile