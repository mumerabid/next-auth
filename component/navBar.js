import Link from "next/link"
import styles from "./navBar.module.css"
export default function NavBar() {
    return (
        <>
            <div style={{ paddingTop: '6px' }} className={`${styles.color} ${styles.toRow}`}>
                <div style={{ paddingRight: '55vw' }}>NextAuth</div>
                <div style={{ paddingRight: '3vw' }}>Home</div>
                <div style={{ paddingLeft: '3vw' }}>Dashboard</div>
                <div style={{ paddingLeft: '3vw' }}>Blog</div>
                <div style={{ paddingLeft: '3vw' }}>Login</div>
                <div style={{ paddingLeft: '3vw' }}>SignOut</div>


            </div>
        </>
    )
}
