import React from 'react'
import { useEffect, useState } from 'react'
import { sharingInformationService } from '../../services/sharing-information.service'

function Counter() {

    const [counter, setCounter] = useState(0)
    const subscription$ = sharingInformationService.getSubjectCounter()

    useEffect(() => {
        subscription$.subscribe(data => {
            setCounter(data)
        })
    })

    return 'se abrio el modal: '+ counter.counterClicks + ' veces.'
 
}

export default Counter