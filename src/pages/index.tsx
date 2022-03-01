import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <img src="/assets/next_logo.png" alt="next js logo" width={200} />
      <h1>Next.js Structure</h1>
      <p>A React.js + Next.js structure made for study.</p>

    </Container>
  )
}

export default Home
