import React from 'react'
import {Link} from 'react-router-dom'

import styles from './Header.css'

function Header () {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        Mi primera app con react
      </h1>
      <nav role="navigation" className={styles.navigation}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
      </nav>
    </header>
  )
}
export default Header
