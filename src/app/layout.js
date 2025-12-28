import React from 'react'
import styles from "@/styles/Home.module.css";
export default function LandingLayout({children}) {
  return (
    <html lang='en'>
      <body className={styles.body}>
        <main>{children}</main>
      </body>
    </html>
  )
}
