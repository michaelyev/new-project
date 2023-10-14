import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts',
  { cache: 'no-store'}
  )

 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
const  Blog = async () => {
  const data = await getData()
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href={`blog/${item.id}`} className={styles.container} key="1">
          <div className={styles.imageContainer}>
            <Image
              src="https://img.freepik.com/free-photo/paper-people-chain-on-green-grass-unity-concept_632805-35.jpg?w=1380&t=st=1685890833~exp=1685891433~hmac=46f15c2161ca525e238313ec9dc0812864411c64035b664d7abecd75e33494e1"
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>description</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Blog