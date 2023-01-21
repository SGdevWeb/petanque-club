import { useState } from 'react';
import styles from './Collapse.module.scss'

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return isOpen ? (
        <div className={styles.container}>
            <div className={styles.scrollingMenu} onClick={() => setIsOpen(false)}>
                <p className={styles.title}>{title}</p><i className={`fa-solid fa-chevron-up ${styles.arrow}`}></i>
            </div>
            <div className={styles.content}>
                    {content}
            </div>
        </div>
    ) : (
        <div className={styles.container}>   
            <div className={styles.scrollingMenu} onClick={() => setIsOpen(true)}>
                <p className={styles.title}>{title}</p><i className={`fa-solid fa-chevron-down ${styles.arrow}`}></i>
            </div>
        </div>
    )
}

export default Collapse