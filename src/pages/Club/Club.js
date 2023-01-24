import styles from './Club.module.scss'
import { Outlet } from 'react-router-dom'

function Club() {
  return (
    <div className={styles.container}>
        <Outlet />
    </div>
  )
}

export default Club