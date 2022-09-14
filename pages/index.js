import Head from 'next/head'
import Image from 'next/image'
import { useSession } from "next-auth/react"
import styles from '../styles/Home.module.css'

export default function Home(props) {
  const session = useSession();
  console.log(session);
  return (
    <div className={styles.container}>
      Home
      <div>Authenticated Status: {session.status}</div>
      <div>Name: {session.data?.user.name ? "umer" : ''}</div>
      <div>Email: {session.data?.user.email}</div>
      <img src={session.data?.user.image} alt="" />

    </div>
  )
}
