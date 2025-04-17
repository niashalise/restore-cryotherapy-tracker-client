import Index from './components/Index'
import Header from './shared/Header'
import { useState } from 'react'
import Modal from './components/Modal'

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
    </>
  )
}

export default App
