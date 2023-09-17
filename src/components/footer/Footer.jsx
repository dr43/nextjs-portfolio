import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {

  
  return (
    <div className={styles.container}>
        <div>2023 Eugeniy Savitsky. All rights reserved</div>
        
        <div className={styles.social}>
          <Image src="/facebook.png" width={30} height={30} className={styles.icon} alt="Lama Dev"/>
          <Image src="/telegram.png" width={30} height={30} className={styles.icon} alt="Lama Dev"/>
          <Image src="/twitter.png" width={30} height={30} className={styles.icon} alt="Lama Dev"/>
          <Image src="/instagram.png" width={30} height={30} className={styles.icon} alt="Lama Dev"/>
        </div>
    </div>        
  
  )
}

export default Footer