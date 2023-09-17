import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/social_page.png'
import Button from "@/components/Button/Button"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital.</h1>
        <p className={styles.desc}>
          Turning your idea into Reality. We bring together the teams from the global industry.
        </p>
        <Button url="/portfolio" text="See our works"/>
      </div>
      <div className={styles.item}>
      <Image src={Hero} className={styles.img}/>
      </div>
    </div>   
  );
}
