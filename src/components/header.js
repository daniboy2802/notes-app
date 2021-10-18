import React from 'react'
import styles from '../styles/modules/header.module.scss'
import { Container } from 'semantic-ui-react'

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div>
          <span>
            <p>NotesApp</p>
          </span>
        </div>
      </Container>
    </header>    
  )
}