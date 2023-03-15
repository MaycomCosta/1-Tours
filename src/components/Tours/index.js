import React from 'react'
import Tour from '../Tour'

import * as C from './styles'

const Tours = ({tours, removeTour}) => {

  return (
    <C.Section>
      <C.Title>
        <h2>our tours</h2>
        <C.Underline></C.Underline>
      </C.Title>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour}  removeTour={removeTour}/>
        })}
      </div>
    </C.Section>
  )
}

export default Tours
