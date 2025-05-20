import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InvestorTable from './components/InvestorTable'
import './index';

function App() {
  return (
    <>
      <h1>Investors</h1>
      <InvestorTable />
    </>
  )
}

export default App
