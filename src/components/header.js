import React from 'react'
import styles from '../styles/modules/header.module.scss'
import { Container, Icon } from 'semantic-ui-react'

export default function Header() {
  return (
    <header className={styles.header}>
      <container className={styles['main-container']}>
        <div className={styles['title-container']}>
          <span>
            <Icon 
              size='big'
              color='orange'
              name='sticky note outline'
            />
          </span>
          <span>
            <p>NotesApp</p>
          </span>
        </div>
      </container>
    </header>    
  )
}