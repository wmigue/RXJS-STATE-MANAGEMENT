import { useState } from 'react'
import Botones from './components/RxJS/Botones'
import Modal from './components/RxJS/Modal'
import Counter from './components/RxJS/Counter'
import { sharingInformationService } from './services/sharing-information.service'

function App() {
  
  return (
    <div className="App">
      <div className='container'>
        <h2>RxJS</h2>
        <Botones />
        <Counter/>
      </div>
      <Modal />
    </div>
  )
}

export default App
