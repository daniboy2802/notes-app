import React, { useState } from 'react'
import styles from '../styles/modules/notesCreationInterface.module.scss';
import { Button, Container, Grid } from 'semantic-ui-react'

export default function NotesCreationInterface() {
  const [note, setNote] = useState("...")

  return (
    <Container className={'main-container'}>
      <textarea 
        value={note}
        onChange={e => setNote(e.target.value)}
        className={styles['textArea']}
      />
      <Grid>
        <Grid.Column floated='right' width={2}>
          <Button
            size='big'
            color='yellow'
            className={styles['button']}
          >
            Submit
          </Button>
        </Grid.Column>
      </Grid>
    </Container>
  )
}
