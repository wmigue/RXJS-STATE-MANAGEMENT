import { useEffect, useState } from 'react'
import { sharingInformationService } from '../../services/sharing-information.service'

function Modal() {

  const [open, setOpen] = useState(false)
  const [comentarios, setComentarios] = useState('sin definir')
  const subscription$ = sharingInformationService.getSubjectModal()
  const subscription2$ = sharingInformationService.getSubjectCounter()

  useEffect(() => {
    subscription$.subscribe(data => {
      setOpen(data)
      return () => subscription$.unsubscribe()
    })
  })

  useEffect(() => {
    subscription2$.subscribe(data => {
      setComentarios(data)
      return () => subscription2$.unsubscribe()
    })
  })

  const handleClick = () => {
    sharingInformationService.setSubjectModal(false)
  }


  return (
    <div className={open ? 'modalAbierto' : null}>
      {
        open ?
          <div className='elementosModal'>
            <p>Modal esta abierto</p>
            <button onClick={handleClick}>OK</button>
            <div style={{ fontSize: '10px' , border: 'solid 1px red', padding:'10px', marginTop:'10px'}}>
              {comentarios.comentario}<br/>
              {comentarios.otrocomentario}
            </div>
          </div>
          :
          <>
            <p>Modal cerrado</p>
          </>
      }
    </div>

  )

}

export default Modal
