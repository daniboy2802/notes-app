import React from 'react'
import styles from '../styles/modules/header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <container className={styles['main-container']}>
        <div className={styles['title-container']}>
          <span>
            <p>NotesApp</p>
          </span>
        </div>
      </container>
    </header>    
  )
}