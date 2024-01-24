import Image from "next/image";
import styles from "./page.module.css";
import Dog from './components/dogs.js'
export default function Home() {
  return (
    <div>
      <Dog />      
    </div>
  );
}
