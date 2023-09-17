import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const About = () => {
  return (
  <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image src="https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
      fill={true} 
      alt='about'
      className={styles.img}
      />
      <div className={styles.imgText}>
        <h1 className={styles.imgTitle}>Digital Storyteller</h1>
        <h2 className={styles.imgdecs}>Handcrafting award winning digital experiences</h2>
      </div>
      </div>

      <div className={styles.textContainer}>
          <div className={styles.item}>
            <h1 className={styles.title}>Who are you</h1>
            <p className={styles.decs}>To dream about a funeral will usually mean something new and fresh is about to start in your life</p>
        </div>
        <div className={styles.item}></div>
        <h1 className={styles.title}>What we do?</h1>
        <p>Since the beginning of the year, violence in the autonomous region has left more than 400 people dead, including police.</p>
        <Button url="/contact" text="Contact"/>
      </div>
  </div>
  
  )
}

export default About