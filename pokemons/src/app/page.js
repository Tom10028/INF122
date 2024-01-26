
import styles from "./page.module.css";
import TarjetaPokemon from "./componentes/tarjetaPokemon";
export default function Home() {
  return (
    <main className={styles.main}>
      <TarjetaPokemon/>
    </main>
  );
}
