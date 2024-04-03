import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import './Dashboard.css'
import Header from '../header/Header'
import PopulationGraph from '../graph/PopulationGraph'
import Stack from '@mui/material/Stack';
import CryptoPrices from '../cryptoprice/CryptoPrices'
import MetaMaskIntegration from '../wallet/MetaMaskIntegration'

const Dashboard = () => {
  return (
    <div className='container'>
      <aside className='sidebar-container'>
        <Sidebar />
      </aside>
      <main className='main-container'>
        <Header />
        <Stack direction="row" spacing={2} margin={2} flexWrap={'wrap'}>
          <PopulationGraph />
          <MetaMaskIntegration />
        </Stack>
        <Stack direction="row" spacing={2} margin={2} >
          <CryptoPrices />
        </Stack>

      </main>
    </div>
  )
}

export default Dashboard