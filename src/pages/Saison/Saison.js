import styles from "./Saison.module.scss";
import { Outlet } from "react-router-dom";

function Saison() {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
}

export default Saison;
