import Image from "next/image";
import styles from "./page.module.css";
import Juego from "./components/juego";
export default function Home() {
  return (
    <main className={styles.App}>
      <Juego/>

      
    </main>
  );
}
