import Link from "next/link"
import { signIn, signOut } from "next-auth/react"
import styles from "./navBar.module.css"
export default function NavBar() {
    return (
        <>
            <div style={{ paddingTop: '6px' }} className={`${styles.color} ${styles.toRow}`}>
                <Link href="#">
                    <div style={{ paddingRight: '55vw' }}>NextAuth</div>
                </Link>
                <Link href="/">
                    <div style={{ paddingRight: '3vw' }}>Home</div>
                </Link>
                <Link href="/dashboard">
                    <div style={{ paddingLeft: '3vw' }}>Dashboard</div>
                </Link>
                <Link href="/blog">
                    <div style={{ paddingLeft: '3vw' }}>Blog</div>
                </Link>
                <Link href="/api/auth/signin" onClick={(e) => {
                    e.preventDefault();
                    SignIn('github');
                }}>
                    <div style={{ paddingLeft: '3vw' }}>Login</div>
                </Link>
                <Link href="/api/auth/signout" onClick={(e) => {
                    e.preventDefault();
                    SignOut();
                }}>
                    <div style={{ paddingLeft: '3vw' }}>SignOut</div>
                </Link>
            </div>
        </>
    )
}
