import React from 'react'
import Head from 'next/head'
import PrivateLayout from './PrivateLayout'


const Dashboard = () => {
  return (
    <PrivateLayout>
      <Head>
        <title>Projeto Inventory | Dashboard</title>
      </Head>
      <div>Dashboard</div>
    </PrivateLayout>

  )
}

export default Dashboard