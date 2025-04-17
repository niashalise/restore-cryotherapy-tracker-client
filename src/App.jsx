import Index from './components/Index'
import Header from './shared/Header'
import { useState } from 'react'
import Modal from './components/Modal'
import NewSession from './components/NewSession';

function App() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  const handleOpen = () => {
    setOpen(true);
  }

  return (
    <>
      <Header />
      <Index />
      <NewSession />
    </>
  )
}

export default App
