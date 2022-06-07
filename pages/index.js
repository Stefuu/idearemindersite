import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Idea Reminder App
        </h1>

        <p className={styles.description}>
        Sometime we have a great idea, but time passes and we let it go, so i want to build an app where whenever you have a great idea you record a short video describing it, the app will list all your ideas and show how long it has been \"rotting\" there, this way you have a sense of the passage of time, and by watching the video and remembering how excited you were when you had the idea maybe makes you get back to it
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://drive.google.com/file/d/11jcXvltNPQkYOVWDkZc8LIFs1z4c9ZLR/view?usp=sharing" className={styles.card}>
            <h1>Download APK</h1>
            <p>Click here to download the app</p>
          </a>
        </div>
      </main>
    </div>
  )
}
