import { Outlet } from "react-router-dom";
import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
