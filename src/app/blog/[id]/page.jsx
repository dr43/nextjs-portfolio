import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'


async function getData (id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store',
  });

  if(!res.ok) {
    return notFound()
  }

  return res.json();
}

const BlogPost = async ({params}) => {

  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>
          Description blog more carefully
          </p>
          <div className={styles.author}>
            <Image
            src="https://images.pexels.com/photos/3098683/pexels-photo-3098683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={40}
            height={40}
            className={styles.avatar}
            />
            <span className={styles.username}>Eugeniy Savitsky</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
        <Image
            src="https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg"
            alt=""
            fill={true}
            className={styles.image}
            />
        </div>
    </div>
    <div className={styles.content}>
      <p className={styles.text}>
      By passing a selector argument, we can select the nth element that matches that selector. For example, the following selector matches the first three list items which have a class="important" set.
        
      </p>
      
    </div>
    
  </div>
  )
}

export default BlogPost