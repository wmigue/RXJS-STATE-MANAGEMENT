import { sharingInformationService } from '../../services/sharing-information.service'
import { useEffect, useState } from 'react'

function Botones() {

  const [open, setOpen] = useState(false)
  const subscription1$ = sharingInformationService.getSubjectModal()

  useEffect(() => {
    subscription1$.subscribe(data => {
      setOpen(data)
      return () => subscription1$.unsubscribe()
    })
  })

  const handleClick = () => {
    sharingInformationService.setSubjectModal(!open)
    sharingInformationService.setSubjectCounter()
  }

  return (
    <div>
      <button className='botones' onClick={handleClick}>
        Abrir modal
      </button>
    </div>
  )
}

export default Botones
