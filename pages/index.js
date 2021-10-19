import Head from 'next/head'
import React, { Fragment } from 'react'
import NotesCreationInterface from '../src/components/notesCreationInterface'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NotesCreationInterface></NotesCreationInterface>
      </main>
    </Fragment>
  )
}
