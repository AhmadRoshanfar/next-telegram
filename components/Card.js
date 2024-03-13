import Image from "next/image";
import styles from "./styles.module.css";
export default function Card({ title, imageSrc }) {
  return (
    <div className="bg-slate-800 inline-block m-2 p-8 max-w-sm h-sm rounded-md shadow-md text-center border border-solid border-black">
      <Image
        className={styles.cardImage}
        src={imageSrc}
        width={200}
        height={200}
        alt="Picture of the author"
      />
      <h2 className="text-white p-2">{title}</h2>
    </div>
  );
}
